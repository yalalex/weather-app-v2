import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import PropTypes from 'prop-types';
import { selectPlace } from '../../actions/weatherActions';

const PlaceItem = ({ weather: { units }, selectPlace, place }) => {
  const [temp, setTemp] = useState('');
  const [sky, setSky] = useState('');
  const [icon, setIcon] = useState('');

  useEffect(() => {
    getPlaceWeather();
    //eslint-disable-next-line
  }, [units]);

  const getPlaceWeather = async () => {
    const { latitude, longitude } = place;
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=${units}&APPID=${process.env.REACT_APP_OPENWEATHER_KEY}`
    );
    const { main, weather } = res.data;
    if (main.temp.toFixed() === '-0') main.temp = 0;
    setTemp(main.temp.toFixed());
    setSky(weather[0].description);
    setIcon(weather[0].icon);
  };

  const { city, regionCode, country } = place;
  return (
    <Link
      to={`/weather-app-redux/current/${city}`}
      onClick={() => selectPlace(place)}
    >
      <div className='placeitem'>
        <h1>{temp}°</h1>
        <img
          alt={sky}
          src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
          style={{ width: '100px' }}
        />
        <div className='all-center'>
          <h3>
            {city}, {regionCode}
          </h3>
          <h4>{country}</h4>
        </div>
      </div>
    </Link>
  );
};

PlaceItem.propTypes = {
  place: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  weather: state.weather
});

export default connect(
  mapStateToProps,
  { selectPlace }
)(PlaceItem);
