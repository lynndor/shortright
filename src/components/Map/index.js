import React, {Component} from 'react'
import MapView from 'react-native-maps'
import {StyleSheet, Dimensions, View} from 'react-native'

import makerImage from '../../assets/images/SmallMarker.png'
const {width, height} = Dimensions.get('screen')
const ASPECT_RATIO = width / height
const LATITUDE = -26.095965
const LONGITUDE = 27.998004
const LATITUDE_DELTA = 0.015;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO

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
    this.watchId = navigator.geolocation.watchPosition(
      (position) => {
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

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
    
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    height:height
  }});
export default Map

