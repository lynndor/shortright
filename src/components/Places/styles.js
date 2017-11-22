import {StyleSheet, Dimensions} from 'react-native'

export default styles = StyleSheet.create({

  contianer:{
    // flex: 1,
    padding: 8,
    flexDirection: 'row', // main axis
    backgroundColor: '#F5F5F5',
  },
  underline:{
    borderBottomColor: '#006064',
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  row: {
    elevation: 1,
    borderRadius: 2,
    // backgroundColor: colors.tertiary,
    // flex: 1,
    flexDirection: 'row',  // main axis
    justifyContent: 'flex-start', // main axis
    alignItems: 'center', // cross axis
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 18,
    paddingRight: 16,
    marginLeft: 14,
    marginRight: 14,
    marginTop: 15,
    marginBottom: 15,
    backgroundColor: '#FAFAFA'
  },
})
  
