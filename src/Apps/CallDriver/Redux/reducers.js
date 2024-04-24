// reducers.js
import { combineReducers } from 'redux';
import { SET_DATE_RANGE, SET_FILTERS, SET_FETCHED_DATA } from './actions';

const dateRangeReducer = (state = { startDate: null, endDate: null }, action) => {
  switch (action.type) {
    case SET_DATE_RANGE:
      return action.payload;
    default:
      return state;
  }
};

const filtersReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_FILTERS:
      return action.payload;
    default:
      return state;
  }
};

const fetchedDataReducer = (state = [], action) => {
  switch (action.type) {
    case SET_FETCHED_DATA:
      return action.payload;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  dateRange: dateRangeReducer,
  filters: filtersReducer,
  fetchedData: fetchedDataReducer,
});

export default rootReducer;
