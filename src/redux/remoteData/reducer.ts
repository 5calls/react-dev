import { ApplicationState, DefaultApplicationState } from './../root';
import { Reducer } from 'redux';
import { IssueActionType, IssuesAction } from './action';
// const data = require('../../data.json');

const issuesReducer: Reducer<ApplicationState> = (
  state: ApplicationState = DefaultApplicationState,
  action: IssuesAction) => {
  // const issues = getIssues();
  switch (action.type) {
    case IssueActionType.GET_ISSUES:

      // tslint:disable-next-line:no-console
      console.log('Payload', action.payload);

      const newState = Object.assign({}, state, {issues: action.payload});
      // tslint:disable-next-line:no-console
      console.log('New State', newState);
      return newState;
    default:
      return state;
  }
};

// function getIssues(): Issue[] {
//   return data.issues;
// }

export default issuesReducer;
