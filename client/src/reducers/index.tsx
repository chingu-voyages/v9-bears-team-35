import { combineReducers } from 'redux';
import {
  FilterOptions,
  SetFilterOptions,
  Project,
  UpdateFilteredList,
} from '../types';
import { SET_FILTER_OPTIONS, UPDATE_FILTERED_LIST } from '../actions';

export const initFilterOptions = {
  orderBy: 'rate',
  ascendent: true,
};

function filterOptions(
  state: FilterOptions = initFilterOptions,
  action: SetFilterOptions
) {
  switch (action.type) {
    case SET_FILTER_OPTIONS:
      return action.filterOptions;
    default:
      return state;
  }
}

function filteredList(state: Project[] = [], action: UpdateFilteredList) {
  switch (action.type) {
    case UPDATE_FILTERED_LIST:
      return action.filteredList;
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  filterOptions,
  filteredList,
});

export default rootReducer;
