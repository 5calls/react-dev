import { SetLocationFetchTypeAction } from './action';
import { LocationClearedAction, LocationSetAction,
  SetUiStateAction, LocationActionType } from './index';
import { LocationFetchType, LocationUiState } from '../../common/model';

export function setLocation(address: string): LocationSetAction {
  return {
    type: LocationActionType.LOCATION_SET,
    payload: address
  };
}

export function clearAddress(): LocationClearedAction {
  return {
    type: LocationActionType.LOCATION_CLEAR
  };
}

export function setCachedCity(city: string | undefined) {
  return {
    type: LocationActionType.CACHE_CITY,
    payload: city
  };
}

export function setUiState(uiState: LocationUiState): SetUiStateAction {
  return {
    type: LocationActionType.SET_UI_STATE,
    payload: uiState
  };
}

export function setLocationFetchType(fetchType: LocationFetchType): SetLocationFetchTypeAction {
  return {
    type: LocationActionType.SET_LOCATION_FETCH_TYPE,
    payload: fetchType
  };
}

export function setSplitDistrict(isDistrictSplit: boolean) {
  return {
    type: LocationActionType.SET_SPLIT_DISTRICT,
    payload: isDistrictSplit
  };
}
