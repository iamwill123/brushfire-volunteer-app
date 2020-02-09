import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, waitForElement, fireEvent } from '@testing-library/react';
import EventList from '../components/EventList';
import { mockEventList } from '../utils/sampleMockEvent';
import { StateProvider } from '../store';

// https://testing-library.com/docs/react-testing-library/intro
describe('<EventList /> component', () => {
  let list;

  beforeEach(() => {
    list = render(
      <StateProvider>
        <Router>
          <EventList eventList={mockEventList} />
        </Router>
      </StateProvider>
    );
  });

  it('matches snapshot', () => {
    const { asFragment } = list;
    expect(asFragment()).toMatchSnapshot();
  });

  // As a user I should see a list of events
  test('should render correct number of events', async () => {
    const { getByTestId } = list;

    const eventList = await waitForElement(() => getByTestId('event-list'));
    expect(eventList.childElementCount).toBe(6);
    expect(eventList.classList[0]).toBe('row');
  });

  test('should toggle volunteer input', async () => {
    const { getByTestId, getByText } = list;

    // as a user I can select an event I want to volunteer for
    const volunteerToggleElement = getByTestId('volunteer-toggle-0');
    expect(volunteerToggleElement.innerHTML).toBe('Volunteer');

    fireEvent.click(volunteerToggleElement);
    expect(getByText('Volunteering')).toBeInTheDocument();
    expect(volunteerToggleElement.innerHTML).toBe('Volunteering');

    // as a user I can de-select an event I don't want to volunteer for
    const volunteerToggleElement2 = getByTestId('volunteer-toggle-2');
    expect(volunteerToggleElement2.innerHTML).toBe('Volunteer');
    // toggle
    fireEvent.click(volunteerToggleElement2);
    expect(volunteerToggleElement2.innerHTML).toBe('Volunteering');
    fireEvent.click(volunteerToggleElement2);
    expect(volunteerToggleElement2.innerHTML).toBe('Volunteer');
  });
});

