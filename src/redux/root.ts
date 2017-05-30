import { routerReducer as routing, RouterState } from 'react-router-redux';
import { combineReducers } from 'redux';

export interface ApplicationState {
  routing: RouterState;
}

const rootReducer = combineReducers({
  routing
});

export default rootReducer;
