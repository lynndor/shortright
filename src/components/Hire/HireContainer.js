import React,{Component} from 'react';
import { View } from 'react-native';
import HireComponent from './HireComponent'

export default class HireContainer extends Component{
  constructor(props){
    super(props)
    this.state = {
      date: "08-10-2017"
    }
  }

  onDateChange = (date) => {
    console.log(date)
    this.setState({
      date: date
    })
  }

  onHandleSubmit = (data) =>{
    console.log(data)
  }
  render(){
    const {date} = this.state
    return(
      <View>
       <HireComponent
        date={date}
        onDateChange={(date)=>this.onDateChange(date)}
        onHandleSubmit={(data)=>this.onHandleSubmit(data)}
       />
      </View>
    )
  }
}