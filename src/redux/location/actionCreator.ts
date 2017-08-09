import { LocationClearedAction, LocationSetAction, SetUiStateAction } from './index';
import { LocationUiState } from '../../common/model';

export function setLocation(address: string): LocationSetAction {
  return {
    type: 'LOCATION_SET',
    payload: address
  };
}

export function clearAddress(): LocationClearedAction {
  return {
    type: 'LOCATION_CLEAR'
  };
}

export function setCachedCity(city: string | undefined) {
  return {
    type: 'CACHE_CITY',
    payload: city
  };
}

export function setUiState(uiState: LocationUiState): SetUiStateAction {
  return {
    type: 'SET_UI_STATE',
    payload: uiState
  };
}
