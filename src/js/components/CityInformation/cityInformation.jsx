import React from 'react';


export default class CityInformation extends React.Component {
    render() {
        return (
            <div className='card border col-md-6 '>
                <div className='card-header'>City Information</div>
                <div className='card-body'>
                <div className='city-container'>
                    <h4 className='container-title'></h4>
                    <div className='header-city-container'></div>
                    <p className='location'></p>
                    <div className='info-container'>
                    <div className='temperature' >
                        <p>Temperature (F)</p>
                    </div>
                    <div className='pressure' >
                        <p>Pressure</p>
                    </div>
                    <div className='humidity' >
                        <p>Humidity</p>
                    </div>
                    <div className='lowest-temp'>
                        <p>Lowest-Temp (F)</p>
                    </div>
                    <div className='highest-temp'>
                        <p>Highest-Temp (F)</p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            );
    }
} 
