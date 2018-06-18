import { Action } from '@ngrx/store';
import { Todos } from '../../models/todos';
import { FilterActionsUnion, FilterActionTypes } from './filters.actions';

export function filtersReducer(state: string = 'SHOW_ALL', action: FilterActionsUnion) {
  switch (action.type) {
    case FilterActionTypes.SET_VISIBILITY_FILTER:
      return action.payload;
      
    default:
      return state;
  }
}