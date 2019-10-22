import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const About = ({ weather: { lang } }) => {
  return lang === 'en' ? (
    <Fragment>
      <h2>About this app</h2>
      <p>
        An application for finding weather in more than 134,000 cities in the
        world.
      </p>
      <p>
        Provides information on current weather, as well as a detailed forecast
        for the next 48 hours and a forecast for 15 days.
      </p>
      <p>
        Made by <a href='https://github.com/yalalex/'>Alex Y</a>.
      </p>
    </Fragment>
  ) : (
    <Fragment>
      <h2>О приложении</h2>
      <p>Приложение для поиска погоды в более чем 134 000 городах мира.</p>
      <p>
        Предоставляет информацию по текущей погоде, а так же подробный прогноз
        на ближайшие 48 часов и прогноз на 15 дней.
      </p>
      <p>
        Сделал <a href='https://github.com/yalalex/'>Alex Y</a>.
      </p>
    </Fragment>
  );
};

About.propTypes = {
  weather: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  weather: state.weather
});

export default connect(mapStateToProps)(About);
