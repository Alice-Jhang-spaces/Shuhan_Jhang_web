//Import Required Modules
//express: Used to create a router for defining routes related to user operations.
//multer: Middleware for handling file uploads.
//bcrypt: Library used for hashing passwords securely.
//User: The Mongoose model representing the User collection in MongoDB.

const express = require('express');
const multer = require('multer');
const bcrypt = require('bcryptjs');
const User = require('../models/User'); // Import User model


const router = express.Router();

// Multer setup for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './images');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'image/gif') {
            cb(null, true);
        } else {
            cb(null, false);
        }
    }
});

// User Creation Endpoint
router.post('/create', async (req, res) => {
    const { fullName, email, password } = req.body;
    
    // Validate input
    if (!fullName || !email || !password) {
        return res.status(400).json({ message: "All fields are required" });
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({ message: "Invalid email format." });
    }

    // Full name validation
    if (fullName.length < 3) {
        return res.status(400).json({ message: "Full name must be at least 3 characters long." });
    }
    
    // Password validation (example: min 8 characters, at least one number)
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    if (!passwordRegex.test(password)) {
        return res.status(400).json({ message: "Password must be at least 8 characters long, include at least one uppercase letter, one lowercase letter, and one number." });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({ fullName, email, password: hashedPassword });
    try {
        await newUser.save();
        res.status(201).json({ message: "User created successfully!" });
    } catch (error) {
        // Check for duplicate key error (email already exists)
        if (error.code === 11000 && error.keyPattern && error.keyPattern.email) {
            return res.status(400).json({ message: "Email already exists. Please use a different email address." });
        }
        res.status(500).json({ message: "Error creating user", error });
    }
});


// Update User Details Endpoint
router.put('/edit', async (req, res) => {
    const { email, fullName, password } = req.body;
    
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // Full name validation
        if (fullName && fullName.length < 3) {
            return res.status(400).json({ message: "Full name must be at least 3 characters long." });
        }

        if (fullName) user.fullName = fullName;
        if (password) {
            const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
            if (!passwordRegex.test(password)) {
                return res.status(400).json({ message: "Password must be at least 8 characters long, include at least one uppercase letter, one lowercase letter, and one number." });
            }
            user.password = await bcrypt.hash(password, 10);
        }

        await user.save();
        res.status(200).json({ message: "User updated successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error updating user", error });
    }
});

// Delete User Endpoint
router.delete('/delete', async (req, res) => {
    const { email } = req.body;
    
    try {
        const user = await User.findOneAndDelete({ email });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting user", error });
    }
});

// Retrieve All Users Endpoint
// Retrieve All Users
router.get('/getAll', async (req, res) => {
    try {
        const users = await User.find({}, 'fullName email password'); // Adjust fields as needed
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: "Error retrieving users", error });
    }
});


// Upload Image Endpoint
router.post('/uploadImage', upload.single('image'), async (req, res) => {
    const { email } = req.body;

    if (!req.file) {
        return res.status(400).json({ message: "Invalid file format. Only JPEG, PNG, and GIF are allowed." });
    }

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        user.imagePath = req.file.path;
        await user.save();
        
        res.status(200).json({ message: "Image uploaded successfully", path: req.file.path });
    } catch (error) {
        res.status(500).json({ message: "Error uploading image", error });
    }
});

module.exports = router;
