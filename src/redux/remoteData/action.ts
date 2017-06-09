import { Action } from 'redux';
import { Issue } from '../../common/model';

export enum IssueActionType {
  GET_ISSUES,
  ISSUE_SELECTED,
  ADD_API_DATA
}

export interface IssuesAction extends Action {
  type: IssueActionType;
  payload: Issue[];
}

export interface IssueSelectedAction extends Action {
  type: IssueActionType;
  payload: Issue;
}
