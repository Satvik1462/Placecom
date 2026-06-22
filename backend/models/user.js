const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    Name: { type: String, required: true },
    Email: { type: String, required: true, unique: true },
    Password: { type: String, required: true },
    SecurityQuestion: { type: String, required: true },
    Answer: { type: String, required: true },
    Usertype: { type: String, default: 'user' }

}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);