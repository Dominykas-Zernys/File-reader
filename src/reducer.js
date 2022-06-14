/* eslint-disable default-param-last */

function formatFileObjects(fileArr) {
  return fileArr.map((fileName) => ({ name: fileName, active: true }));
}

function reducer(state = [], action) {
  switch (action.type) {
    case 'CREATE':
      return [...formatFileObjects(action.payload.files)];
    case 'SCAN':
      return [...state];
    case 'ERROR':
      return { error: 'something went wrong' };
    default:
      return state;
  }
}

module.exports = reducer;
