import React from 'react';
import { updateHistory, 
         updateWeatherInfo } from '../searchBar/searchActions';

export default class Tabs extends React.Component {
  constructor(props) {
    super(props);

    this.clickTab = this.clickTab.bind(this);
  }

  clickTab(userQuery) {
    const { dispatch } = this.props;
    dispatch(updateWeatherInfo(userQuery));
    dispatch(updateHistory(userQuery));
  };

  render() {
    return (
      <div className="btn-group" 
           role="group">
        <button onClick={() => this.clickTab('San Diego')} 
                type="button" 
                className="btn btn-primary">
                San Diego
        </button>
        <button onClick={() => this.clickTab('New York')} 
                type="button" 
                className="btn btn-primary">
                New York
        </button>
        <button onClick={() => this.clickTab('Washington D.C')} 
                type="button" 
                className="btn btn-primary">
                Washington D.C
        </button>
        <button onClick={() => this.clickTab('Phoenix')} 
                type="button" 
                className="btn btn-primary">
                Phoenix
        </button>
        <button onClick={() => this.clickTab('Los Angeles')} 
                type="button" 
                className="btn btn-primary">
                Los Angeles
        </button>
      </div>
    );
  };
};