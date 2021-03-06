import { combineReducers } from 'redux';
import cityReducer from './components/CityInformation/cityReducer';
import searchReducer from './components/SearchBar/searchReducer';
import historyReducer from './components/SearchHistory/historyReducer';


const rootReducer = combineReducers({
    cityReducer: cityReducer,
    searchReducer: searchReducer,
    historyReducer: historyReducer
});

export default rootReducer;
