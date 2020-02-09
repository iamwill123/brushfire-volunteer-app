import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import Event from '../components/Event';
import { mockEventList } from '../utils/sampleMockEvent';

// as a user I can see more details for a particular event
describe('<Event /> component', () => {
  let eventComponent;
  let event = mockEventList[0];

  beforeEach(() => {
    eventComponent = render(
      <Router>
        <Event event={event} />
      </Router>
    );
  });

  it('matches snapshot', () => {
    const { asFragment } = eventComponent;
    expect(asFragment()).toMatchSnapshot();
  });

  // as a user I can see some information of an event card
  test('should render an event card with some information', () => {
    const { getByTestId } = eventComponent;

    const eventDate = getByTestId('event-date');
    expect(eventDate).toHaveTextContent('Mon Feb 06, 2020 - Tue Jun 30, 2020');

    const eventTime = getByTestId('event-time');
    expect(eventTime).toHaveTextContent('1:00 PM - 9:00 PM');

    const eventTitle = getByTestId('event-title');
    expect(eventTitle).toHaveTextContent('Sports Instructor');

    const eventLocation = getByTestId('event-location');
    expect(eventLocation).toHaveTextContent('495 3rd Ave. Brooklyn, NY 11215');
  });
});
