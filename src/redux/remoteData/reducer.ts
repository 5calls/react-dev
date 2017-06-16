// import { ApplicationState, DefaultApplicationState } from './../root';
import { Reducer } from 'redux';
import { Issue } from '../../common/model';
import { IssueActionType, IssuesAction } from './action';
// const data = require('../../data.json');

const issuesReducer: Reducer<Issue[]> = (
  state: Issue[] = [] as Issue[],
  action: IssuesAction) => {
  // const issues = getIssues();
  switch (action.type) {
    case IssueActionType.GET_ISSUES:

      // tslint:disable-next-line:no-console
      console.log('Payload', action.payload);
      // tslint:disable-next-line:no-console
      console.log('Old State', state);

      const newState = action.payload;
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
