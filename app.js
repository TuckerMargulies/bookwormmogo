/// next step https://www.npmjs.com/package/scandit-sdk ////


var express           = require ('express'),
    router            = express.Router(),
    mongoose          = require ('mongoose'),
    Schema            = mongoose.Schema,
    Book              = require('./book.js');

router.get('/', function(req, res){
      console.log('inside get /');
      res.render('index');
    });

module.exports = router;
