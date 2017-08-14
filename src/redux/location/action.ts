import { Action } from 'redux';
import { LocationAction } from './action';
import { LocationFetchType, LocationUiState } from '../../common/model';

export type LocationActionType =
  'LOCATION_CLEAR' |
  'LOCATION_SET' |
  'CACHE_CITY' |
  'NEW_LOCATION_LOOKUP' |
  'SET_UI_STATE' |
  'SET_LOCATION_FETCH_TYPE'
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

export interface CacheCityAction extends LocationAction {
  type: 'CACHE_CITY';
  payload: string | undefined;
}

export interface SetUiStateAction extends LocationAction {
  type: 'SET_UI_STATE';
  payload: LocationUiState;
}

export interface SetLocationFetchTypeAction extends LocationAction {
  type: 'SET_LOCATION_FETCH_TYPE';
  payload: LocationFetchType;
}

export interface NewLocationLookupAction extends LocationAction {
  type: 'NEW_LOCATION_LOOKUP';
  payload: string;
}
