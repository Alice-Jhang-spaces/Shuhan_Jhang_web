const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    fullName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    imagePath: { type: String } // Field to store the path of the uploaded image
});

module.exports = mongoose.model('User', userSchema);
