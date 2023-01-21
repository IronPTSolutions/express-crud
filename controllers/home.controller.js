module.exports.home = (req, res) => {
  // That's how it really works:
  // res.header("Location", "/users");
  // res.status(302).send("redirect!");

  // in one line:
  res.redirect("/users");
};
