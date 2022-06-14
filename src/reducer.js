/* eslint-disable function-paren-newline */
/* eslint-disable comma-dangle */
/* eslint-disable implicit-arrow-linebreak */

function formatFileObjects(fileArr, active = true) {
  return fileArr.map((fileName) => ({ name: fileName, active }));
}

function createUpdatedList(oldFileArr, newFileArr) {
  // create array of only file names for filtering from the original array
  const oldFileNames = oldFileArr.map((file) => file.name);
  // filter only filenames that are new
  const newFiles = newFileArr.filter((file) => !oldFileNames.includes(file));
  // create an array of both old and new filenames
  const fullFilenameArray = [...oldFileNames, ...newFiles];
  // create a new file array where files, that don't appear in the new array, are marked as inactive
  return fullFilenameArray.map((fileName) =>
    !newFileArr.includes(fileName)
      ? { name: fileName, active: false }
      : { name: fileName, active: true }
  );
}

function reducer(state = [], action) {
  switch (action.type) {
    case 'CREATE':
      return [...formatFileObjects(action.payload.files)];
    case 'UPDATE':
      return [...createUpdatedList(state, action.payload.files)];
    case 'ERROR':
      return { error: 'something went wrong' };
    default:
      return state;
  }
}

module.exports = reducer;
