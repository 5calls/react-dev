import { DefaultIssue } from './../../common/model';
import { RemoteDataState, remoteDataReducer, IssuesAction,
  CallCountAction, ApiErrorAction } from './index';

let defaultState;
beforeEach(() => {
  defaultState = {
    issues: [],
    callTotal: 0,
    errorMessage: ''
  };
});

test('Remote Data reducer processes GET_ISSUES action correctly', () => {
  const issues = [DefaultIssue, DefaultIssue];
  const state: RemoteDataState =
    Object.assign({}, defaultState, issues);
  const action: IssuesAction = {
    type: 'GET_ISSUES',
    payload: issues
  };
  const newState = remoteDataReducer(state, action);
  expect(newState.issues).toEqual(issues);
});

test('Remote Data reducer processes GET_CALL_TOTAL action correctly', () => {
  const callTotal = 99999;
  const state: RemoteDataState =
    Object.assign({}, defaultState, callTotal);
  const action: CallCountAction = {
    type: 'GET_CALL_TOTAL',
    payload: callTotal
  };
  const newState = remoteDataReducer(state, action);
  expect(newState.callTotal).toEqual(callTotal);
});

test('Remote Data reducer processes API_ERROR action correctly', () => {
  const errorMessage = 'You made a boo boo!';
  const state: RemoteDataState =
    Object.assign({}, defaultState, errorMessage);
  const action: ApiErrorAction = {
    type: 'API_ERROR',
    payload: errorMessage
  };
  const newState = remoteDataReducer(state, action);
  expect(newState.errorMessage).toEqual(errorMessage);
});
