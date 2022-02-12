const mongoose = require("mongoose");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);

const sessionStore = new MongoStore({
  mongooseConnection: mongoose.connection,
  collection: "sessions",
});

const ONE_DAY = 1000 * 60 * 60 * 24; // 1 day

const options = {
  resave: false,
  saveUninitialized: true,
  secret: process.env.SECRET,
  store: sessionStore,
  unset: "destroy",
  cookie: {
    httpOnly: true,
    maxAge: ONE_DAY,
    secure: process.env.NODE_ENV !== "development",
  },
};

if (process.env.NODE_ENV !== "development") {
  options.cookie.sameSite = "none";
}

module.exports = session(options);
