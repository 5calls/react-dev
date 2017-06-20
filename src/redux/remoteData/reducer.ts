import { Reducer } from 'redux';
import { Issue } from '../../common/model';
import { RemoteDataAction } from './action';

export interface RemoteDataState {
  issues: Issue[];
}

export const remoteDataReducer: Reducer<RemoteDataState> = (
  state: RemoteDataState = {} as RemoteDataState,
  action: RemoteDataAction): RemoteDataState => {
  switch (action.type) {
    case 'GET_ISSUES':
      const newState = Object.assign({}, state, {issues: action.payload});
      return newState;
    default:
      return state;
  }
};
