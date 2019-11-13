import React from 'react';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const PeriodItem = ({ weather: { current, lang }, period }) => {
  const { dt, main, weather } = period,
    time = dt + current.offset;
  return (
    <div className='weatheritem'>
      <div className='all-center'>
        <h3>
          <Moment locale={lang} unix format='ddd LT'>
            {time}
          </Moment>
        </h3>
      </div>
      <div className='all-center'>
        <img
          alt={weather[0].description}
          src={`https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
          style={{ width: '100px' }}
        />
      </div>
      <div className='all-center'>
        <h1>{main.temp.toFixed()}°</h1>
      </div>
    </div>
  );
};

PeriodItem.propTypes = {
  period: PropTypes.object.isRequired,
  weather: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  weather: state.weather
});

export default connect(mapStateToProps, null)(PeriodItem);
