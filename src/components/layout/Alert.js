import React from 'react';
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

const mapStateToProps = state => ({
  weather: state.weather
});

export default connect(mapStateToProps)(Alert);
