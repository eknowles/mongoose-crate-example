var env = process.env.NODE_ENV || 'development',
  config = require('./config')[env];

module.exports = function (app) {
  //=============================
  // Static
  //=============================
  app.get('/', function(req, res) {
    res.sendfile('/index.html', { root: config.rootPath });
  });

  //=============================
  // Bookmark
  //=============================
  var file = require('../app/controllers/file');
  app.get('/file/', file.index);
  app.get('/file/:id', file.show);
  app.post('/file/', file.create);
  app.put('/file/:id', file.update);
  app.del('/file/:id', file.delete);
};
