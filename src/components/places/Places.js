import React from 'react';
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

const mapStateToProps = state => ({
  weather: state.weather
});

export default connect(
  mapStateToProps,
  null
)(Places);
