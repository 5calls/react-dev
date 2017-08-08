import { LocationClearedAction, LocationSetAction, InvalidAddressAction, SetUiStateAction } from './index';
import { LocationUiState } from '../../common/model';

export function setLocation(address: string): LocationSetAction {
  return {
    type: 'LOCATION_SET',
    payload: address
  };
}

export function clearAddress(): LocationClearedAction {
  setFetchingLocation(true);
  setValidatingLocation(true);
  return {
    type: 'LOCATION_CLEAR'
  };
}

export function setInvalidAddress(invalidAddress: boolean): InvalidAddressAction {
  return {
    type: 'INVALID_ADDRESS',
    payload: invalidAddress
  };
}

export function setCachedCity(city: string | undefined) {
  return {
    type: 'CACHE_CITY',
    payload: city
  };
}

export function setFetchingLocation(isFetching: boolean) {
  return {
    type: 'FETCHING_LOCATION',
    payload: isFetching
  };
}

export function setValidatingLocation(isValidating: boolean) {
  return {
    type: 'VALIDATING_LOCATION',
    payload: isValidating
  };
}

export function setUiState(uiState: LocationUiState): SetUiStateAction {
  return {
    type: 'SET_UI_STATE',
    payload: uiState
  };
}
