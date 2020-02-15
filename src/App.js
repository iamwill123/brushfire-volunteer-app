import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import EventList from './components/EventList';
import VolunteerList from './components/VolunteerList';
import EventDetails from './components/EventDetails';
import { useEvents } from './store';

import { ThemeProvider } from 'styled-components';
import { useDarkMode } from './styles/useDarkMode';
import { lightTheme, darkTheme } from './styles/theme';
import { GlobalStyles } from './styles/global';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Navbar } from './components/Navbar';
import { NoMatch } from './components/NoMatch';

function App() {
  const { state: eventList } = useEvents();

  // custom hook
  const [theme, toggleTheme, componentMounted] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  if (!componentMounted) {
    return <div>Loading...</div>;
  }
  // Since the GlobalStyles component is a StyledComponent, it has access to theming from the <ThemeProvider> component.
  // A helper component for theming. Injects the theme into all styled components anywhere beneath it in the component tree, via the context API
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
              <Route component={NoMatch} />
            </Switch>
          </div>
        </Router>
        <Footer />
      </>
    </ThemeProvider>
  );
}

export default App;
