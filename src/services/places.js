import {get} from './http'

import {PLACES_URL_FUNCTION, CITIES_URL } from '../constants/index'

export const retrievePlacesService = (destination) => {
  return get({
    url: PLACES_URL_FUNCTION(destination),
  })
}

export const getAllCities = () =>{
  return get({
    url: CITIES_URL
  })
}