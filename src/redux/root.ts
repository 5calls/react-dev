import { Issue } from './../common/model';
import { routerReducer as routing, RouterState } from 'react-router-redux';
import { combineReducers } from 'redux';
import issuesReducer from './remoteData/reducer';

export interface ApplicationState {
  routing: RouterState;
  issues: Issue[];
}

const rootReducer = combineReducers({
  routing,
  issuesReducer
});

export default rootReducer;
