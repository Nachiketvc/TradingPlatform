const UserModel = require("../model/User");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');

const signup = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Check if the user already exists
        const user = await UserModel.findOne({ email });
        if (user) {
            return res
                .status(409)
                .json({ message: "User already exists, you can login", success: false });
        }

        // Create a new user
        const newUser = new UserModel({ name, email, password });
        newUser.password = await bcrypt.hash(password, 10); // Hash the password
        await newUser.save();

        return res.status(201).json({ message: "Signup Successful", success: true });
    } catch (err) {
        return res.status(500).json({ message: "Internal Server Error", success: false });
    }
};

const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Check if the user exists
        const user = await UserModel.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: "User not found", success: false });
        }

        // Compare the password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: "Invalid credentials", success: false });
        }

        const jwtToken = jwt.sign(
            {email: user.email, _id: user.id},
            process.env.JWT_SECRET,
            {expiresIn : '24h'}
        )

        return res.status(200).json({ message: "Login Successful", success: true, jwtToken, email, name: user.name });
    } catch (err) {
        return res.status(500).json({ message: "Internal Server Error", success: false });
    }
};

module.exports = { signup, login };

