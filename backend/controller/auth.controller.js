const AuthSchema = require("../models/auth.models");
const bcryptjs = require("bcryptjs");

const register = async (req, res) => {
  try {
    const {
      schoolName,
      contactPerson,
      email,
      phoneNumber,
      streetAddress,
      addressLine2,
      city,
      state,
      zipCode,
      country,
      password,
    } = req.body;

    if (
      !schoolName ||
      !contactPerson ||
      !email ||
      !phoneNumber ||
      !streetAddress ||
      !addressLine2 ||
      !city ||
      !state ||
      !zipCode ||
      !country ||
      !password
    ) {
      return res
        .status(500)
        .json({ message: "All fields are required", success: false });
    }

    const findUser = await AuthSchema.findOne({ email });
    if (findUser) {
      return res
        .status(400)
        .json({ message: "This email ID already register", success: false });
    }

    const passwordHash = bcryptjs.hashSync(password, 10);

    const data = {
      schoolName,
      contactPerson,
      email,
      phoneNumber,
      streetAddress,
      addressLine2,
      city,
      state,
      zipCode,
      country,
      password: passwordHash,
    };

    const newUser = await AuthSchema.create(data);
    if (!newUser) {
      return res
        .status(400)
        .json({ message: "User creation problem", success: false });
    }

    return res
      .status(201)
      .json({ message: "User created successfully", success: true });
  } catch (error) {
    console.log(error);
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "All fields are required", success: false });
    }

    const findUser = await AuthSchema.findOne({ email });
    if (!findUser) {
      return res
        .status(400)
        .json({ message: "Wrong credential", success: false });
    }

    const comparePassword = bcryptjs.compareSync(password, findUser.password);

    if (!comparePassword) {
      return res
        .status(400)
        .json({ message: "Wrong credential", success: false });
    }
    return res
      .status(200)
      .json({ message: `User login successfully`, success: true });
  } catch (error) {
    console.log(error);
  }
};
module.exports = { register, login };
