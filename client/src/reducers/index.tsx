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
  console.log('filter options');
  console.log(action);
  switch (action.type) {
    case SET_FILTER_OPTIONS:
      console.log('changed');
      return action.filterOptions;
    default:
      return state;
  }
}

function filteredList(state: Project[] = [], action: UpdateFilteredList) {
  console.log(action);
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
