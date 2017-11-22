import React, {Component} from 'react'
import {View} from 'native-base'
import Search from '../components/Search'
import {retrievePlacesService, getAllCities } from '../services/places'
import {getPlacesFromGoogle} from '../services/GoogleMaps'
import PlacesList from '../components/Places'

class SearchContainer extends Component{
  constructor(props){
    super(props)
    this.state = {
      destination: '',
      currLocation: {
        latitude: null,
        longitude: null
      },
      searchResults: [],
      places: [],
      currLocationName: '',
      cities:[{
        latitude: null,
        longitude: null
      }]
    } 
  }
  componentDidMount(){
    let city = {
      latitude: null,
      longitude: null
    }
    let cities = []
    getAllCities()
    .then(response => {
 
       response.data.results.map( result => {
         city.latitude = result.properties.latitude
         city.longitude = result.properties.longitude
         cities.push({city})
       })

      this.setState({
        cities: cities
      })
    })
  }
  
  onSetCurrLocation = (location) => {
    console.log(location)
    getPlacesFromGoogle(location)
    .then(response => {

      console.log(response)
        this.setState({
          places: response.data.results         
        })
    })
    .catch(error => {
      console.log(error)
    })
  }

  onSetDestination = (destination) => {
    this.setState({
      destination
    })
  }

  QueryData = () => {
    const {currLocation, destination} = this.state
    const {getPlaces} = this.props

    retrievePlacesService(destination)
    .then(results => {
      this.setState({
        searchResults: results.data.results
      })
    })
  
    .catch((error) => {
      console.log(error)
    })

  }


  handleItemPress = (item) => {
    const {cities, currLocation} = this.state
    console.log(item)
    let location = {
      latitude: item.geometry.location.lat,
      longitude: item.geometry.location.lng
    }
    console.log(location)
    this.setState({
      currLocation: item.geometry.location,
      currLocationName: item.formatted_address,
      places: []
    })
    console.log(currLocation)
    // cities.map(city => {
    //   this.calculateRadius(city,)
    // })
   

  }

   calculateRadius = (coords1, coords2) => {
    var R = 6371000;
    var dLat = toRad(coords2.lat-coords1.lat);
    var dLon = toRad(coords2.lng-coords1.lng);
    var lat1 = toRad(coords1.lat);
    var lat2 = toRad(coords2.lat);
  
    var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2); 
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    var d = R * c;
    console.log(d)
    return d;
  }
  
  toRad = (Value) =>
  {
      return Value * Math.PI / 180;
  }
  
  render(){
    const {searchResults, places, currLocationName} = this.state
    return(
      <View>
        <Search 
          onSetCurrLocation={(location) => this.onSetCurrLocation(location)}
          onSetDestination={(destination) => this.onSetDestination(destination)}
          onQueryData= {this.QueryData}
          currLocationName={currLocationName}
        />
        {searchResults.length > 0 ? <PlacesList items={searchResults}/> : null}
        {places.length > 0 ? <PlacesList items={places} handleItemPress={(item) => this.handleItemPress(item)}/> : null}
      </View>
    ) 
  }
}

export default SearchContainer