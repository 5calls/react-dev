import { RemoteDataAction } from './action';
import { Action } from 'redux';
import { Issue } from '../../common/model';

export type RemoteDataActionType =
  'GET_ISSUES' |
  'GET_CALL_TOTAL' |
  'API_ERROR'
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

export interface ApiErrorAction extends RemoteDataAction {
  type: 'API_ERROR';
  payload: string;
}
