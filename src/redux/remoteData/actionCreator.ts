import { Issue } from '../../common/model';
import { IssueActionType, IssuesAction } from './action';


function issuesActionCreator(issues: Issue[]): IssuesAction {
  return {
    type: IssueActionType.GET_ISSUES,
    payload: issues
  };
}

export default issuesActionCreator;
