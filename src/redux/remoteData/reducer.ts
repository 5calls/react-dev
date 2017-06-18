import { Reducer } from 'redux';
import { Issue } from '../../common/model';
import { ActionType, IssuesAction } from '../action';

const issuesReducer: Reducer<Issue[]> = (
  state: Issue[] = [] as Issue[],
  action: IssuesAction) => {
  // const issues = getIssues();
  switch (action.type) {
    case ActionType.GET_ISSUES:
      const newState = action.payload;
      return newState;
    default:
      return state;
  }
};

export default issuesReducer;
