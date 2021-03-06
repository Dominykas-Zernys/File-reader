require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const { createFileList, updateFileList } = require('./helperFunctions');
const { getFileList, downloadState } = require('./controller');

const app = express();
const { PORT } = process.env;

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Routes
app.get('/list', getFileList);
app.get('/scan', updateFileList, getFileList);
app.get('/download-state', downloadState);

// Server launch and reading directory files
app.listen(PORT, createFileList);
