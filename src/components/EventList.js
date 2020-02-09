import React, { useState } from 'react';
import Event from './Event';
import { SortEventListSelector } from './SortEventListSelector';

const EventList = ({ eventList }) => {
  const [inputVal, setinputVal] = useState('');

  const handleChange = event => {
    // If the search bar isn't empty
    if (event.target.value) {
      let value = event.target.value;
      setinputVal(value);
    } else {
      setinputVal('');
    }
  };

  if (!eventList) return 'Loading...';

  const filteredEventList = eventList.filter(event => {
    if (inputVal !== '') {
      const lcTitle = event.title.toLowerCase();
      const lcOrg = event.organization.toLowerCase();
      const filterVal = inputVal.toLowerCase();

      return lcTitle.includes(filterVal) || lcOrg.includes(filterVal);
    } else {
      return eventList;
    }
  });

  const FilterSearchInput = (
    <div className="page-divider">
      <div className="filter-search">
        <input
          type="text"
          className="input"
          value={inputVal}
          onChange={handleChange}
          placeholder="Search by org or title..."
        />
      </div>
    </div>
  );

  return (
    <>
      {FilterSearchInput}
      <SortEventListSelector />
      <div className="event-list">
        <h2 className="list-title">Volunteer in New York</h2>
        <div className="row" data-testid="event-list">
          {filteredEventList.map(event => (
            <Event key={event.id} event={event} />
          ))}
        </div>
      </div>
    </>
  );
};

export default EventList;
