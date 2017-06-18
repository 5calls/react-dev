import { Reducer } from 'redux';
import { Issue } from '../../common/model';
import { ActionType, IssueSelectedAction } from './../action';

const selectedIssueReducer: Reducer<Issue> = (
  state: Issue = {} as Issue,
  action: IssueSelectedAction) => {
    switch (action.type) {
      case ActionType.ISSUE_SELECTED:
        return Object.assign({}, action.payload);
      default:
        return state;
    }
};

export default selectedIssueReducer;
