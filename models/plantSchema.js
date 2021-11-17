const mongoose = require('../db/connection');

const plantSchema = new mongoose.Schema({
	plantName: String,
	plantType: String,
	imageUrl: String,
	needsWater: Boolean,
});

const Plant = mongoose.model('Plant', plantSchema);
module.exports = Plant;
