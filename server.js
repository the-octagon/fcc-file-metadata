var express = require('express');
var app = express();
var multer = require('multer');
var upload = multer({ dest: './tmp/'});
var fs = require('fs');


app.get('/', function (req, res) {
    res.send('Submit a file to view its filesize:<br><br><form method="post" action="/get-file-size" enctype="multipart/form-data"><input type="file" name="userFile" accept="*"><input type="submit"></form> ');
});

app.post('/get-file-size', upload.single('userFile'), function (req, res) {
    var response = {size: req.file.size}
    res.send(response);
    fs.unlinkSync(req.file.path);
});

app.listen(8080, function () {
  console.log('file metadata server is running');
})