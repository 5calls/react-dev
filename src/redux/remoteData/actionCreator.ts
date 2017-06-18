import { Issue } from '../../common/model';
import { ActionType, IssuesAction } from '../action';

export function issuesActionCreator(issues: Issue[]): IssuesAction {
  return {
    type: ActionType.GET_ISSUES,
    payload: issues
  };
}
