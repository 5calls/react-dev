import { Reducer } from 'redux';
import { Issue } from '../../common/model';
import { RemoteDataAction } from './index';

export interface RemoteDataState {
  issues: Issue[];
  callTotal: number;
}

export const remoteDataReducer: Reducer<RemoteDataState> = (
  state: RemoteDataState = {} as RemoteDataState,
  action: RemoteDataAction): RemoteDataState => {
  switch (action.type) {
    case 'GET_ISSUES':
      const newState = Object.assign({}, state, {issues: action.payload});
      return newState;
    case 'GET_CALL_TOTAL':
      return Object.assign({}, state, {callTotal: action.payload});
    default:
      return state;
  }
};
