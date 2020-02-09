import React, { useState, useContext } from 'react';
import { store } from '../store';

const EventDetails = props => {
  const {
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
  } = props.location.state;

  const [toggleVolunteer, setToggleVolunteer] = useState(volunteer);
  const { dispatch } = useContext(store);

  const toggleClick = () => {
    setToggleVolunteer(!toggleVolunteer);
    dispatch({ type: 'TOGGLE_VOLUNTEER', id });
  };

  const createMarkup = () => {
    return { __html: desc };
  };

  return (
    <>
      <div className="page-divider" style={{ height: '70px' }}></div>
      <div className="event-details-page">
        <div className="row">
          <div className="event-main">
            <img src={imgURL} alt={title} />
            <div dangerouslySetInnerHTML={createMarkup()} />
          </div>
          <div className="event-date">
            <p data-testid="event-date" className="event-date">
              {startEndDate}
            </p>
            <p data-testid="event-time" className="event-time">
              {startEndTime}
            </p>
            <h1 data-testid="event-title">{title}</h1>
            <p data-testid="event-location">{location}</p>

            <div className="event-volunteer-btn">
              <span onClick={toggleClick}>
                <input type="checkbox" checked={toggleVolunteer} readOnly />
                <span>{toggleVolunteer ? `Volunteering` : `Volunteer`}</span>
              </span>
            </div>

            <div className="more-info">
              <span>Skills</span>
              <ul>
                {skills.map(skill => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>

            <div className="more-info">
              <span>Good for</span>
              <ul>
                {goodFor.map(gfor => (
                  <li key={gfor}>{gfor}</li>
                ))}
              </ul>
            </div>

            <div className="more-info">
              <span>Requirements</span>
              <ul>
                {requirements.map(req => (
                  <li key={req}>{req}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventDetails;
