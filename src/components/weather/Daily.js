import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import DayItem from './DayItem';
import Spinner from '../layout/Spinner';

const Daily = ({ weather: { forecast15, loading } }) => {
  if (loading) {
    return <Spinner />;
  } else
    return (
      <div className='listitems'>
        {forecast15.map(day => (
          <DayItem key={day.ts} day={day} />
        ))}
      </div>
    );
};

Daily.propTypes = {
  weather: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  weather: state.weather
});

export default connect(
  mapStateToProps,
  null
)(Daily);
