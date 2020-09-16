const uploadRoutes = require('./upload-routes');
const downloadRoutes = require('./download-routes');

module.exports = app => {
  app.use('/api/download', uploadRoutes);
  app.use('/api/upload', downloadRoutes);
};