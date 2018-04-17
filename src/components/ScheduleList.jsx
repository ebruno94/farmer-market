import React from 'react';
import Schedule from './Schedule';
import {veggies} from '../assets/images/veggies.png';

const marketSchedule = [
  {
    day: 'Sunday',
    location: 'Lents International',
    hours: '9:00am - 2:00pm',
    booth: '4A'
  },
  {
    day: 'Monday',
    location: 'Pioneer Courthouse Square',
    hours: '10:00am - 2:00pm',
    booth: '7C'
  },
  {
    day: 'Tuesday',
    location: 'Hillsboro',
    hours: '5:00pm - 8:30pm',
    booth: '1F'
  },
  {
    day: 'Wednesday',
    location: 'Shemanski Park',
    hours: '10:00am - 2:00pm',
    booth: '3E'
  },
  {
    day: 'Thursday',
    location: 'Northwest Portland',
    hours: '2:00pm - 6:00pm',
    booth: '6D'
  },
  {
    day: 'Saturday',
    location: 'Beaverton',
    hours: '10:00am - 1:30pm',
    booth: '9G'
  }
];
function ScheduleList(){
  return (
    <div>
      <style jsx>{`
        .subtitle{
          background-color: crimson;
          text-align: center;
          text-shadow: 0px 0px 15px white;
          box-shadow: 0px 0px 25px black;
          border: 2px dotted white;
          height: 75px;
          width: 400px;
          padding-top: 30px;
          margin-left: auto;
          margin-right: auto;
        }
      `}</style>
      <h1 className="subtitle">SCHEDULE</h1>
      {marketSchedule.map((schedule, index)=>
        <Schedule
          location= {schedule.location}
          booth= {schedule.booth}
          day= {schedule.day}
          hours= {schedule.hours}
          key={index} />
      )}
      <img src={veggies}/>
    </div>
  );
}

export default ScheduleList;
