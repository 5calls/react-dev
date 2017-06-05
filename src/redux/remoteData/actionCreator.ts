import { Issue } from '../../common/model';
import { IssueActionType, IssuesAction, IssueSelectedAction } from './action';

export function issuesActionCreator(issues: Issue[]): IssuesAction {
  return {
    type: IssueActionType.GET_ISSUES,
    payload: issues
  };
}

export function selectIssueActionCreator(issue: Issue): IssueSelectedAction {
  return {
    type: IssueActionType.ISSUE_SELECTED,
    payload: issue
  };
}
