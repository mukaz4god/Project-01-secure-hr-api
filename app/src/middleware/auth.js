function authenticate(req, res, next) {
  const userId = req.header("x-user-id");
  const role = req.header("x-user-role");

  if (!userId || !role) {
    return res.status(401).json({
      error: "Missing x-user-id or x-user-role header"
    });
  }

  req.user = {
    id: Number(userId),
    role
  };

  next();
}

module.exports = authenticate;