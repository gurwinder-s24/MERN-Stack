const express = require('express');
const router = express.Router();
const User = require('../models/userModel');
const mongoose = require('mongoose'); // to validate ObjectId

// routes
// CRUD operations

// view/read
router.get('/users',async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json({
                success: true,
                users
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
});

// create
router.post('/users', async (req, res) => {
    try {
        const { name, age, weight } = req.body;
        const newUser = new User({ name, age, weight });
        await newUser.save();
        res.status(201).json({
            success: true,
            newUser,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
});

// update
router.put('/users/:id', async (req, res) => {
    try {
        const { id } = req.params;
        // Validate ObjectId format
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({
                success: false,
                message: 'Invalid user ID format',
            });
        }

        const { name, age, weight } = req.body;
        const updatedUser = await User.findByIdAndUpdate(
            id,
            { name, age, weight },
            { new: true, runValidators: true }  // Returns updated doc & runs validation
        );
        (updatedUser)
            ? res.status(200).json({
                success: true,
                updatedUser,
            })
            : res.status(404).json({
                success: false,
                message: 'User not found',
            });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
});

// delete
router.delete('/users/:id', async (req, res) => {
    try {
        const { id } = req.params;
        // Validate ObjectId format
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({
                success: false,
                message: 'Invalid user ID format',
            });
        }

        const deletedUser = await User.findByIdAndDelete(id);
        (deletedUser)
            ? res.status(200).json({
                success: true,
                deletedUser,
            })
            : res.status(404).json({
                success: false,
                message: 'User not found',
            });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
});


module.exports = router;