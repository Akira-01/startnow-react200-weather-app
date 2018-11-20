import { connect } from 'react-redux';
import SearchHistory from './searchHistory';

function mapStoreToProps(store) {
  return {
    history: store.searchReducer.history,
  };
}

export default connect(mapStoreToProps)(SearchHistory);