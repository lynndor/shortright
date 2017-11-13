var neo4j = require('neo4j-driver').v1
var driver = neo4j.driver("bolt://localhost", neo4j.auth.basic("neo4j", "password123"));

exports.getPlace = function(destination, cb){
    let session = driver.session();
    let places = []  
    session
      .run( 
      'MATCH(place:Place)-[connection:CONNECTS_WITH]->(destination)\
      WHERE destination.name = {destination} \
      RETURN place, connection',
      {destination: destination}
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

