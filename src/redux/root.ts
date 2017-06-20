import { Issue, DefaultIssue } from './../common/model';
import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import issuesReducer from './remoteData/reducer';
import { CallState, callStateReducer } from './callState/reducer';

export interface ApplicationState {
  issues: Issue[];
  selectedIssue: Issue;
  callState: CallState;
}

export const DefaultApplicationState: ApplicationState = {
  issues: [],
  selectedIssue: DefaultIssue,
  callState: {} as CallState
};

const rootReducer = combineReducers({
  routing,
  issues: issuesReducer,
  callState: callStateReducer
});

export default rootReducer;
