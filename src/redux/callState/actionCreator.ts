import { Issue } from '../../common/model';
import { ActionType, IssueSelectedAction } from '../action';

export function selectIssueActionCreator(issue: Issue): IssueSelectedAction {
  return {
    type: ActionType.ISSUE_SELECTED,
    payload: issue
  };
}
