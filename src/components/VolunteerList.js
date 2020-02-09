import React, { useContext } from 'react';
import { store } from '../store';
import Event from './Event';

const VolunteerList = () => {
  const { state: volunteerList } = useContext(store);

  return (
    <div className="volunteer-list">
      <div className="page-divider" style={{ height: '70px' }}></div>
      <h2 className="list-title">Volunteering list</h2>
      <div className="row">
        {volunteerList
          .filter(event => event.volunteer === true)
          .map(event => (
            <Event key={event.id} event={event} />
          ))}
      </div>
    </div>
  );
};

export default VolunteerList;
