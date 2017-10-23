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
  ListItem
} from "native-base";

import {HireContainer} from '../../components/Hire'
class HireScreen extends Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <Container>
        <Header>
          <Left>
              <Button transparent onPress={() => this.props.navigation.navigate("DrawerOpen")}>
                <Icon name="menu" />
              </Button>
            </Left>
            <Body>
              <Title>Hire Transport</Title>
            </Body>
        </Header>
        <Content>
          <HireContainer/>
        </Content>
      </Container>
    )
  }
}

export default HireScreen