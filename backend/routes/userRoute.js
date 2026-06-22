const express = require('express');
const router = express.Router();

const {
    registerUser,
    login,
    showData,
    deleteData,
    updateData,
    getSecurityQuestion,
    resetPassword
} = require("../controllers/userController");


router.post("/register", registerUser);
router.post("/login",login);
router.get("/show",showData);
router.put("/update",updateData);
router.delete("/delete",deleteData);
router.post("/get-security-question", getSecurityQuestion);
router.post("/reset-password", resetPassword);
module.exports = router;