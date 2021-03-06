/* eslint-disable no-undef */
const router = require('express').Router();
const mime = require('mime-types');
const processPath = require('../lib/path');

router.get('/:path', (req, res, err) => {
  try {
    const file = processPath(req.params.path).absolutePath;
    // Devuelve el tipo de archivo para insertar en la cabecera
    const mimetype = mime.lookup(file);
    // eslint-disable-next-line no-console
    console.log(mimetype);
    res.setHeader('Content-Disposition', `attachment; filename=${file}`);
    res.setHeader('Content-Type', mimetype);
    res.download(file);
  } catch (err) {
    return res.status(400).json({
      success: false,
      message: err.message
    });
  }
});

module.exports = router;
