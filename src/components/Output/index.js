import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Text, Icon, Right, H3, Left, Body, Button, Center } from 'native-base';
import styles from './styles'
class Output extends Component{
  render(){
    return(
          <Card style={styles.contianer}>
            <CardItem>
              <Body>
                <H3>Destination</H3>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Body>
                  <Text>Place : ssdsdasas</Text>
                  <Text>Rank</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem style={styles.action}>
              <Left>
                <Button transparent style={{flexDirection: 'column'}}>
                  <Icon name="share"/>
                  <Text>Share</Text>
                </Button>
              </Left>
              <Body>
              <Button transparent style={{flexDirection: 'column'}}>
                 <Icon name="bookmark"/>
                  <Text>Print</Text>
              </Button>
              </Body>
            
              <Right>
              <Button transparent style={{flexDirection: 'column'}}>
                  <Icon name="navigate"/>
                  <Text>navigate</Text>
                </Button>
              </Right>
            </CardItem>
          </Card>
    )
  }
}

export default Output