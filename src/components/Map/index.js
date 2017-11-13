import React, {Component} from 'react'
import MapView, {Circle} from 'react-native-maps'
import {StyleSheet, Dimensions, View} from 'react-native'

import GOOGLE_API_KEY from '../../config/API_KEYS'
import makerImage from '../../assets/images/MWR.png'
import styles from './styles'
const {width, height} = Dimensions.get('screen')
const ASPECT_RATIO = width / height
const LATITUDE = -26.095965
const LONGITUDE = 27.998004
const LATITUDE_DELTA = 0.015;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO

const customStyle = [
  {
    elementType: 'geometry',
    stylers: [
      {
        color: '#F5F5F5',
      },
    ],
  },
  {
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#212121',
      },
    ],
  },
  {
    elementType: 'labels.text.stroke',
    stylers: [
      {
        color: '#F5F5F5',
      },
    ],
  },
  {
    featureType: 'administrative.locality',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#d59563',
      },
    ],
  },
  {
    featureType: 'poi',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#d59563',
      },
    ],
  },
  {
    featureType: 'poi.park',
    elementType: 'geometry',
    stylers: [
      {
        color: '#C8E6C9',
      },
    ],
  },
  {
    featureType: 'poi.park',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#6b9a76',
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'geometry',
    stylers: [
      {
        color: '#CFD8DC',
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'geometry.stroke',
    stylers: [
      {
        color: '#90A4AE',
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#9ca5b3',
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry',
    stylers: [
      {
        color: '#212121',
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry.stroke',
    stylers: [
      {
        color: '#B0BEC5',
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#f3d19c',
      },
    ],
  },
  {
    featureType: 'transit',
    elementType: 'geometry',
    stylers: [
      {
        color: '#90A4AE',
      },
    ],
  },
  {
    featureType: 'transit.station',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#d59563',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [
      {
        color: '#ECEFF1',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#ECEFF1',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'labels.text.stroke',
    stylers: [
      {
        color: '#546E7A',
      },
    ],
  },
]

class Map extends Component{
  constructor(props){
    super(props)
    this.state = {
      region: {
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      },
      markers: []
    }
  }

  componentWillMount() {
    console.log()
    this.watchId = navigator.geolocation.watchPosition(
      (position) => {
        console.log("position")
        let latlong = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,

        }
        this.setState({
          region:{
            latitude:position.coords.latitude,
            longitude: position.coords.longitude,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
          },
          markers: [latlong],
          error: null,
        });
      },
      (error) => this.setState({ error: error.message }),
      { enableHighAccuracy: false, timeout: 20000, maximumAge: 1000, distanceFilter: 10 },
    );

    // Get Location address
    // fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${this.state.region.latitude},${this.state.region.longitude}&key=AIzaSyDeMwqwFs6FIaT8dntEuNjMFAOYG8CsXBg`,{
    //   method: 'get'
    // }).then((response) => {
    //   if(response){
    //     console.log(response.json())
    //   }
      
    // }).catch((error) => {
    //   console.log(error)
    // })
  }

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchId);
  }

  render(){
    return(
      <View>
        <MapView
          initialRegion={this.state.region}
          style={styles.map}
          customMapStyle={customStyle}
          moveOnMarkerPress={false}
        >
          {this.state.markers.map(marker => (
            <MapView.Marker
              coordinate={marker}
              key={marker.latitude}
              image={makerImage}
            />
          ))}
        </MapView>
      </View>
    )
  }
}

// const styles = StyleSheet.create({
//   container: {
//     ...StyleSheet.absoluteFillObject,
//     justifyContent: 'flex-end',
//     alignItems: 'center',
    
//   },
//   map: {
//     ...StyleSheet.absoluteFillObject,
//     height:height
//   }});
export default Map

