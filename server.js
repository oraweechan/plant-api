const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();
require('dotenv').config();
const plantController = require('./controllers/plantController');

const PORT = process.env.PORT;

app.use(cors());
app.use(morgan('combined'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/plants', plantController);

app.listen(PORT, () => {
	console.log(`server running on port ${PORT}`);
});
