import React from 'react';
import { func, string } from 'prop-types';
import styled from 'styled-components';

import { ReactComponent as MoonIcon } from '../icons/moon.svg';
import { ReactComponent as SunIcon } from '../icons/sun.svg';

const ToggleContainer = styled.button`
  position: relative;
  display: flex;
  width: 3rem;
  height: 1.9rem;
  /* margin: 0 auto; */
  border-radius: 30px;
  font-size: 0.5rem;
  padding: 0.4rem;
  overflow: hidden;
  cursor: pointer;
  justify-content: space-between;
  background: ${({ theme }) => theme.gradient};
  border: 2px solid ${({ theme }) => theme.toggleBorder};

  svg {
    width: 1.2rem;
    height: auto;
    transition: all 0.2s linear;
    &:first-child {
      transform: ${({ lightTheme }) =>
        lightTheme ? 'translateY(0)' : 'translateY(100px)'};
    }
    &:nth-child(2) {
      transform: ${({ lightTheme }) =>
        lightTheme ? 'translateY(-100px)' : 'translateY(0)'};
    }
  }
`;

const ToggleModes = ({ theme, toggleTheme }) => {
  const isLight = theme === 'light';

  return (
    <ToggleContainer lightTheme={isLight} onClick={toggleTheme}>
      <SunIcon />
      <MoonIcon />
    </ToggleContainer>
  );
};

ToggleModes.propTypes = {
  toggleTheme: func.isRequired,
  theme: string.isRequired
};

export default ToggleModes;
