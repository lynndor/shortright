import React, {Component} from 'react';
import {
  Container,
  Header,
  Title,
  Content,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right,
  List,
  ListItem,
} from "native-base";

import Map from '../../components/Map'
import Search from '../../containers/SearchContainer'
import Output from '../../components/Output'
// 
class HomeScreen extends Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <Container>
        <Header
          
        >
          <Left>
            <Button transparent onPress={() => this.props.navigation.navigate("DrawerOpen")}>
              <Icon
                name="menu"
              />
            </Button>
         </Left> 
            <Body>
              <Title>Home</Title>
            </Body>
        </Header>
        <Map/>
        <Search/>
      
      </Container>
    )
  }
}

export default HomeScreen