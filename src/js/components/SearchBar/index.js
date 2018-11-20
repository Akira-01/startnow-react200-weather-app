import { connect } from 'react-redux';
import SearchBar from './searchBar';

function mapStoreToProps(store) {
  return {
    userQuery: store.searchReducer.userQuery,
  };
}

export default connect(mapStoreToProps)(SearchBar);