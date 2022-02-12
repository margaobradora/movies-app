exports.isAllowed = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.send("<h1>Access Denied</h1>");
};
