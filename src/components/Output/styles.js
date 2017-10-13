import {StyleSheet, Dimensions} from 'react-native'
const {width, height} = Dimensions.get('screen')

console.log(height)
export default styles = StyleSheet.create({

  contianer:{
    flex:0,
    flexDirection: 'column',
    position: 'absolute',
    width: width - 4,
    top: height / 2   
  }
})
  
