const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const connectDB = require("./config/db");
const passport = require("passport");
const cors = require("cors");
require("dotenv").config();
const errorHandler = require("./middleware/errorHandler");

connectDB();

const indexRouter = require("./routes/index");
const userRouter = require("./routes/user");
const catalogRouter = require("./routes/catalog");
const authRouter = require("./routes/auth");
const { connect } = require("http2");

const app = express();

app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:3000"],
  })
);

app.set("trust proxy", 1);

app.use(require("./config/session"));
app.use(passport.initialize());
app.use(passport.session());

require("./config/passport");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/api/movies", catalogRouter);
app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

/**
 * ========== SERVER ==============
 */

const PORT = process.env.PORT || 4000;
const NODE_ENV = process.env.NODE_ENV || "development";

app.listen(PORT, function () {
  console.log(`Express listening on PORT ${PORT} in ${NODE_ENV} mode`);
});
