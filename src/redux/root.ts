import { routerReducer, RouterState } from 'react-router-redux';
import { Reducer, combineReducers } from 'redux';
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
  routing: routerReducer as Reducer<RouterState>,
  remoteDataState: remoteDataReducer,
  callState: callStateReducer,
  locationState: locationStateReducer
});

export default rootReducer;
