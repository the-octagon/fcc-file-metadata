var express = require('express');
var app = express();
var multer = require('multer');
var upload = multer({ dest: './tmp/'});


app.get('/', function (req, res) {
    res.send('Submit a file to view its filesize:<br><br><form method="post" action="/get-file-size" enctype="multipart/form-data"><input type="file" name="userFile" accept="*"><input type="submit"></form> ');
});

app.post('/get-file-size', upload.single('userFile'), function (req, res) {
    
    res.send({size: req.file.size});
    //need to delete tmp files
});

app.listen(8080, function () {
  console.log('file metadata server is running');
})