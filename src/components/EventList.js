import React, { useState, useRef } from 'react';
import Event from './Event';
import { array } from 'prop-types';

import { SortEventListSelector } from './SortEventListSelector';

const EventList = ({ eventList }) => {
  const [inputVal, setinputVal] = useState('');
  const [sortVal, setSortVal] = useState('');
  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.focus();
  };

  const sortVirtual = value => setSortVal(value);
  const resetInput = () => setinputVal('');

  const handleChange = event => {
    // If the search bar isn't empty
    if (event.target.value) {
      let value = event.target.value;
      setinputVal(value);
    } else {
      setinputVal('');
    }
  };

  if (!eventList) return 'Loading...'; // don't need

  const filteredEventList = eventList.filter(event => {
    if (inputVal !== '') {
      const lcTitle = event.title.toLowerCase();
      const lcOrg = event.organization.toLowerCase();
      const filterVal = inputVal.toLowerCase();

      return lcTitle.includes(filterVal) || lcOrg.includes(filterVal);
    } else if (sortVal) {
      const lcLoc = event.location.toLowerCase();
      return lcLoc.includes(sortVal);
    } else {
      return eventList;
    }
  });

  const FilterSearchInput = (
    <div className="page-divider" onClick={handleFocus}>
      <div className="filter-search">
        <input
          ref={inputRef}
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
      <SortEventListSelector
        sortVirtual={sortVirtual}
        resetInput={resetInput}
      />
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

EventList.propTypes = {
  eventList: array.isRequired
};

export default EventList;
