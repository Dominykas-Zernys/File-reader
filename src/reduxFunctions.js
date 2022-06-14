require('dotenv').config();
const fs = require('fs').promises;

async function readDirectory() {
  const folderName = process.env.FOLDER_NAME;
  const files = await fs.readdir(folderName);
  console.log(files);
}

module.exports = { readDirectory };
