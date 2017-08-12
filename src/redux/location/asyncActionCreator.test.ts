import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import * as moxios from 'moxios';
import { ApplicationState } from './../root';
import { ApiData, DefaultIssue, LocationUiState, LocationFetchType } from './../../common/model';
import { setAddress } from './index';
import * as Constants from '../../common/constants';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

beforeEach(() => {
  moxios.install();
});

afterEach(() => {
  moxios.uninstall();
});

test.only('Expect setAddress() action creator to dispatch correctly', () => {
  const address = 'New Gloucester, ME';
  const mockIssue = DefaultIssue;
  const apiData: ApiData = {
    splitDistrict: false,
    invalidAddress: false,
    normalizedLocation: address,
    divisions: [],
    issues: [mockIssue]
  };
  moxios.stubRequest(`${Constants.ISSUES_API_URL}${encodeURIComponent(address)}`,
                     { response: apiData });
  const initialState = {} as ApplicationState;
  const locationState = {
    address: '',
    cachedCity: '',
    uiState: LocationUiState.FETCHING_LOCATION,
    locationFetchType: LocationFetchType.CACHED_ADDRESS
  };
  initialState.locationState = locationState;
  const store = mockStore(initialState);
  store.dispatch(setAddress(address))
  .then(() => {
    const actions = store.getActions();
    // console.log('Actions', actions);
    expect(actions[0].type).toEqual('CACHE_CITY');
    expect(actions[0].payload).toEqual(address);
    expect(actions[4].type).toEqual('LOCATION_SET');
    expect(actions[4].payload).toEqual(address);
  });

});
