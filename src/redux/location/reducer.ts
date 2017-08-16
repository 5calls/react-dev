import { Reducer } from 'redux';
import { LocationAction, LocationActionType } from './index';
import { LocationUiState, LocationFetchType } from '../../common/model';

export interface LocationState {
  address: string;
  cachedCity: string;
  splitDistrict: boolean;
  uiState: LocationUiState;
  locationFetchType: LocationFetchType;
}

const initialState: LocationState = {
  address: '',
  cachedCity: '',
  splitDistrict: false,
  uiState: LocationUiState.FETCHING_LOCATION,
  locationFetchType: LocationFetchType.CACHED_ADDRESS
};

export const locationStateReducer: Reducer<LocationState> = (
  state: LocationState = initialState,
  action: LocationAction
  ): LocationState => {
  switch (action.type) {
    case LocationActionType.LOCATION_CLEAR:
      return Object.assign({}, state, {
        address: '',
        cachedCity: '',
        uiState: LocationUiState.ENTERING_LOCATION
      });
    case LocationActionType.LOCATION_SET:
      return Object.assign({}, state, {
        address: action.payload,
        uiState: LocationUiState.LOCATION_FOUND
      });
    case LocationActionType.CACHE_CITY:
      return Object.assign({}, state, {
        cachedCity: action.payload
      });
    case LocationActionType.SET_UI_STATE:
      return Object.assign({}, state, {
        uiState: action.payload
      });
    case LocationActionType.SET_SPLIT_DISTRICT:
      return Object.assign({}, state, {
        splitDistrict: action.payload
      });
    case LocationActionType.SET_LOCATION_FETCH_TYPE:
      return Object.assign({}, state, {
        locationFetchType: action.payload
      });
    default:
      return state;
  }
};
