import React, { useState, useEffect, useContext } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import EventList from './components/EventList';
import VolunteerList from './components/VolunteerList';
import EventDetails from './components/EventDetails';
import { store } from './store';
// import { SortEventListSelector } from './components/SortEventListSelector';

import { ThemeProvider } from 'styled-components';
import { useDarkMode } from './styles/useDarkMode';
import { lightTheme, darkTheme } from './styles/theme';
import { GlobalStyles } from './styles/global';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Navbar } from './components/Navbar';

function App() {
  const { state } = useContext(store);
  const [loading, setLoading] = useState(true);
  const [eventList, setEventList] = useState(state);

  const [theme, toggleTheme, componentMounted] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  // filter events by most recent as default
  // useEffect(() => {
  //   dispatch({ type: 'SORT_BY', sort: 'most recent' });
  // }, [dispatch]);

  useEffect(() => {
    setEventList(state);
    setLoading(false);
  }, [state]);

  if (!componentMounted || loading) {
    return <div>Loading...</div>;
  }

  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
        <Router>
          <div>
            <Navbar theme={theme} />
            <Header theme={theme} toggleTheme={toggleTheme} />

            <Switch>
              <Route path="/event/:title" component={EventDetails} />
              <Route path="/volunteer" component={VolunteerList} />
              <Route path="/">
                <EventList eventList={eventList} />
              </Route>
              {/* <Route>
              <NoMatch />
            </Route> */}
            </Switch>
          </div>
        </Router>
        <Footer />
      </>
    </ThemeProvider>
  );
}

export default App;
