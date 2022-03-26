import mongoose from 'mongoose';
const mongooseURI = "mongodb://localhost:27017/comp-social?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false";

const connectToMongo = () => {
    mongoose.connect(mongooseURI, () => {
        console.log("Connected to mongo successfully");
    });
};

module.exports = connectToMongo;
