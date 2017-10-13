import React from 'react';
import { StackNavigator, DrawerNavigator} from 'react-navigation';
import { Root} from 'native-base'
import home from './screens/Home/HomeScreen'
import hire from './screens/Hire/HireScreen'

const Drawer = DrawerNavigator(
  {
    Home: {screen: home},
    
    Hire: {screen: hire}
  }
)

// This might have to change as time goes on
// const App = StackNavigator(
//   {
//     Drawer: {screen: Drawer}
//   },
//   {
//     initialRouteName: "Drawer",
//     headerMode: 'screen'
//   }
// )

export default () => 
  <Root>
    <Drawer/>
  </Root>


 