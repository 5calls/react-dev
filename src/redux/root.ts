import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import { LocationState, locationStateReducer } from './location/reducer';
import { CallState, callStateReducer } from './callState/reducer';
import { RemoteDataState, remoteDataReducer } from './remoteData/reducer';

export interface ApplicationState {
  remoteDataState: RemoteDataState;
  callState: CallState;
  locationState: LocationState;
}

export const DefaultApplicationState: ApplicationState = {
  remoteDataState: {} as RemoteDataState,
  callState: {} as CallState,
  locationState: {} as LocationState
};

const rootReducer = combineReducers({
  routing,
  remoteDataState: remoteDataReducer,
  callState: callStateReducer,
  locationState: locationStateReducer
});

export default rootReducer;
