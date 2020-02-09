import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import BrushFireLogo from '../icons/bf-logo-full-light-480.png';

export const Navbar = ({ theme }) => {
  const [scrolling, setScrolling] = useState(false);
  // const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const onScroll = e => {
      setScrolling(e.target.documentElement.scrollTop > 10);
    };
    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className="nav-wrapper"
      style={{ borderBottom: scrolling ? '1px solid grey' : '' }}
    >
      <ul className="nav">
        <li>
          <Link to="/" style={{ borderBottom: '0px', paddingBottom: '0px' }}>
            <img
              style={{
                background: theme === 'light' ? '#d1410c' : 'transparent'
              }}
              src={BrushFireLogo}
              className="brushfire-logo"
              alt={'Brushfire fire logo'}
            />
          </Link>
        </li>
        <ul>
          <li>
            <NavLink to="/" activeClassName="selectedLink" exact>
              Explore
            </NavLink>
          </li>
          <li>
            <NavLink to="/volunteer" activeClassName="selectedLink" exact>
              Your Events
            </NavLink>
          </li>
        </ul>
      </ul>
    </div>
  );
};
