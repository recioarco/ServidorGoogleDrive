const uploadRoutes = require('./upload-routes');
const downloadRoutes = require('./download-routes');
const contentRoutes = require('./content-routes');
const dirRoutes = require('./dir-routes');

module.exports = app => {
  app.use('/api/download', downloadRoutes);
  app.use('/api/upload', uploadRoutes);
  app.use('/api/content', contentRoutes);
  app.use('/api/dir', dirRoutes);
};
