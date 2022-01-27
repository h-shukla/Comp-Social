const express = require('express');
const router = express.Router();

router.get('/getuser', (req, res)=>{
    const user = "hello man";
    res.json(user);
});

router.post('/createuser', (req, res) => {
    res.send('post done');
});

module.exports = router;
