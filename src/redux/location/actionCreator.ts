import { SetLocationFetchTypeAction } from './action';
import { LocationClearedAction, LocationSetAction, SetUiStateAction } from './index';
import { LocationFetchType, LocationUiState } from '../../common/model';

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

export function setLocationFetchType(fetchType: LocationFetchType): SetLocationFetchTypeAction {
  return {
    type: 'SET_LOCATION_FETCH_TYPE',
    payload: fetchType
  };
}
