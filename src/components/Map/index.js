import React, {Component} from 'react'
import MapView from 'react-native-maps'
import {StyleSheet, Dimensions, View} from 'react-native'

const {width, height} = Dimensions.get('screen')
const ASPECT_RATIO = width / height
const LATITUDE = -26.095965
const LONGITUDE = 27.998004
const LATITUDE_DELTA = 0.015;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO



class Map extends Component{
  constructor(props){
    super(props)
    this.state ={
      region: {
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      }
    }
  }
  // onRegionChange(region) {
  //   this.setState({ region });
  // }

  render(){
    return(
      <View>
        <MapView
          initialRegion={this.state.region}
          style={styles.map}
        />
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

