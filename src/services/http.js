import axios from 'axios'

function call({method, url, data}){
 return axios({
    method,
    url,
    data
  }).then((response) => {

    return response

  }).catch((error) => {

    throw error

  })
}

export function get({url, data}){
  return call({
    method: 'GET',
    url,
    data
  })
}

export function put({url, data}){
  return call({
    method: 'PUT',
    url,
    data
  })
}

export function upload({url, data}){
  return call({
    method: 'POST',
    url,
    data
  })
}

export function post({url, data}){
  return call({
    method: 'POST',
    url,
    data
  })

}

export function remove ({url, data}){
  return call({
    method: 'DELETE',
    url,
    data
  })
}