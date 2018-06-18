import { Action } from '@ngrx/store';

export enum FilterActionTypes {
  SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'
};

export class SetVisibilityFilter implements Action {
  readonly type = FilterActionTypes.SET_VISIBILITY_FILTER;
  constructor(public payload: any) {}
}

// export class SetVisibilityFilterSuccess implements Action {
//   readonly type = FilterActionTypes.SET_VISIBILITY_FILTER_SUCCESS;
//   constructor(public payload: any) {}
// }

// export class SetVisibilityFilterFailure implements Action {
//   readonly type = FilterActionTypes.SET_VISIBILITY_FILTER_FAILURE;
//   constructor(public payload: any) {}
// }

export type FilterActionsUnion = 
| SetVisibilityFilter;
// | SetVisibilityFilterSuccess 
// | SetVisibilityFilterFailure;