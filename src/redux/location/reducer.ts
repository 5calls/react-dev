import { Reducer } from 'redux';
import { LocationAction } from './action';

export interface LocationState {
  address: string;
  cachedCity: string;
  invalidAddress: boolean;
  fetchingLocation: boolean;
  validatingLocation: boolean;
}

const initialState: LocationState = {
  address: '',
  cachedCity: '',
  invalidAddress: false,
  fetchingLocation: false,
  validatingLocation: false
};

export const locationStateReducer: Reducer<LocationState> = (
  state: LocationState = initialState,
  action: LocationAction
  ) => {
  switch (action.type) {
    case 'LOCATION_CLEAR':
      return Object.assign({}, state, {
        address: ''
      });
    case 'LOCATION_SET':
      return Object.assign({}, state, {
        address: action.payload
      });
    default:
      return state;
  }
};
