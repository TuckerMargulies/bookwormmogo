var express       = require ('express'),
    Server        = express (),
    bodyParser    = require ('body-parser'),
    PORT          = process.env.PORT || 3000,
    ejs           = require ('ejs'),
    mongoose      = require ('mongoose')
    MONGODB_URI   = process.env.MONGODB_URI || "mongodb://localhost:27017",
    db            = mongoose.connection,
    Schema        = mongoose.Schema,
    Book          = require('./book.js'),
    controller    = require('./app.js'),
    jquery        = require('jquery'),
    expressEjsLayouts = require('express-ejs-layouts'),
    methodOverride    = require('method-override');


////Database set up ///////
mongoose.connect(MONGODB_URI + '/dinnertime', function (){
  console.log('Database is running....')
})

mongoose.set('debut', true);

db.on('open', function (){
  Server.listen(PORT, process.env.IP || "0.0.0", function(){
    console.log('Listening on port ' + PORT)
  })
})

////Set db connection errors /////
db.on("error", console.error.bind(console, "databse connection error: "));

//// set middlware ////

Server.use(methodOverride('_method'))
Server.use(expressEjsLayouts)
Server.use(express.static('./public'))
Server.use(bodyParser.urlencoded({
  extended: true
}))


Server.set('view engine', 'ejs');
///directs render to the views in the ./views folder
Server.set('views', './views')


/// Set Controllers ////
Server.use(controller);
