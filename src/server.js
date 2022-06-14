require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
// const appRouter = require('./appRoutes');

const app = express();
const { PORT } = process.env;

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.get('/list', (req, res) => res.json('list'));
app.get('/scan', (req, res) => res.json('scan'));
app.get('/download-state', (req, res) => res.json('state'));

app.listen(PORT, console.log(`server is running on port ${PORT}`));
