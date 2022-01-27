const express = require('express');
const connectToMongo = require('./db');

const app = express();
const PORT = 5000;
connectToMongo();

app.use('/api', require('./routes/api.js'));

app.listen(PORT, ()=> {
    console.log(`CompSocial backend listening at port ${PORT}`);
});
