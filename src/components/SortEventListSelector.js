import React, { useState, useContext } from 'react';
import { store } from '../store';

export const SortEventListSelector = () => {
  const sortBy = [
    { name: 'most recent', selected: false },
    { name: 'organization', selected: false },
    // { name: 'virtual', selected: false } <- a nice to have
  ];

  const [sortArray, setSortArray] = useState(sortBy);
  const { dispatch } = useContext(store);

  const handleChange = event => {
    const name = event.target.innerText;
    const updatedSort = sortArray.map(value =>
      value.name === name
        ? { ...value, selected: !value.selected }
        : { ...value, selected: false }
    );

    setSortArray(updatedSort);
    dispatch({ type: 'SORT_BY', sortBy: name });
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
