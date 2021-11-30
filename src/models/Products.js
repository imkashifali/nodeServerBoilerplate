const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new mongoose.Schema({
    userId: {
             type:Schema.Types.ObjectId,
             ref: 'Users'
         },
    productName: {
             type: String,
             required: true
         },
    productBrand: { 
             type: String,
             required: true 
            },
    productCategory: {
             type: String,
             required: true
             },
    productImageUrl: { 
            type: String,
             },
    productColor: { 
            type: String,
            required: true
            },
    productSize: { 
            type: String,
            required: true
             },
    createdAt: {
            type: Date,
            default: Date.now
          }

});
const Products = mongoose.model('products', UserSchema)
module.exports = Products