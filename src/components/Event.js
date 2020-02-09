import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { store } from '../store';
// import { formatDateTime } from '../utils/dateGenerator';
import { slugifyTitle } from '../utils/slugifyTitle';

const Event = ({ event }) => {
  // let match = useRouteMatch();
  const {
    id,
    title,
    organization,
    location,
    startEndDate,
    startEndTime,
    volunteer,
    imgURL,
    skills,
    desc,
    goodFor,
    requirements
  } = event;

  const [toggleVolunteer, setToggleVolunteer] = useState(volunteer);
  // const [volunteerAtDate, setVolunteerAtDate] = useState(volunteerAt);

  // console.log(volunteerAtDate);

  const { dispatch } = useContext(store);

  // useEffect(() => {
  //   setVolunteerAtDate(volunteerAt);
  // }, [volunteerAt]);

  const toggleClick = () => {
    // console.log('clicked id', id);
    setToggleVolunteer(!toggleVolunteer);
    dispatch({ type: 'TOGGLE_VOLUNTEER', id });
  };

  const details = {
    id,
    title,
    startEndDate,
    startEndTime,
    volunteer,
    imgURL,
    desc,
    skills,
    goodFor,
    requirements,
    location
  };

  return (
    <div className="event-card">
      <Link
        to={{
          pathname: `/event/${slugifyTitle(title)}`,
          state: details
        }}
      >
        <img src={imgURL} alt={title} />
      </Link>

      <div className="event-volunteer-btn">
        <span onClick={toggleClick}>
          <input type="checkbox" checked={toggleVolunteer} readOnly />
          <span data-testid={`volunteer-toggle-${id}`}>
            {toggleVolunteer ? `Volunteering` : `Volunteer`}
          </span>
        </span>
      </div>

      <div className="event-desc">
        {/* <p>date created: {formatDateTime(createdAt)}</p> */}
        <div className="event-date" data-testid="event-date">
          {startEndDate}
        </div>
        <div data-testid="event-time">{startEndTime}</div>
        <Link
          to={{
            pathname: `/event/${slugifyTitle(title)}`,
            state: details
          }}
        >
          <h2 data-testid="event-title">{title}</h2>
        </Link>
        <sub>with {organization}</sub>
        <p data-testid="event-location" className="event-location">
          {location}
        </p>
      </div>
    </div>
  );
};

export default Event;
