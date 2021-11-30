const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    email: {
             type: String,
             required: true
         },
    password: {
             type: String,
             required: true
         },
    title: { 
             type: String,
             required: true 
            },
    firstName: {
             type: String,
             required: true
             },
    lastName: { 
            type: String,
             required: true
             }

});


const Users = mongoose.model('Users', UserSchema)
module.exports = Users