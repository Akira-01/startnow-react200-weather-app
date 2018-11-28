import axios from 'axios';

export function updateSearch(userQuery) {
  
    return {
      type: 'UPDATE_SEARCH',
      payload: userQuery
    };
  };

  export function updateWeatherInfo(userQuery) {

    return {
      type: 'UPDATE_WEATHER_INFO',
      payload: axios.get(`/api?q=${userQuery}`)
        .then(response => {
          
          return response;
        })
        .catch((err) => console.log(err))
    };
  };
  
  export function updateHistory(userQuery) {
  
    return {
      type: 'UPDATE_HISTORY',
      payload: {
        cityName: userQuery.replace(/\b\w/g, l => l.toUpperCase()),
        searchDate: new Date().toString()
      }
    };
  }