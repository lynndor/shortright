import {get} from './http'
import {GOOGLE_PLACES_FUNCTION} from '../constants/index'

export const getPlacesFromGoogle = (qstring) =>{
  return get({
    url: GOOGLE_PLACES_FUNCTION(qstring)
  })
}
