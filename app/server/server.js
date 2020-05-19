var express = require('express');
var app = express();
var multer = require('multer')

const mkdirp = require('mkdirp')

var cors = require('cors');
app.use(cors());

let incomingfilename = '';

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './temp')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname + '-' + Date.now())
    // console.log("filename: " + file.fieldname)
    incomingfilename = file.originalname
  }
})
var upload = multer({ storage: storage }).any();

// app.post('/upload', upload.any(), (req, res, next) => {
//     if (err instanceof multer.MulterError) {
//       console.log("multer error");
//       return res.status(500).json(err)
//     } else if (err) {
//       console.log("unknown error");
//       return res.status(500).json(err)
//     }
//     // Everything went fine.
//     return res.status(200).send(req.file)  
//   })


app.post('/upload', function (req, res) {
  upload(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      console.log("multer error");
      return res.status(500).json(err)
    } else if (err) {
      console.log("unknown error");
      return res.status(500).json(err)
    }
    // Everything went fine.
    return res.status(200).send(req.file)
  })
})




app.listen(8000, function () {
  console.log('App running on port 8000');
});