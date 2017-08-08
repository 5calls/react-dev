import { Reducer } from 'redux';
import { LocationAction } from './index';
import { LocationUiState } from '../../common/model';

export interface LocationState {
  address: string;
  cachedCity: string;
  uiState: LocationUiState;
}

const initialState: LocationState = {
  address: '',
  cachedCity: '',
  uiState: LocationUiState.FETCHING_LOCATION
};

export const locationStateReducer: Reducer<LocationState> = (
  state: LocationState = initialState,
  action: LocationAction
  ): LocationState => {
  switch (action.type) {
    case 'LOCATION_CLEAR':
      return Object.assign({}, state, {
        address: '',
        cachedCity: '',
        fetchingLocation: false,

      });
    case 'LOCATION_SET':
      return Object.assign({}, state, {
        address: action.payload
      });
    case 'INVALID_ADDRESS':
      return Object.assign({}, state, {
        invalidAddress: action.payload
      });
    case 'FETCHING_LOCATION':
      return Object.assign({}, state, {
        fetchingLocation: action.payload
      });
    case 'VALIDATING_LOCATION':
      return Object.assign({}, state, {
        validatingLocation: action.payload
      });
    case 'CACHE_CITY':
      return Object.assign({}, state, {
        cachedCity: action.payload
      });
    case 'SET_UI_STATE':
      return Object.assign({}, state, {
        uiState: action.payload
      });
    default:
      return state;
  }
};
