var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'expres' });
});

// http://domain.com:3000/users/ ->json
router.get('/users', function(req, res, next) {
  res.json({
        users:["Mork","Kitty","Mory"]
      });
});

//does inputdata exist 
router.get('/user/:userid', function(req, res, next) {
    if( req.params['userid'] == "jack"){
         res.json({
         status:"Jack is not allow"
      });
    }
    return next();
});

router.get('/user/:userid', function(req, res, next) {
   return res.json({
       user: req.params["userid"]
   });
});


module.exports = router;
