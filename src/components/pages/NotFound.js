import React, { Fragment } from 'react';
import { connect } from 'react-redux';

const NotFound = ({ weather: { lang } }) => {
  return lang === 'en' ? (
    <Fragment>
      <h2>Not Found</h2>
      <p className='lead'>The page you are looking for does not exist...</p>
    </Fragment>
  ) : (
    <Fragment>
      <h2>Страница не найдена</h2>
      <p className='lead'>Страница, которую вы ищете, не существует...</p>
    </Fragment>
  );
};

const mapStateToProps = state => ({
  weather: state.weather
});

export default connect(mapStateToProps)(NotFound);
