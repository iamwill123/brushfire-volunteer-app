import React, { useState } from 'react';
import { useEvents } from '../store';
import { func } from 'prop-types';

export const SortEventListSelector = ({ sortVirtual, resetInput }) => {
  const sortBy = [
    { name: 'recently created', selected: false },
    { name: 'organization', selected: false },
    { name: 'virtual', selected: false },
    { name: 'reset', selected: false }
  ];

  const [sortArray, setSortArray] = useState(sortBy);
  const { sortEventsBy, resetEventsList } = useEvents();

  const handleChange = event => {
    const name = event.target.innerText;
    const updatedSort = sortArray.map(value =>
      value.name === name
        ? { ...value, selected: !value.selected }
        : { ...value, selected: false }
    );

    setSortArray(updatedSort);

    if (name === 'reset') {
      resetInput(''); // resets input field as well
      sortVirtual(''); // reset after
      resetEventsList(); // reset to initial state of events via useEvents customHook
    } else if (name === 'virtual') {
      sortVirtual(name); // lift state up for virtual sort
    } else {
      sortVirtual(''); // reset after
      sortEventsBy(name); // useEvents customHook
    }
  };

  return (
    <div className="sort-selector">
      {sortArray.map(value => (
        <span key={value.name} onClick={handleChange}>
          <input type="checkbox" checked={value.selected} readOnly />
          <span>{value.name}</span>
        </span>
      ))}
    </div>
  );
};

SortEventListSelector.propTypes = {
  sortVirtual: func.isRequired,
  resetInput: func.isRequired
};
