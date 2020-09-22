const express = require("express");
const processPath = require("../lib/path");
const createDir = require("../lib/create");

const router = express.Router();

router.post("/:path?", async (req, res, next) => {
  try {
    const dirPath = processPath(req.params.path);
    const dir = dirPath.absolutePath;
    if (!req.body.newdirectory) {
      return res.status(400).json({
        success: false,
        message: "No found argument on request",
      });
    }
    const { newdirectory } = req.body;

    await createDir(newdirectory, dir);

    return res.json({
      path: dirPath.relativePath,
      directory: `${dirPath.relativePath}/${newdirectory}`,
      success: true,
    });
  } catch (err) {
    return res.status(400).json({
      success: false,
      message: err.message
    });
  }
});

module.exports = router;
