const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { body, validationResult } = require('express-validator');

// ROUTE 1: To get user already existing in the database
router.get('/getuser', async (req, res)=>{
    try {
        const userID = req.body.id;
        const user = await User.findById(userID);
        return res.send(user);
    } catch (e) {
        console.error(e);
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
        console.log(req.body.email);
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
        console.log("User created: \n" + user);
        return res.json({
            success: true,
            userID: uniqueUserId
        });
    } catch (e) {
        console.log(e);
        return res.status(500).send('Internal server error occurred');
    }
});

module.exports = router;
