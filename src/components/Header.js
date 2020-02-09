import React from 'react';
import ToggleModes from './ToggleModes';
import VolunteerLogo from '../icons/volunteer-logo.png';

export const Header = ({ theme, toggleTheme }) => {
  return (
    <div className="header">
      <img className='volunteer-logo' src={VolunteerLogo} alt="volunteer logo" />
      <h1>Find your next volunteer opportunity</h1>
      <span>6 events near you</span>
      <div className="toggleModeWrapper">
        <ToggleModes theme={theme} toggleTheme={toggleTheme} />
      </div>
    </div>
  );
};
