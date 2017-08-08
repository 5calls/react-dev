import { Action } from 'redux';
import { LocationAction } from './action';
import { LocationUiState } from '../../common/model';

export type LocationActionType =
  'LOCATION_CLEAR' |
  'LOCATION_SET' |
  'INVALID_ADDRESS' |
  'CACHE_CITY' |
  'FETCHING_LOCATION' |
  'VALIDATING_LOCATION' |
  'SET_UI_STATE'
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

export interface InvalidAddressAction extends LocationAction {
  type: 'INVALID_ADDRESS';
  payload: boolean;
}

export interface CacheCityAction extends LocationAction {
  type: 'CACHE_CITY';
  payload: string | undefined;
}

export interface FetchingLocationAction extends LocationAction {
  type: 'FETCHING_LOCATION';
  payload: boolean;
}

export interface ValidatingLocationAction extends LocationAction {
  type: 'VALIDATING_LOCATION';
  payload: boolean;
}

export interface SetUiStateAction extends LocationAction {
  type: 'SET_UI_STATE';
  payload: LocationUiState;
}
