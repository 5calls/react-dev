import { Issue } from './../common/model';
import { routerReducer as routing, RouterState } from 'react-router-redux';
import { combineReducers } from 'redux';
import issuesReducer from './remoteData/reducer';

export interface ApplicationState {
  routing: RouterState;
  issues: Issue[];
  selectedIssue: Issue;
}

const rootReducer = combineReducers({
  routing,
  issues: issuesReducer
});

export default rootReducer;
