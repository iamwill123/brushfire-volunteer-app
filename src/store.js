import React, { createContext, useReducer, useContext, useMemo } from 'react';
import { dateTimeNow } from './utils/dateGenerator';
import { mockEventList } from './utils/sampleMockEvent';

const initialState = mockEventList; // sample events
// When there's no Provider, the defaultValue argument is used for function createContext
const EventsContext = createContext(initialState);
const { Provider: EventsProvider } = EventsContext;

function init(initialState) {
  return initialState;
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'GET_EVENTS': {
      return state;
    }

    case 'TOGGLE_VOLUNTEER': {
      const newState = state.map(event =>
        event.id === action.id
          ? {
              ...event,
              volunteer: !event.volunteer,
              volunteerAt: !event.volunteer ? dateTimeNow() : null
            }
          : event
      );
      return newState;
    }

    case 'SORT_BY': {
      const { sortBy = '' } = action;

      if (sortBy === 'recently created') {
        // sort by most recent date
        const byMostRecent = (a, b) => {
          if (a.createdAt < b.createdAt) return 1;
          if (a.createdAt > b.createdAt) return -1;
          return 0;
        };
        const newState = state.slice().sort(byMostRecent);
        return newState;
      } else if (sortBy === 'organization') {
        // sort by alphabetical order
        const byOrganization = (a, b) => {
          if (a.organization < b.organization) return -1;
          if (a.organization > b.organization) return 1;
          return 0;
        };
        const newState = state.slice().sort(byOrganization);
        return newState;
      } else {
        return state;
      }
    }

    case 'RESET':
      return init(initialState);

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

// Could use useState and not useReducer, but useReducer is scalable in this case.
const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState, init);
  const value = useMemo(() => [state, dispatch], [state]);
  return <EventsProvider value={value}>{children}</EventsProvider>;
};

// custom useEvents hook clean things out
const useEvents = () => {
  const context = useContext(EventsContext);
  if (!context) {
    throw new Error(`useEvents must be used within a EventsProvider`);
  }

  const [state, dispatch] = context;

  // clearer to add all dispatches in one place
  const toggleVolunteering = id => dispatch({ type: 'TOGGLE_VOLUNTEER', id });
  const sortEventsBy = sortBy => dispatch({ type: 'SORT_BY', sortBy });
  const resetEventsList = () => dispatch({ type: 'RESET' });

  return {
    state, // if we want to access state
    dispatch, // if we want to access dispatch func
    toggleVolunteering,
    sortEventsBy,
    resetEventsList
  };
};

export { EventsContext, StateProvider, useEvents };
