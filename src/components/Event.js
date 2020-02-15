import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useEvents } from '../store';
import { slugifyTitle } from '../utils/slugifyTitle';
import { object } from 'prop-types';

const Event = ({ event }) => {
  const {
    id,
    title,
    organization,
    location,
    startEndDate,
    startEndTime,
    volunteer,
    imgURL
  } = event;

  const [toggleVolunteer, setToggleVolunteer] = useState(volunteer);

  const { toggleVolunteering } = useEvents();

  const toggleClick = () => {
    setToggleVolunteer(prevToggleVolunteer => !prevToggleVolunteer);
    toggleVolunteering(id);
  };

  return (
    <div className="event-card">
      <Link
        to={{
          pathname: `/event/${slugifyTitle(title)}`,
          state: event
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
            state: event
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

Event.propTypes = {
  event: object.isRequired
};

export default Event;
