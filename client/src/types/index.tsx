/* Data Types */

export interface User {
  id: string;
  name: string;
}

export interface Login {
  logged: boolean;
  user: User;
}

export interface Challenge {
  id: string;
  title: string;
  description: string;
  hints: string[];
  author: User;
}

export interface Solution {
  sourceURL: string;
  demoURL: string;
}

export interface Project {
  user: User;
  challenge: Challenge;
  solution: Solution;
}

export interface FilterOptions {
  orderBy: string;
  ascendent: boolean;
}

export interface Store {
  // uncomment next, when actions and reducers are created
  // login: { logged: boolean; user: User };
  // highestRatedList: Project;
  filteredList: Project[];
  filterOptions: FilterOptions;
}

/* Redux Types */

export interface Action {
  type: string;
}

export interface UpdateFilteredList extends Action {
  filteredList: Project[];
}

export interface SetFilterOptions extends Action {
  filterOptions: FilterOptions;
}
