const express = require('express');
const connectToMongo = require('./db');

// constant definitions
const app = express();
const PORT = 5000;
connectToMongo();

// To have the ability to parse json
app.use(express.json());

// Routes for the api
app.use('/api', require('./routes/api.js'));

// listening on the specified port
app.listen(PORT, ()=> {
    console.log(`CompSocial backend listening at port ${PORT}`);
});
