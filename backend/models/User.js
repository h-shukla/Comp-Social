const mongoose = require('mongoose');
const {
    Schema
} = mongoose;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    profiles: {
        facebook: {
        	type: String,
        },
        twitter: {
        	type: String,
        }
        linkedin: {
        	type: String,
        }
        github: {
        	type: String,
        }
        instagram: {
        	type: String,
        }
    }
});

const User = mongoose.model('user', UserSchema);
module.exports = User;