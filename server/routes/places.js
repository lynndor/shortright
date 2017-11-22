var placesEndPoint = require('../api/placesEndPoint')

exports.getPlace = function(req, res){
  let destination = req.params.destination
  let from = req.params.from
  console.log(from)
  placesEndPoint.getPlace(from, destination, function(results, error){
    if(error){
      res.json({
        error: error
      })
    }
    else{
      res.json({
        results: results
      })
    }
  })
}

exports.addPlace = function(req, res){
  let name ="stryjdompark", address="343 Malibongwe Dr,Ferndale,Johannesburg,2160", title="Sandton City", latitude=-26.0751689, longitude=27.9733745
  placesEndPoint.addPlace(name, address,title, latitude,longitude, function(results, error){
    if(error){
      console.log(error)
    }else{
      console.log(results)
    }
  })
}

exports.getAllCities = function (req, res){
  placesEndPoint.getAllCities(function(results, error){
    if(error){
      res.json({
        error: error
      })
    }
    else {
      res.json({
        results: results
      })
    }
  })
}