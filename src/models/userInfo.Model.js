const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new mongoose.Schema({
    userId: {
             type:Schema.Types.ObjectId,
             ref: 'Users'
         },
    userAddress: {
             type: String,
             required: true
         },
    city: { 
             type: String,
             required: true 
            },
    country: {
             type: String,
             required: true
             },
    postalCode: { 
            type: String,
            required: true
             },
    street: { 
            type: String,
            required: true
            },
    houseNumber: { 
            type: String,
            required: true
             },
    createdAt: {
            type: Date,
            default: Date.now
          }

});
const userInfo = mongoose.model('userInfo', UserSchema)
module.exports = userInfo