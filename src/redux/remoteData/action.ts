import { Action } from 'redux';
import { Issue } from '../../common/model';

export enum IssueActionType {
  GET_ISSUES
}

export interface IssuesAction extends Action {
  type: IssueActionType.GET_ISSUES;
  payload: Issue[];
}
