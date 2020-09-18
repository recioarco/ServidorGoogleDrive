const uploadRoutes = require('./upload-routes');
const downloadRoutes = require('./download-routes');

module.exports = app => {
  app.use('/api/download', downloadRoutes);
  app.use('/api/upload', uploadRoutes);
};
