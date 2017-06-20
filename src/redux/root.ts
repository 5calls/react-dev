import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import { CallState, callStateReducer } from './callState/reducer';
import { RemoteDataState, remoteDataReducer } from './remoteData/reducer';

export interface ApplicationState {
  remoteDataState: RemoteDataState;
  callState: CallState;
}

export const DefaultApplicationState: ApplicationState = {
  remoteDataState: {} as RemoteDataState,
  callState: {} as CallState
};

const rootReducer = combineReducers({
  routing,
  remoteDataState: remoteDataReducer,
  callState: callStateReducer
});

export default rootReducer;
