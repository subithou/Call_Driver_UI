// actions.js
export const SET_DATE_RANGE = 'SET_DATE_RANGE';
export const SET_FILTERS = 'SET_FILTERS';
export const SET_FETCHED_DATA = 'SET_FETCHED_DATA';

export const setDateRange = (dateRange) => ({
  type: SET_DATE_RANGE,
  payload: dateRange,
});

export const setFilters = (filters) => ({
  type: SET_FILTERS,
  payload: filters,
});

export const setFetchedData = (data) => ({
  type: SET_FETCHED_DATA,
  payload: data,
});
