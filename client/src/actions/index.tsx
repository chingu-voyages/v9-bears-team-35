/*  Action Types  */

export const SET_FILTER_OPTIONS = 'SET_FILTER OPTIONS';

export const UPDATE_FILTERED_LIST = 'UPDATE_FILTERED_LIST';

/*  Actions  */

export const setFilterOptions = (filterOptions: any) => ({
  type: SET_FILTER_OPTIONS,
  filterOptions,
});

export const updateFilteredList = (filteredList: any) => ({
  type: UPDATE_FILTERED_LIST,
  filteredList,
});
