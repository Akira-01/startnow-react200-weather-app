import axios from 'axios';

export function updateSanDiego(userQuery) {
  const weather = 'http://api.openweathermap.org/data/2.5/weather?q=';
  const key = '&APPID=9c04dc2ac7303ff0f2d56e980b293006';
  const farenheit = '&units=imperial';
  userQuery = 'San Diego'

  return {
    type: 'UPDATE_SAN_DIEGO',
    payload: axios({
      method: 'get',
      url: `${weather}${userQuery}${farenheit}${key}`
    })
      .then(response => {
        console.log(response)
        return response;
      })
      .catch((err) => console.log(err))
  };
};

export function updateNewYork(userQuery) {
  const weather = 'http://api.openweathermap.org/data/2.5/weather?q=';
  const key = '&APPID=9c04dc2ac7303ff0f2d56e980b293006';
  const farenheit = '&units=imperial';
  userQuery = 'New York';

  return {
    type: 'UPDATE_NEW_YORK',
    payload: axios({
      method: 'get',
      url: `${weather}${userQuery}${farenheit}${key}`
    })
      .then(response => {
        console.log(response)
        return response;
      })
      .catch((err) => console.log(err))
  };
};

export function updateWashington(userQuery) {
  const weather = 'http://api.openweathermap.org/data/2.5/weather?q=';
  const key = '&APPID=9c04dc2ac7303ff0f2d56e980b293006';
  const farenheit = '&units=imperial';
  userQuery = 'Washington';

  return {
    type: 'UPDATE_WASHINGTON',
    payload: axios({
      method: 'get',
      url: `${weather}${userQuery}${farenheit}${key}`
    })
      .then(response => {
        console.log(response)
        return response;
      })
      .catch((err) => console.log(err))
  };
};

export function updatePhoenix(userQuery) {
  const weather = 'http://api.openweathermap.org/data/2.5/weather?q=';
  const key = '&APPID=9c04dc2ac7303ff0f2d56e980b293006';
  const farenheit = '&units=imperial';
  userQuery = 'Phoenix';

  return {
    type: 'UPDATE_PHOENIX',
    payload: axios({
      method: 'get',
      url: `${weather}${userQuery}${farenheit}${key}`
    })
      .then(response => {
        console.log(response)
        return response;
      })
      .catch((err) => console.log(err))
  };
};

export function updateLa(userQuery) {
  userQuery = 'Los Angeles';
  
  return {
    type: 'UPDATE_LA',
    payload: axios.get(`/api?q=${userQuery}`)
      .then(response => {
        console.log(response)
        return response;
      })
      .catch((err) => console.log(err))
  };
};