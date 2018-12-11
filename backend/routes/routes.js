const express = require("express");
const videosModel = require('../models/videos');
const customersModel = require('../models/customers');
const adminModel = require('../models/admin');
const router = express.Router();
const multer = require('multer');

const storage = multer.diskStorage({
  destination: function(req,file,cb){
    cb(null,'./src/assets');
  },
  filename: function(req, file, cb){
    cb(null, file.originalname);
  }
});
const upload = multer({storage: storage});

router.post('/addAdmin', (req, res, next) => {
  var admin = adminModel({
    email: req.body.email,
    password: req.body.password
  })
  admin.save(function (err) {
    if (err) throw err;
    console.log("done!");
  })
  res.json(admin);
});
//<------ add Image --------->
router.put('/image',  upload.single('image'),(req, res, next) => {
})

//<------ Add new data --------->
router.post("/add",upload.single('image'), (req, res, next) => {
  var videos = videosModel({
    title: req.body.title,
    rTime: req.body.rTime,
    genre: req.body.genre,
    ratings: req.body.ratings,
    director: req.body.director,
    status: req.body.status,
    image:req.body.image
  })
  videos.save(function (err) {
    if (err) throw err;
    console.log("done!");
  })
  res.send(videos);
});

//<------ Retrieve * Videos  data --------->
router.get('/getVideos', (req, res, next) => {
  console.log('GET: videos list');
  videosModel.find({}, function (err, videos) {
    if (err) throw err;
    res.send(videos);
  });
});

//<------ Retrieve * Customers data --------->
router.get('/getCustomers', (req, res, next) => {
  console.log('GET: customers list');
  customersModel.find({}, function (err, customers) {
    if (err) throw err;
    res.send(customers);
  });
});


//<------ Retrieve data by id --------->
router.get('/get/:id', (req, res, next) => {
  console.log('GET: this is the one:');
  videosModel.findOne({_id: req.params.id},function(err){
    if (err) throw err;
  }).then(video =>res.send(video))
})

//<------ Update data by id --------->
router.post('/:id', (req, res, next) => {
  console.log('UPDATE: Student by id: ' + req.params.id);
  videosModel.updateOne({_id: req.params.id},
    {title:req.body.title,
      rTime: req.body.rTime,
      genre: req.body.genre,
      ratings: req.body.ratings,
      director: req.body.director,
      status: req.body.status,
      image:req.body.image}
    ,function(err){
    if (err) throw err;
  }).then(video => res.send(video))
})

//<------ Update specific field data by id --------->
router.put('/:id', (req, res, next) => {
  console.log('UPDATE: video field by id: ' + req.params.id);
  videosModel.updateOne({_id: req.params.id},
    {status: req.body.status}
    ,function(err){
    if (err) throw err;
  }).then(video => res.json(video))
})


//<------ Delete data by id --------->
router.delete('/:id', (req, res, next) => {
  console.log('UPDATE: Student by id:');
  videosModel.deleteOne({_id: req.params.id},function(err){
    if (err) return handleError(err);
  }).then(video => res.json(video))
});


//<------ Retrieve * Admin users data --------->
router.get('/getAdmin', (req, res, next) => {
  adminModel.find({}, function (err, admin) {
    if (err) throw err;
    res.send(admin);
    console.log(admin);
  });
});




module.exports = router;
