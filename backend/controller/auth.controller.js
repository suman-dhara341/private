const AuthSchema = require("../models/auth.models");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

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
    const userId = jwt.sign({ id: findUser._id }, process.env.JWT_SECRET_KEY, {
      expiresIn: "1d",
    });

    return res
      .cookie("Id", userId, {
        maxAge: 24 * 60 * 60 * 1000,
        httpOnly: true,
      })
      .status(200)
      .json({ message: `User login successfully`, success: true });
  } catch (error) {
    console.log(error);
  }
};

const userProfileGet = async (req, res) => {
  try {
    const id = req.id.id;

    const findUser = await AuthSchema.findOne({ _id: id }).select("-password");
    if (!findUser) {
      return res.state(400).json({ message: "User not found", success: false });
    }
    return res.status(200).json({ user: findUser, success: true });
  } catch (error) {
    console.log(error);
  }
};

const userProfileUpdate = async (req, res) => {
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
    } = req.body;

    const findUser = await AuthSchema.findOne({ _id: id }).select("-password");
    if (!findUser) {
      return res.state(400).json({ message: "User not found", success: false });
    }

    if (schoolName) findUser.schoolName = schoolName;
    if (contactPerson) findUser.contactPerson = contactPerson;
    if (email) findUser.email = email;
    if (phoneNumber) findUser.phoneNumber = phoneNumber;
    if (streetAddress) findUser.streetAddress = streetAddress;
    if (addressLine2) findUser.addressLine2 = addressLine2;
    if (city) findUser.city = city;
    if (state) findUser.state = state;
    if (zipCode) findUser.zipCode = zipCode;
    if (country) findUser.country = country;

    await findUser.save();

    return res
      .status(200)
      .json({ message: "Data update successfully", success: true });
  } catch (error) {
    console.log(error);
  }
};
module.exports = { register, login, userProfileGet, userProfileUpdate };
