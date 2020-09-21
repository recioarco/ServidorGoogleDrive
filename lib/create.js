const path = require("path");
const fs = require("fs");

const createDir = (dir, storagePath) => {
  const filePath = path.join(storagePath, dir);

  return new Promise((resolve, reject) => {
    // --
    fs.promises
      .mkdir(filePath)
      .then(() => resolve())
      .catch(() => reject(new Error('Directory could not be created')));
  });
  // --
};

module.exports = createDir;
