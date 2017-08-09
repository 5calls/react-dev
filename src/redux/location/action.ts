import { Action } from 'redux';
import { LocationAction } from './action';
import { LocationUiState } from '../../common/model';

export type LocationActionType =
  'LOCATION_CLEAR' |
  'LOCATION_SET' |
  'CACHE_CITY' |
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

export interface CacheCityAction extends LocationAction {
  type: 'CACHE_CITY';
  payload: string | undefined;
}

export interface SetUiStateAction extends LocationAction {
  type: 'SET_UI_STATE';
  payload: LocationUiState;
}
