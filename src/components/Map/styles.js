import {StyleSheet, Dimensions} from 'react-native'
const {width, height} = Dimensions.get('screen')

export default styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
    
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    height:height
  },
  

})
  
