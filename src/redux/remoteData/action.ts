import { RemoteDataAction } from './action';
import { Action } from 'redux';
import { Issue } from '../../common/model';

export enum RemoteDataActionType {
  GET_ISSUES = 'GET_ISSUES',
  GET_CALL_TOTAL = 'GET_CALL_TOTAL',
  API_ERROR = 'API_ERROR',
}

export interface RemoteDataAction extends  Action {
  type: RemoteDataActionType;
  payload?: {};
}

export interface IssuesAction extends RemoteDataAction {
  type: RemoteDataActionType.GET_ISSUES;
  payload: Issue[];
}

export interface CallCountAction extends RemoteDataAction {
  type: RemoteDataActionType.GET_CALL_TOTAL;
  payload: number;
}

export interface ApiErrorAction extends RemoteDataAction {
  type: RemoteDataActionType.API_ERROR;
  payload: string;
}
