import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PlaceItem from './PlaceItem';
import Spinner from '../layout/Spinner';

const Places = ({ weather: { places, loading } }) => {
  if (loading) {
    return <Spinner />;
  } else
    return (
      <div className='listitems'>
        {places.map(place => (
          <PlaceItem key={place.id} place={place} />
        ))}
      </div>
    );
};

Places.propTypes = {
  weather: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  weather: state.weather
});

export default connect(
  mapStateToProps,
  null
)(Places);
