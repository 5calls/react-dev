import { Action } from 'redux';
import { Issue } from '../../common/model';

export type RemoteDataActionType =
  'GET_ISSUES'
  ;

export interface RemoteDataAction extends  Action {
  type: RemoteDataActionType;
  payload?: {};
}

export interface IssuesAction extends RemoteDataAction {
  type: 'GET_ISSUES';
  payload: Issue[];
}
