// Description: Create and use schema 
const mongoose = require('mongoose')

const productSchema = mongoose.Schema(
    {
        Name: {
            type: String,
            required: true,
        },
        Age : {
            type: Number,
            required: true,
            default: 0 
        },
        FavoriteColor: {
            type: String,
            required: true,
        }
    },
    {
        timestamps: true 
    }
)
const Product = mongoose.model('Profile', productSchema);
module.exports = Product; 