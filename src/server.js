require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();
const { PORT } = process.env;

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.listen(PORT, console.log(`server is running on port ${PORT}`));
