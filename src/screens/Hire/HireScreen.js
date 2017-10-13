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
              <Title>Hire</Title>
            </Body>
        </Header>
        <Text>Hire</Text>
      </Container>
    )
  }
}

export default HireScreen