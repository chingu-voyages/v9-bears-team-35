/* Data Types */

export interface User {
  id: string;
  name: string;
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
  login: { logged: boolean; user: User };
  highestRatedList: Project;
  filteredList: Project[];
  filterOptions: FilterOptions;
}

/* Redux Types */

export interface Action {
  type: string;
}

export interface SetFilterOptions {
  type: Action;
  filterOptions: FilterOptions;
}

export interface UpdateFilteredList {
  type: Action;
  filteredList: Project[];
}
