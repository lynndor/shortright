var express = require('express');
var bodyParser = require('body-parser')
var places = require('./routes/places')
var app = express();
var router = express.Router();
const PORT =  process.env.PORT || 3000

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json 
app.use(bodyParser.json())

// Get get a place where the user will get taxis to their requested destination
app.get('/', function(req, res){
})

// app.get('/places', function(req, res){
//   console.log(req)
// })
app.get('/cities', places.getAllCities)

app.get('/places/:from-:destination', places.getPlace)


app.listen(PORT, function(err){
  console.log("running on port", PORT)
  if(err){
      console.log("Something happened", err)
  }
})