import { Issue } from '../../common/model';
import { CurrentIssueAction } from './action';

export const selectIssueActionCreator = (issue: Issue): CurrentIssueAction => {
  return {
    type: 'CURRENT_ISSUE_SELECTED',
    payload: issue
  };
};
