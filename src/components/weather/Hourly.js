import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PeriodItem from './PeriodItem';
import Spinner from '../layout/Spinner';

const Hourly = ({ weather: { forecastToday, loading } }) => {
  if (loading) {
    return <Spinner />;
  } else
    return (
      <div className='listitems'>
        {forecastToday.map(period => (
          <PeriodItem key={period.dt} period={period} />
        ))}
      </div>
    );
};

Hourly.propTypes = {
  weather: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  weather: state.weather
});

export default connect(
  mapStateToProps,
  null
)(Hourly);
