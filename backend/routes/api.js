const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.get('/getuser', async (req, res)=>{
    try {
        const userID = req.user.id;
        const user = await User.findById(userID);
        return res.send(user);
    } catch (e) {
        console.error(e);
        return res.status(500).send("Internal server error");
    }
});

router.post('/createuser', (req, res) => {
    res.send('post done');
});

module.exports = router;
