var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const connectDB = require("./config/db");
const passport = require("passport");
const cors = require("cors");
require("dotenv").config();
const errorHandler = require("./middleware/errorHandler");

connectDB();

var indexRouter = require("./routes/index");
var userRouter = require("./routes/user");
var catalogRouter = require("./routes/catalog");
var authRouter = require("./routes/auth");
const { connect } = require("http2");

var app = express();

app.use(
  cors({
    credentials: true,
    origin: [
      "http://localhost:3000",
      "https://allwomen-movies-app.herokuapp.com/",
      // "https://margaalmodovar.com",
    ],
  })
);
app.set("trust proxy", 1);

app.use(require("./config/session"));
app.use(passport.initialize());
app.use(passport.session());

require("./config/passport");

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/api/movies", catalogRouter);
app.use("/api/user", userRouter);
// app.use("/api/auth", authRouter);

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

module.exports = app;
