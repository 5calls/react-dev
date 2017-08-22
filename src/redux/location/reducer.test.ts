import { CacheCityAction } from './action';
import { LocationState, LocationSetAction, locationStateReducer,
  LocationClearedAction, LocationActionType } from './index';
import { LocationUiState } from '../../common/model';

let defaultState;
beforeEach(() => {
  defaultState = {
    address: '',
    cachedCity: '',
    uiState: LocationUiState.FETCHING_LOCATION
  };
});

test('Location reducer processes LOCATION_SET action correctly', () => {
  const address = 'New York, NY';
  const state: LocationState = Object.assign({}, defaultState, {address});
  const action: LocationSetAction = {
    type: LocationActionType.LOCATION_SET,
    payload: address
  };
  const newState = locationStateReducer(state, action);
  expect(newState.address).toEqual(address);
});

test('Location reducer processes LOCATION_CLEAR action correctly', () => {
  const address = '100 Main Street, Boston, MA';
  const state: LocationState = Object.assign({}, defaultState, {address});
  const action: LocationClearedAction = {
    type: LocationActionType.LOCATION_CLEAR,
    payload: address
  };
  const newState = locationStateReducer(state, action);
  expect(newState.address).toEqual('');
  expect(newState.cachedCity).toEqual('');
});

test('Location reducer processes CACHE_CITY action correctly', () => {
  const cachedCity = 'Cached City CA';
  const state: LocationState = Object.assign({}, defaultState, {cachedCity});
  const action: CacheCityAction = {
    type: LocationActionType.CACHE_CITY,
    payload: cachedCity
  };
  const newState = locationStateReducer(state, action);
  expect(newState.cachedCity).toEqual(cachedCity);
});
