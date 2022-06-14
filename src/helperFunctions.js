const fs = require('fs').promises;
const store = require('./store');
require('dotenv').config();

// Function to read the files from directory which is set in .env file
async function readDirectory() {
  try {
    const folderName = process.env.FOLDER_PATH;
    const files = await fs.readdir(folderName);
    return files;
  } catch (error) {
    return false;
  }
}

// Function to save the files from directory into a redux state
async function createFileList() {
  const files = await readDirectory();
  if (files) {
    store.dispatch({
      type: 'CREATE',
      payload: {
        files,
      },
    });
  } else {
    store.dispatch({
      type: 'ERROR',
    });
  }
}

// Function to update the redux state after scanning the files again
async function updateFileList(req, res, next) {
  const files = await readDirectory();
  if (files) {
    await store.dispatch({
      type: 'UPDATE',
      payload: {
        files,
      },
    });
    next();
  } else {
    res.json({ error: 'something went wrong' });
  }
}

module.exports = { createFileList, updateFileList };
