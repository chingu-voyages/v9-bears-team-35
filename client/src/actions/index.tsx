import { SetFilterOptions, UpdateFilteredList } from '../types';

/*  Action Types  */

export const SET_FILTER_OPTIONS = 'SET_FILTER OPTIONS';

export const UPDATE_FILTERED_LIST = 'UPDATE_FILTERED_LIST';

/*  Actions  */

export const setFilterOptions = (filterOptions: SetFilterOptions) => ({
  type: SET_FILTER_OPTIONS,
  filterOptions,
});

export const updateFilteredList = (filteredList: UpdateFilteredList) => ({
  type: UPDATE_FILTERED_LIST,
  filteredList,
});
