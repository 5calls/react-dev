import { Issue } from '../../common/model';
import { IssueActionType, IssuesAction, IssueSelectedAction } from './action';

export function issuesActionCreator(issues: Issue[]): IssuesAction {
  return {
    type: IssueActionType.GET_ISSUES,
    payload: issues
  };
}

export function selectIssueActionCreator(issue: Issue): IssueSelectedAction {
  // tslint:disable-next-line
  console.log('selectIssueActionCreator called with: ', issue);
  return {
    type: IssueActionType.ISSUE_SELECTED,
    payload: issue
  };
}
