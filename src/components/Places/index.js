import React from 'react';
import { List, ListItem, Left, Right, View, Body, Text, Container, Content} from 'native-base'
import { TouchableOpacity } from 'react-native';
import styles from './styles'

export default PlacesList = (props) =>{
  const {items, handleItemPress} = props
  return(
      <View style={styles.contianer}>
      <List 
        dataArray={items}
        renderRow={(item) =>
          <ListItem
            button
            onPress={() => handleItemPress(item)}
            style={styles.row}>
             
              <Body >
                <Text  >{item.formatted_address}</Text>
                 
              </Body>
              <Right>
                <Text note>3 KM away</Text>
              </Right>
          </ListItem>
        }>
      </List>
    </View>

  )
}