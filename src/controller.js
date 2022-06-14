const fs = require('fs');
const store = require('./store');

async function getFileList(req, res) {
  try {
    const currentState = store.getState();
    res.json(currentState);
  } catch (error) {
    res.json({ error: 'something went wrong' });
  }
}

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
