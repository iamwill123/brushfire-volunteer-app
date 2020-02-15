import React from 'react';
import ToggleModes from './ToggleModes';
import VolunteerLogo from '../icons/volunteer-logo.png';
import { func, string } from 'prop-types';
import styled from 'styled-components';

const StyledH1 = styled.h1`
  color: ${({ theme }) => (theme.text === '#363537' ? '#750954' : '#139b9e')};
`;

export const Header = ({ theme, toggleTheme }) => {
  return (
    <div className="header">
      <img
        className="volunteer-logo"
        src={VolunteerLogo}
        alt="volunteer logo"
      />
      <StyledH1>Find your next volunteer opportunity</StyledH1>
      <span>6 events near you</span>
      <div className="toggleModeWrapper">
        <ToggleModes theme={theme} toggleTheme={toggleTheme} />
      </div>
    </div>
  );
};

Header.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired
};
