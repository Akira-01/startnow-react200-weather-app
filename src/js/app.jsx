import React from 'react';
import CityInformation from './components/cityInformation';
import SearchBar from './components/SearchBar';
import SearchHistory from './components/searchHistory';
// import Tabs from './components/tabs';

export default class App extends React.Component {
  render() {
    return (
      <div className='container'>
            <div className='jumbotron'>
              <h1 className='display-3 text-center'>Origin Weather Application</h1>
              <p className='page-description '>Always know if you need an umbrella!</p>
            </div>
            <div className='content-container'>
          <SearchBar />
          <div className="row">
            <CityInformation />
            <SearchHistory />
          </div>
        </div>
      </div>
    );
  }
}
