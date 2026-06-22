const user = require("../models/user");
const bcrypt = require("bcrypt");

exports.registerUser = async (req, res) => {
    try {
        const {
            Name,
            Email,
            Password,
            ConfirmPassword,
            SecurityQuestion,
            Answer
        } = req.body;

        if (
            !Name ||
            !Email ||
            !Password ||
            !ConfirmPassword ||
            !SecurityQuestion ||
            !Answer
        ) {
            return res.status(400).json({
                message: "All fields are required"
            });
        }

        if (Password !== ConfirmPassword) {
            return res.status(400).json({
                message: "Passwords do not match"
            });
        }

        const emailLower = Email.toLowerCase();

        const existingUser = await user.findOne({
            Email: emailLower
        });

        if (existingUser) {
            return res.status(400).json({
                message: "User Already Exists"
            });
        }

        const hashedPassword = await bcrypt.hash(Password, 10);
        const hashedAnswer = await bcrypt.hash(Answer, 10);

        const newUser = new user({
            Name,
            Email: emailLower,
            Password: hashedPassword,
            SecurityQuestion,
            Answer: hashedAnswer
        });

        await newUser.save();

        return res.status(201).json({
            message: "User Registered Successfully"
        });

    } catch (error) {
        console.log("REGISTER ERROR:", error);

        return res.status(500).json({
            message: "Server error"
        });
    }
};

exports.login = async (req, res) => {
    try {
        const { Email, Password } = req.body;

        if (!Email || !Password) {
            return res.status(400).json({
                message: "Email and Password are required"
            });
        }

        const emailLower = Email.toLowerCase();

        const users = await user.findOne({
            Email: emailLower
        });

        if (!users) {
            return res.status(400).json({
                message: "Invalid Email"
            });
        }

        const ismatch = await bcrypt.compare(
            Password,
            users.Password
        );

        if (!ismatch) {
            return res.status(400).json({
                message: "Invalid Password"
            });
        }

        return res.status(200).json({
            message: "Login Successfully",
            userId: users._id,
            Name: users.Name,
            Email: users.Email
        });

    } catch (error) {
        console.log("LOGIN ERROR:", error);

        return res.status(500).json({
            message: "Server error"
        });
    }
};

exports.showData = async (req, res) => {
    try {
        const data = await user.find();

        return res.status(200).json(data);

    } catch (error) {
        console.log("SHOW ERROR:", error);

        return res.status(500).json({
            message: "Server error"
        });
    }
};

exports.deleteData = async (req, res) => {
    try {
        const { id } = req.body;

        if (!id) {
            return res.status(400).json({
                message: "User id is required"
            });
        }

        const deletedUser = await user.findByIdAndDelete(id);

        if (!deletedUser) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        return res.status(200).json({
            message: "User deleted successfully"
        });

    } catch (error) {
        console.log("DELETE ERROR:", error);

        return res.status(500).json({
            message: "Server error"
        });
    }
};

exports.updateData = async (req, res) => {
    try {
        const { id, Name, Email } = req.body;

        console.log("UPDATE REQUEST:", req.body);

        if (!id || !Name || !Email) {
            return res.status(400).json({
                message: "All fields are required"
            });
        }

        const updatedUser = await user.findByIdAndUpdate(
            id,
            {
                Name,
                Email: Email.toLowerCase()
            },
            {
                new: true
            }
        );

        if (!updatedUser) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        return res.status(200).json({
            message: "Profile updated successfully",
            updatedUser
        });

    } catch (error) {
        console.log("UPDATE ERROR:", error);

        return res.status(500).json({
            message: "Server error"
        });
    }
};

exports.getSecurityQuestion = async (req, res) => {
    try {
        const { Email } = req.body;

        if (!Email) {
            return res.status(400).json({
                message: "Email is required"
            });
        }

        const emailLower = Email.toLowerCase();

        const users = await user.findOne({
            Email: emailLower
        });

        if (!users) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        const questionMap = {
            pet: "What is your pet's name?",
            school: "What was the name of your first school?",
            teacher: "Who was your favorite teacher?",
            book: "What is your favorite book?",
            dreamjob: "What was your dream job as a child?"
        };

        return res.status(200).json({
            SecurityQuestion: questionMap[users.SecurityQuestion]
        });

    } catch (error) {
        console.log("QUESTION ERROR:", error);

        return res.status(500).json({
            message: "Server error"
        });
    }
};

exports.resetPassword = async (req, res) => {
    try {
        const {
            Email,
            Answer,
            NewPassword
        } = req.body;

        if (!Email || !Answer || !NewPassword) {
            return res.status(400).json({
                message: "All fields are required"
            });
        }

        const emailLower = Email.toLowerCase();

        const users = await user.findOne({
            Email: emailLower
        });

        if (!users) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        const isAnswerCorrect = await bcrypt.compare(
            Answer,
            users.Answer
        );

        if (!isAnswerCorrect) {
            return res.status(400).json({
                message: "Wrong answer"
            });
        }

        const hashedPassword = await bcrypt.hash(
            NewPassword,
            10
        );

        users.Password = hashedPassword;

        await users.save();

        return res.status(200).json({
            message: "Password updated successfully"
        });

    } catch (error) {
        console.log("RESET ERROR:", error);

        return res.status(500).json({
            message: "Server error"
        });
    }
};