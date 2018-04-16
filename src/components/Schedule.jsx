import React from 'react';
import PropTypes from 'prop-types';

function Schedule(props){
  return (
    <div>
      <div className="container">
        <div className="box">
          <h2>{props.location} at Booth {props.booth}</h2>
          <h3>{props.day} - {props.hours}</h3>
        </div>
      </div>
    </div>
  );
}

Schedule.propTypes = {
  location: PropTypes.string,
  booth: PropTypes.string,
  day: PropTypes.string,
  hours: PropTypes.string
};

export default Schedule;
