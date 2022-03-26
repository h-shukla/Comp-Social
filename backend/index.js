import express from 'express';
import connectToMongo from './db';
import cors from 'cors';

// constant definitions
const app = express();
const PORT = 5000;
connectToMongo();

// To have the ability to parse json
app.use(express.json());

// To eliminate cross origin request errors
app.use(cors());

// Route accessing the api
app.use('/api', require('./routes/api.js'));

// listening on the specified port
app.listen(PORT, ()=> {
    console.log(`CompSocial backend listening at port ${PORT}`);
});
