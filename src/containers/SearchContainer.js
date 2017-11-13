import React, {Component} from 'react'
import Search from '../components/Search'
import axios from 'axios'

class SearchContainer extends Component{
  constructor(props){
    super(props)
    this.state = {
      destination: '',
      currLocation: ''
    } 
  }

  onSetCurrLocation = (currLocation) => {
    this.setState({
      currLocation
    })
  }

  onSetDestination = (destination) => {
    this.setState({
      destination
    })
  }

  QueryData = () => {
    const {currLocation, destination} = this.state
    // console.log(destination)
    axios.get(`http://8f2cf3fe.ngrok.io/places/${destination}`)
    .then((response)=>{
      console.log(response)
    })
    .catch((error)=>{
     console.log(error) 
    })
  }

  render(){
    return <Search 
      onSetCurrLocation={(currLocation) => this.onSetCurrLocation(currLocation)}
      onSetDestination={(destination) => this.onSetDestination(destination)}
      onQueryData= {this.QueryData}
    />
  }
}

export default SearchContainer