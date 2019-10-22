import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { switchLang, switchUnits } from '../../actions/weatherActions';

const Navbar = ({ weather: { units, lang }, switchLang, switchUnits }) => {
  return (
    <nav className='navbar bg-primary'>
      <h1>
        <i className='fas fa-cloud-sun-rain' /> Weather app
      </h1>
      <ul>
        <li>
          <Link to='/weather-app-redux'>
            {lang === 'en' ? 'Search' : 'Поиск'}
          </Link>
        </li>
        <li>
          <Link to='/weather-app-redux/about'>
            {lang === 'en' ? 'About' : 'Инфо'}
          </Link>
        </li>
        <li>
          <div className='switch'>
            <div className='select'>
              {units === 'metric' ? '°C' : '°F'}
              <i className='fa fa-angle-down' />
            </div>
            <ul className='select-drop'>
              <li onClick={() => switchUnits(units)}>
                {units === 'metric' ? '°F' : '°C'}
              </li>
            </ul>
          </div>
        </li>
        <li>
          <div className='switch'>
            <div className='select'>
              {lang === 'en' ? 'EN' : 'RU'}
              <i className='fa fa-angle-down' />
            </div>
            <ul className='select-drop'>
              <li onClick={() => switchLang(lang)}>
                {lang === 'en' ? 'RU' : 'EN'}
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </nav>
  );
};

Navbar.propTypes = {
  weather: PropTypes.object.isRequired,
  switchLang: PropTypes.func.isRequired,
  switchUnits: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  weather: state.weather
});

export default connect(
  mapStateToProps,
  { switchLang, switchUnits }
)(Navbar);
