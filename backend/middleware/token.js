const jwt = require("jsonwebtoken");
const token = async (req, res, next) => {
  try {
    const { Id } = req.cookies;
    if (!Id) {
      return res
        .status(400)
        .json({ message: "Cookies not found", success: false });
    }
    const userId = await jwt.verify(Id, process.env.JWT_SECRET_KEY);
    if (!userId) {
      return res
        .status(400)
        .json({ message: "User verification problem", success: false });
    }

    req.id = userId;
    next();
  } catch (error) {
    console.log(error);
  }
};

module.exports = token;
