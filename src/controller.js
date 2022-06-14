const store = require('./store');

async function getPageList(req, res) {
  try {
    const currentState = store.getState();
    res.json(currentState);
  } catch (error) {
    res.json({ error: 'something went wrong' });
  }
}

module.exports = getPageList;
