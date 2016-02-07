/**
 * Created by alejandrok on 2/6/16.
 */

var mongoose = require('mongoose');

var ProductSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    type: String,
    url: String

});



mongoose.model('Product', ProductSchema);