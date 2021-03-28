const mongoose = require('mongoose');

const foodSchema = new Schema({
	item: {type: String, required: true},
	expiry: {type: String, required: true}
})

const Food = mongoose.model('Food', foodSchema);



const foodListSchema = new Schema({
	uid: {type: String, required: true},
	foodItems: [foodSchema]
})

const FoodList = mongoose.model('Food', foodListSchema, 'foodList');

module.exports = FoodList;
