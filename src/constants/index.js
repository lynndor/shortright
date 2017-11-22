const API_URL = 'http://192.168.0.107:3000'

const GOOGLE_API_URL = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=`
const GOOGLE_API_KEY = 'AIzaSyBQ0DEyddO92FGP9AWlhi06squeJe4rQeE'

export const CITIES_URL = `${API_URL}/cities`
// Places 
export const PLACES_URL_FUNCTION = (destination_query) => `${API_URL}/places/${destination_query}`
export const GOOGLE_PLACES_FUNCTION = (qString) => `${GOOGLE_API_URL}${qString}&key=${GOOGLE_API_KEY}`