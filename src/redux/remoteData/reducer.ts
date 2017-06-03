import { Reducer } from 'redux';
import { Issue } from '../../common/model';
import { IssueActionType, IssuesAction } from './action';
const data = require('../../data.json');

const issuesReducer: Reducer<Issue[]> = (
  state: Issue[] = [], // state empty array by default
  action: IssuesAction) => {
  const issues = getIssues();
  switch (action.type) {
    case IssueActionType.GET_ISSUES:
      return issues;
    default:
      return issues;
  }
};

function getIssues(): Issue[] {
  return data.issues;
}

export default issuesReducer;
