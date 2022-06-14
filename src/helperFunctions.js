const fs = require('fs').promises;
const store = require('./store');
require('dotenv').config();

async function readDirectory() {
  try {
    const folderName = process.env.FOLDER_NAME;
    const files = await fs.readdir(folderName);
    return files;
  } catch (error) {
    return false;
  }
}

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
