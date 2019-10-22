import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Alert = ({ weather: { alert } }) => {
  return (
    alert !== null && (
      <div className={`alert alert-dark text-center`}>
        <i className='fas fa-info-circle' /> {alert}
      </div>
    )
  );
};

Alert.propTypes = {
  weather: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  weather: state.weather
});

export default connect(mapStateToProps)(Alert);
