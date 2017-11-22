var neo4j = require('neo4j-driver').v1
var driver = neo4j.driver("bolt://localhost", neo4j.auth.basic("neo4j", "password123"));

exports.getPlace = function(from, destination, cb){
    let session = driver.session();
    let places = []  
    session
      .run( 
      'match (to:Place),(t:town),\
      (p:Place)-[r:CONNECTS_WITH]->(to)\
      WHERE ((p:Place)-[:LOCATED_IN]->(t)) AND to.name = {destination} AND t.name = {from}\
      return  p {.*, r:collect(r)}',
      
      {destination: destination, from: from}
    )
      .then(function (result) {
        result.records.forEach(function (record) {
          places.push(record.get('place')) 
          let connection = record.get('connection')          
          places.push(connection.properties)
          // places.push(record.get('connection'))
        });
        cb(places);
        session.close();
      })
      .catch(function (error) {
        cb(error);
      });
 
}

exports.getAllCities = function(cb){
  let session = driver.session()
  let cities = []
  session
  .run(
    'MATCH (city:Town) RETURN city LIMIT 25'
  )
  .then(function (results){
    results.records.forEach(function (record){
      cities.push(record.get('city'))
    });
    cb(cities)
    session.close();
  })
}

exports.addPlace = function(name, address, title, latitude, longitude, cb){
  let places = ["bree", "noord"]
  let session = driver.session()
  let place = '';
    session
    .run(
      `CREATE(place:Place {name: {name}, address: {address}, title: {title}, latitude: {latitude}, longitude:{longitude}})\    
      `,
       {name, address, title, latitude, longitude}
    ).then(function(result){
     result.records.forEach(function(record){
       place = record.get('place')       
       cb(place)
     })
    }
    ).catch(function(error){
      cb(error)
    }
    )
  //  Modify this query
    // match (from:Place {name:"bree"}),(to:Place {name: "noord"}),
    // paths = allShortestPaths((from)-[r:CONNECTS_WITH]->(to))
    // return paths, from, to {.*, r:collect(r)}
    // Order by length(paths) DESC

    // match (to:Place {name: "randburg"}),(t:town {name: "joburg"}),
    // (p:Place)-[r:CONNECTS_WITH]->(to)
    // WHERE ((p:Place)-[:LOCATED_IN]->(t))
    // return p,to {.*, r:collect(r)}

    // match (from:Place {name:"bree"}),(to:Place {name: "noord"}),(t:town {name: "joburg"}), (from)-[r:CONNECTS_WITH]->(to)
    // WHERE (()-[:LOCATED_IN]->(t))
    // return  from, to {.*, r:collect(r)}

  // for(var x = 0; x < places.length; x++){
  //   sessions
  //   .run(
  //     `MATCH(place {name: '${places[x]}'})
  //      RETURN place`,
  //      {name}
  //   ).then(function(result){
  //        console.log(result)
  //       // return
  //     result.records.forEach(function(record){
  //       cb(record.get('place'))
  //       // cb(place)
  //     })  
  //     }

  //   ).catch(function(error){
  //     console.log(error)
  //   })
  // }
} 

