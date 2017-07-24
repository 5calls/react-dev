import { LocationState, LocationSetAction, locationStateReducer, LocationClearedAction } from './index';

let defaultState;
beforeEach(() => {
  defaultState = {
    address: '',
    cachedCity: '',
    invalidAddress: false,
    fetchingLocation: false,
    validatingLocation: false
  };
});

test('Location reducer processes LOCATION_SET action correctly', () => {
  const address = 'New York, NY';
  const state: LocationState = Object.assign({}, defaultState, {address});
  const action: LocationSetAction = {
    type: 'LOCATION_SET',
    payload: address
  };
  const newState = locationStateReducer(state, action);
  expect(newState.address).toEqual(address);
});

test('Location reducer processes LOCATION_CLEAR action correctly', () => {
  const address = '100 Main Street, Boston, MA';
  const state: LocationState = Object.assign({}, defaultState, {address});
  const action: LocationClearedAction = {
    type: 'LOCATION_CLEAR',
    payload: address
  };
  const newState = locationStateReducer(state, action);
  expect(newState.address).toEqual('');
});
