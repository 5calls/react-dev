import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import * as moxios from 'moxios';
import { ApplicationState } from './../root';
import { ApiData, DefaultIssue } from './../../common/model';
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

test('Expect setAddress() action creator to dispatch correctly', () => {
  const address = 'New Gloucester, ME';
  const mockIssue = DefaultIssue;
  const apiData: ApiData = {
    splitDistrict: false,
    invalidAddress: true,
    normalizedLocation: address,
    divisions: [],
    issues: [mockIssue]
  };
  moxios.stubRequest(`${Constants.ISSUES_API_URL}${encodeURIComponent(address)}`,
                     { response: apiData });
  // nock.disableNetConnect();
  // nock(Constants.APP_URL)
  //   .get('/issues/')
  //   .query({address: address})
  //   .reply(200, mockResponse );
  const initialState = {} as ApplicationState;
  const store = mockStore(initialState);
  store.dispatch(setAddress(address))
  .then(() => {
    const actions = store.getActions();
    // console.log('Actions', actions);
    expect(actions[0].type).toEqual('INVALID_ADDRESS');
    expect(actions[0].payload).toEqual(true);
    expect(actions[4].type).toEqual('LOCATION_SET');
    expect(actions[4].payload).toEqual(address);
  });

});
