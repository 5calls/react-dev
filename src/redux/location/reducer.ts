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
        uiState: LocationUiState.ENTERING_LOCATION
      });
    case 'LOCATION_SET':
      return Object.assign({}, state, {
        address: action.payload,
        uiState: LocationUiState.LOCATION_FOUND
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
