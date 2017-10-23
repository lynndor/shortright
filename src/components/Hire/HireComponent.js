import React from 'react'
import t from 'tcomb-form-native'; // 0.6.9
import DatePicker from 'react-native-datepicker'
import {Button, Text, View, Right, Left} from 'native-base'
import { TextInput } from 'react-native';
import styles from './styles'
// import HireForm from './FormSchema'

const Form = t.form.Form 
const HireForm = t.struct({
  destination: t.String,
  departure_location: t.String,
  number_of_travellers: t.Number,
  contact_person: t.String,
  contact_details: t.Number
})

const options = {
  fields: {
    destination: {
      error: 'The destination is required'
    },
    departure_location: {
      error: 'Please enter your depature location'
    },
    contact_person: {
      error: `Please enter a contact person's name`,
    }
  },
};
const HireComponent=(props)=>{
  const {date, onDateChange, onHandleSubmit} = props
  return(

    <View style={styles.container}>
      <Form
        type={HireForm}
        ref={c => this._form = c}
        options={options}
      />
      <Text style={{fontWeight: 'bold',marginBottom: 8}}>Departure Date</Text>
      <DatePicker
        style={{width: 200}}
        date={date}
        mode="date"
        placeholder="select date"
        format="DD-MM-YYYY"
        showIcon={false}
        onDateChange={onDateChange}
      />
     <TextInput
      multiline={true}
      numberOfLines={4}
      style={{borderWidth:1, backgroundColor: '#555555',
}}
     />
   
      <View style={{flexDirection:"row", marginTop: 20}}>
        <Left>
        <Button rounded>
            <Text>Cancel</Text>
          </Button>
        </Left>

        <Right>
          <Button rounded onPress={()=>onHandleSubmit(this._form.getValue())}>
            <Text>Make a request</Text>
          </Button>
        </Right>
      </View>
    </View>
  )
}

export default HireComponent