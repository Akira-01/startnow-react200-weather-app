import React from 'react';


export default class cityInformation extends React.Component {
    render() {
        const { weatherInfo } = this.props;
        const icon = weatherInfo.data.weather[0].icon;
        console.log(weatherInfo);
        const url = `http://openweathermap.org/img/w/${icon}.png`
        return (
      <div>
        <div className='card' 
             id='city-card-border'>
          <div className='card-header' 
               id='city-card-header'>
            City Information
          </div>
          <div className='card-body'>
            <div className='row justify-content-center'>
              {icon != '' && <img src={url} />}
              <p className='font-weight-bold' 
                 id='cityName'>
                {weatherInfo.data.name}
              </p>
            </div>
            <div className='row justify-content-center'>
              {weatherInfo.data.coord.lat != '' &&
                `Lat/Long: ${weatherInfo.data.coord.lat}, ${weatherInfo.data.coord.lon}`}
            </div>
            <hr />
            <div className='row'>
              <div className='col-4'>
                <p className='font-weight-bold text-center'>
                  Temperature (F)
                </p>
                {weatherInfo.data.main.temp != '' &&
                  <p className='text-center font-weight-bold' 
                     id='cityInformation'>
                    {weatherInfo.data.main.temp}F
                </p>}
              </div>
              <div className='col-4'>
                <p className='font-weight-bold text-center'>
                  Pressure
                </p>
                  <p className='text-center font-weight-bold' 
                     id='cityInformation'>
                    {weatherInfo.data.main.pressure}
                  </p>
              </div>
              <div className='col-4'>
                <p className='font-weight-bold text-center'>
                  Hummidity
                </p>
                {weatherInfo.data.main.humidity != '' &&
                  <p className='text-center font-weight-bold' 
                     id='cityInformation'>
                    {weatherInfo.data.main.humidity}%
                </p>}
              </div>
            </div>
            <div className='row'>
              <div className='col-4'>
                <p className='font-weight-bold text-center'>
                  Lowest Temp(F)
                </p>
                {weatherInfo.data.main.temp_min != '' &&
                  <p className='text-center font-weight-bold' 
                     id='cityInformation'>
                    {weatherInfo.data.main.temp_min}F
                </p>}
              </div>
              <div className='col-4'>
                <p className='font-weight-bold text-center'>
                  Highest Temp(F)
                </p>
                {weatherInfo.data.main.temp_max != '' &&
                  <p className='text-center font-weight-bold' 
                     id='cityInformation'>
                    {weatherInfo.data.main.temp_max}F
                </p>}
              </div>
              <div className='col-4'>
                <p className='font-weight-bold text-center'>
                  Wind Speed
                </p>
                {weatherInfo.data.wind.speed != '' &&
                  <p className='text-center font-weight-bold' 
                     id='cityInformation'>
                    {weatherInfo.data.wind.speed}mph
                </p>}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
};

