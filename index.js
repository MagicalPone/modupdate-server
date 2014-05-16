var fs = require('fs');
var express = require('express');
var app = express();

var options = {
	port: 12312,
	filedir: __dirname + '/files/mods'
}

app.get('/filelist', function(req, res) {
  fs.readdir(options.filedir, function(err, files) {
    if(err) {
      res.json(500, { error: "Unable to list files", details: err });
    } else {
      res.json(200, { files: files });
    }
  });
});

app.use('/files', express.static(options.filedir));

var server = app.listen(options.port, function() {
    console.log('Listening on port %d', server.address().port);
});
