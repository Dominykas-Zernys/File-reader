const fs = require('fs');
const store = require('./store');

// function to get file list both for /list and /scan routes
async function getFileList(req, res) {
  try {
    const currentState = store.getState();
    res.json(currentState);
  } catch (error) {
    res.json({ error: 'something went wrong' });
  }
}

// function to create and download state object for /download-state route
async function downloadState(req, res) {
  const currentState = store.getState();
  await fs.writeFile('state.json', JSON.stringify(currentState), (err) => {
    if (err) res.json({ err: "couldn't download file" });
    else {
      res.download('state.json');
    }
  });
}

module.exports = { getFileList, downloadState };
