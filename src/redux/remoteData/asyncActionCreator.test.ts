import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import * as moxios from 'moxios';
import { RemoteDataActionType } from './action';
import { fetchCallCount, getApiData, fetchLocationByIP } from './index';
import { ApplicationState } from './../root';
import { DefaultIssue, IpInfoData, ApiData } from './../../common/model';
import * as Constants from '../../common/constants';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

beforeEach(() => {
  moxios.install();
});

afterEach(() => {
  moxios.uninstall();
});

test('getApiData() action creator ...', () => {
  const address = 'New Gloucester, ME';
  const issueName = 'Issue';
  const apiData: ApiData = getApiDataResponse(address, issueName);
  moxios.stubRequest(`${Constants.ISSUES_API_URL}${encodeURIComponent(address)}`,
                     { response: apiData });

//   moxios.wait(() => {
//   const request = moxios.requests.mostRecent();
//   request.respondWith({
//     status: 200,
//     response: { mockResponse },
//     });
//   });

  const initialState = {} as ApplicationState;
  const store = mockStore(initialState);
  store.dispatch(getApiData(address))
    .then(() => {
      const actions = store.getActions();
      // console.log('Actions', actions);
      expect(actions[1].payload).toEqual(address);
      expect(actions[3].payload[0].name).toEqual(issueName);
    });
});

const getApiDataResponse = (address, issueName): ApiData => {
  const mockIssue = Object.assign({}, DefaultIssue, {name: issueName});

  const mockResponse: ApiData = {
    splitDistrict: false,
    invalidAddress: true,
    normalizedLocation: address,
    divisions: [],
    issues: [mockIssue]
  };
  return mockResponse;
};

// FIME: This throws:
//   TypeError: index_1.fetchLocationByIP is not a function
test.skip('fetchLocationByIP() action creator works correctly', () => {
  const data: IpInfoData = {
    city: 'New City',
    country: 'USA',
    hostname: 'foobar.com',
    org: '5 Calls',
    postal: '04260',
    loc: '-43.00, -70.00',
    ip: '127.0.0.1',
    region: 'New England'
  };
  // moxios.stubOnce('GET', /json/, {response: data});
  // const apiData: ApiData = getApiDataResponse(data.loc, data.city);
  // moxios.stubOnce('GET', `${Constants.ISSUES_API_URL}${encodeURIComponent(data.loc)}`, { response: apiData });
  moxios.stubRequest(/json/, { response: data });
  const apiData: ApiData = getApiDataResponse(data.loc, data.city);
  // moxios.stubRequest(`${Constants.ISSUES_API_URL}${encodeURIComponent(data.loc)}`, { response: apiData });
  moxios.wait(() => {
    moxios.stubOnce('GET', `${Constants.ISSUES_API_URL}${encodeURIComponent(data.loc)}`, { response: apiData })
    // .then(() => {

    // });
  });
  const initialState = {} as ApplicationState;
  // initialState.locationState = {address: ''};
  const store = mockStore(initialState);
  store.dispatch(fetchLocationByIP())
    .then(() => {
      const actions = store.getActions();
      console.log('fetchLocationByIP() Actions', actions);
    });
  // const actions = store.getActions();
  // console.log('Actions', actions);
});

test('fetchCallCount() action creator dispatches proper action', () => {
  const count = 999999;
  const expectedType: RemoteDataActionType = 'GET_CALL_TOTAL';
  moxios.stubRequest(/report/, { response: { count} });
  const initialState = {} as ApplicationState;
  const store = mockStore(initialState);
  store.dispatch(fetchCallCount())
    .then(() => {
      const actions = store.getActions();
      expect(actions[0].type).toEqual(expectedType);
      expect(actions[0].payload).toEqual(count);
    });
});
