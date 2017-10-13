import React,{Component} from 'react';
import { Container, Header, Content, Item, Input, Icon } from 'native-base';

import styles from './styles'
class Search extends Component{
  render(){
    return(
          <Item rounded style={styles.search}>
            <Input placeholder="Find your destination" />
            <Icon name="search"/>
          </Item>
     
    )
  }
}

export default Search