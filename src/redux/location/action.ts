import { Action } from 'redux';

export type LocationActionType =
  'LOCATION_CLEAR' |
  'LOCATION_SET'
;

export interface LocationAction extends Action {
  type: LocationActionType;
  payload?: {};
}

export interface LocationSetAction extends LocationAction {
  type: 'LOCATION_SET';
  payload: string;
}

export interface LocationClearedAction extends LocationAction {
  type: 'LOCATION_CLEAR';
}
