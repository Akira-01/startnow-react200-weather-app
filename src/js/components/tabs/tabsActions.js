import axios from 'axios';

export function updateSanDiego(userQuery) {
  userQuery = 'San Diego'

  return {
    type: 'UPDATE_SAN_DIEGO',
    payload: axios.get(`/api?q=${userQuery}`)
    .then(response => {
      console.log(response)
      return response;
    })
    .catch((err) => console.log(err))
  };
};

export function updateNewYork(userQuery) {
  userQuery = 'New York';

  return {
    type: 'UPDATE_NEW_YORK',
    payload: axios.get(`/api?q=${userQuery}`)
      .then(response => {
        console.log(response)
        return response;
      })
      .catch((err) => console.log(err))
  };
};

export function updateWashington(userQuery) {
  userQuery = 'Washington';

  return {
    type: 'UPDATE_WASHINGTON',
    payload: axios.get(`/api?q=${userQuery}`)
      .then(response => {
        console.log(response)
        return response;
      })
      .catch((err) => console.log(err))
  };
};

export function updatePhoenix(userQuery) {
  userQuery = 'Phoenix';

  return {
    type: 'UPDATE_PHOENIX',
    payload: axios.get(`/api?q=${userQuery}`)
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