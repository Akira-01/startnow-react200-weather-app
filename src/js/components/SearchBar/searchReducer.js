const defaultState = {
  history: [],
  userQuery: '',
  weatherInfo: {
    data: {
      name:'',
      coord: {
        lat: '',
        lon: ''
      },
      main: {
        humidity: '',
        pressure: '',
        temp_max: '',
        temp_min: '',
        temp: '',
      },
      weather: [{
        icon: '',

      }],
      wind:{
        speed: ''
      }
    }
  }
  };

export default function searchReducer (state = defaultState, action) {
  const { type, payload } = action;

  switch (type) {
    case 'UPDATE_SEARCH':{
      return{
        ...state,
        userQuery: payload
      };
    };
    case 'UPDATE_WEATHER_INFO_FULFILLED':{
      return{
        ...state,
        weatherInfo: payload
      };
    };
    case 'UPDATE_SAN_DIEGO_FULFILLED':{
      return{
        ...state,
        weatherInfo: payload,
        history: [...state.history, payload]
      };
    };
    case 'UPDATE_NEW_YORK_FULFILLED': {
      return {
        ...state,
        weatherInfo: payload,
        history: [...state.history, payload]
      };
    };
    case 'UPDATE_WASHINGTON_FULFILLED':{
      return {
        ...state,
        weatherInfo: payload,
        history: [...state.history, payload]
      };
    };
    case 'UPDATE_PHOENIX_FULFILLED': {
      return {
        ...state,
        weatherInfo: payload,
        history: [...state.history, payload]
      };
    };
    case 'UPDATE_LA_FULFILLED': {
      return {
        ...state,
        weatherInfo: payload,
        history: [...state.history, payload]
      };
    };
    case 'UPDATE_HISTORY': {
      return {
        ...state,
        history: [...state.history, payload]
      };
    };

    default:
      return state
  }
}
