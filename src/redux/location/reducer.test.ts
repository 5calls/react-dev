import { FetchingLocationAction, ValidatingLocationAction, CacheCityAction } from './action';
import { LocationState, LocationSetAction, locationStateReducer,
  LocationClearedAction, InvalidAddressAction } from './index';

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
  expect(newState.cachedCity).toEqual('');
  expect(newState.fetchingLocation).toBeFalsy();
});

test('Location reducer processes INVALID_ADDRESS action correctly when invalidAddress=true', () => {
  const invalidAddress = true;
  const state: LocationState = Object.assign({}, defaultState, {invalidAddress});
  const action: InvalidAddressAction = {
    type: 'INVALID_ADDRESS',
    payload: invalidAddress
  };
  const newState = locationStateReducer(state, action);
  expect(newState.invalidAddress).toEqual(invalidAddress);
});

test('Location reducer processes INVALID_ADDRESS action correctly when invalidAddress=false', () => {
  const invalidAddress = false;
  const state: LocationState = Object.assign({}, defaultState, {invalidAddress});
  const action: InvalidAddressAction = {
    type: 'INVALID_ADDRESS',
    payload: invalidAddress
  };
  const newState = locationStateReducer(state, action);
  expect(newState.invalidAddress).toEqual(invalidAddress);
});

test('Location reducer processes FETCHING_LOCATION action correctly', () => {
  const fetchingLocation = true;
  const state: LocationState = Object.assign({}, defaultState, {fetchingLocation});
  const action: FetchingLocationAction = {
    type: 'FETCHING_LOCATION',
    payload: fetchingLocation
  };
  const newState = locationStateReducer(state, action);
  expect(newState.fetchingLocation).toEqual(fetchingLocation);
});

test('Location reducer processes VALIDATING_LOCATION action correctly', () => {
  const validatingLocation = true;
  const state: LocationState = Object.assign({}, defaultState, {validatingLocation});
  const action: ValidatingLocationAction = {
    type: 'VALIDATING_LOCATION',
    payload: validatingLocation
  };
  const newState = locationStateReducer(state, action);
  expect(newState.validatingLocation).toEqual(validatingLocation);
});

test('Location reducer processes CACHE_CITY action correctly', () => {
  const cachedCity = 'Cached City CA';
  const state: LocationState = Object.assign({}, defaultState, {cachedCity});
  const action: CacheCityAction = {
    type: 'CACHE_CITY',
    payload: cachedCity
  };
  const newState = locationStateReducer(state, action);
  expect(newState.cachedCity).toEqual(cachedCity);
});
