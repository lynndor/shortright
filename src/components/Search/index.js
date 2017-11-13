import React,{Component} from 'react';
import { Container,  Header, Content, Item, Input, Icon, View } from 'native-base';

import styles from './styles'
class Search extends Component{
  render(){
      const {onSetDestination, onSetCurrLocation, onQueryData} = this.props
    return(
      <View>
        <Item rounded style={styles.search}>
          <Input
            placeholder="From" 
            style={styles.input}
            onChangeText={(text)=> onSetCurrLocation(text)}/>
        </Item>
        <Item rounded style={styles.search}>
          <Input 
            placeholder="Find your destination" 
            style={styles.input}
            onChangeText={(text)=> onSetDestination(text)}/>
          <Icon name="search" onPress={() => onQueryData()}/>
        </Item>
      </View>
   
    )
  }
}

export default Search