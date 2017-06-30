import { Action } from 'redux';
import { Issue } from '../../common/model';

export type RemoteDataActionType =
  'GET_ISSUES' |
  'GET_CALL_TOTAL'
  ;

export interface RemoteDataAction extends  Action {
  type: RemoteDataActionType;
  payload?: {};
}

export interface IssuesAction extends RemoteDataAction {
  type: 'GET_ISSUES';
  payload: Issue[];
}

export interface CallCountAction extends RemoteDataAction {
  type: 'GET_CALL_TOTAL';
  payload: number;
}
