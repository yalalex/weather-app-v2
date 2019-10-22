import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  searchPlaces,
  clearSearch,
  setAlert
} from '../../actions/weatherActions';

const Search = ({
  weather: { lang, places },
  history,
  location,
  searchPlaces,
  clearSearch,
  setAlert
}) => {
  const [text, setText] = useState('');

  useEffect(() => {
    history.push('/weather-app-redux');
    //eslint-disable-next-line
  }, [places]);

  const onSubmit = e => {
    e.preventDefault();
    if (text === '') {
      const alert =
        lang === 'en'
          ? 'Please enter something'
          : 'Пожалуйста, введите что-нибудь';
      setAlert(alert);
    } else {
      searchPlaces(text, lang);
      setText('');
    }
  };

  const onChange = e => setText(e.target.value);

  return (
    <div>
      <form onSubmit={onSubmit} className='form'>
        <input
          type='text'
          name='text'
          value={text}
          placeholder={
            lang === 'en'
              ? 'Enter City Name...'
              : 'Введите название города на русском языке...'
          }
          onChange={onChange}
        />
        <input
          type='submit'
          value={lang === 'en' ? 'Search' : 'Поиск'}
          className='btn btn-dark btn-block'
        />
      </form>
      {places.length > 0 && location.pathname === '/weather-app-redux' && (
        <button className='btn btn-grey btn-block my-1' onClick={clearSearch}>
          {lang === 'en' ? 'Clear' : 'Очистить'}
        </button>
      )}
    </div>
  );
};

Search.propTypes = {
  weather: PropTypes.object.isRequired,
  searchPlaces: PropTypes.func.isRequired,
  clearSearch: PropTypes.func.isRequired,
  setAlert: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  weather: state.weather
});

export default connect(
  mapStateToProps,
  { searchPlaces, clearSearch, setAlert }
)(Search);
