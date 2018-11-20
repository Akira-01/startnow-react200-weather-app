import { connect } from 'react-redux';
import CityInformation from './cityInformation';

function mapStoreToProps(store) {
  return {
    weatherInfo: store.searchReducer.weatherInfo


  };
}

export default connect(mapStoreToProps)(CityInformation);