import { Issue, DefaultIssue } from './../common/model';
import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import issuesReducer from './remoteData/reducer';

export interface ApplicationState {
  issues: Issue[];
  selectedIssue: Issue;
}

export const DefaultApplicationState: ApplicationState = {
  issues: [],
  selectedIssue: DefaultIssue
};

const rootReducer = combineReducers({
  routing,
  issues: issuesReducer
});

export default rootReducer;
