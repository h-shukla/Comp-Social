const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { body, validationResult } = require('express-validator');

const authenticate = async (email, password) => {
    try {
        const user = await User.findOne({email: email});
        if (password === user.password) {
            return true;
        } else {
            return false;            
        }
    } catch (e) {
        return false;
    }
};

// ROUTE 1: To login an already existing in the database
router.post('/login', [
    body("email", "Enter a valid email").isEmail(),
    body("password", "Enter password more than 6 characters").isLength({min:6})
], async (req, res)=>{
    try {
        const authRes = await authenticate(req.body.email, req.body.password);
        if (authRes === true) {
            const user = await User.findOne({email: req.body.email});
            return res.json({
                success: true,
                detials: {
                    name: user.name,
                    email: user.email,
                    profiles: user.profiles
                }
            });
        } else {
            return res.json({ success: false });
        }
    } catch (e) {
        console.log(e);
        return res.status(500).send("Internal server error");
    }
});

// ROUTE 2: To create a new user
router.post('/createuser', [
    body("name", "Enter a valid name").isLength({min:3}),
    body("email", "Enter a valid email").isEmail(),
    body("password", "Enter password more than 6 characters").isLength({min:6})
], async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        console.log(errors);
        return res.status(400).json({
            success: false,
            errors: errors.array()
        });
    }
    try {
        // Check if the user already exists
        let user = await User.findOne({
            email: req.body.email
        });
        if (user!==null) {
            console.log(user);
            return res.status(400).json({
                success: false,
                error: "Sorry, a user with this email already exists"
            });
        } else {
            // if user doesn't exist create the user
            user = await User.create({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
                profiles: req.body.profiles
            });
        }
        const uniqueUserId = user.id;
        return res.json({
            success: true,
            userID: uniqueUserId
        });
    } catch (e) {
        console.log(e);
        return res.status(500).send('Internal server error occurred');
    }
});

// ROUTE 3: To Update existing user
router.put('/updateuser', [
    body("email", "Enter a valid email").isEmail(),
    body("password", "Enter password more than 6 characters").isLength({min:6})
], async (req, res) => {
    try {
        let user = await User.findOne({email: req.body.email});
        if (user===null) {
            return res.status(400).json({
                success: false,
                error: "Sorry, there is no user with this email. Try again"
            });
        }
        if (user.password === req.body.password) {
            const updatedUser = req.body.updatedUser;
            const queryRes = await User.updateOne({email: req.body.email}, {
                name: updatedUser.name,
                email: updatedUser.email,
                password: updatedUser.password,
                profiles: updatedUser.profiles,
            });
            console.log(queryRes);
            return res.json({
                success: true,
                newDetails: {
                    name: updatedUser.name,
                    email: updatedUser.email,
                    password: updatedUser.password,
                    profiles: updatedUser.profiles,
                }
            });
        }
        return res.json({
            success: false,
        });
    } catch (e) {
        console.log(e);
        return res.status(500).send("Internal server error occurred");
    }
});

// ROUTE 4: Delete existing user
router.delete('/deleteuser', [
    body("email", "Enter a valid email").isEmail(),
    body("password", "Enter password more than 6 characters").isLength({min:6})
], async (req, res) => {
    if (authenticate(req.body.email, req.body.passowrd)) {
        const user = await User.deleteOne({ email: req.body.email });
        return res.json({
            success: true
        });
    } else {
        return res.json({
            success: false
        });
    }
});

module.exports = router;
