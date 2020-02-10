import React, { createContext, useReducer } from 'react';
import { dateTimeNow } from './utils/dateGenerator';
import { mockEventList } from './utils/sampleMockEvent';

const initialState = mockEventList; // sample events
const store = createContext(initialState);
const { Provider } = store;

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

      if (sortBy === 'most recent') {
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

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState, init);
  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider };
