import {GET_PLACES} from '../actions/places'


export default function getPlacesReducer(places = {}, action){
  switch(action.type){
    case GET_PLACES:

    return {
      ...places,
      data: action.data
    }
    default:
      return places
  }
}