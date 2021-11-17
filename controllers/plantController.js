const express = require('express');
const router = express.Router();
const Plant = require('../models/plantSchema');

router.post('/', (req, res) => {
	Plant.create(req.body).then((plant) => {
		res.status(201).json({ status: 201, plant: plant });
	});
});

router.get('/', (req, res) => {
	Plant.find().then((plants) => {
		res.json({ status: 200, plants: plants });
	});
});

router.put('/:id', (req, res) => {
	Plant.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }).then(
		(plant) => {
			res.status(200).json({ status: 200, plant: plant });
		}
	);
});

router.delete('/:id', (req, res) => {
	Plant.deleteOne({ _id: req.params.id }).then(() => {
		res.status(204).json();
	});
});

module.exports = router;
