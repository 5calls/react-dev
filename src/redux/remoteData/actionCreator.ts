import { NewLocationLookupAction, LocationActionType } from './../location/index';
import { CallCountAction, ApiErrorAction } from './index';
import { Issue } from '../../common/model';
import { IssuesAction, RemoteDataActionType } from './index';

export const issuesActionCreator = (issues: Issue[]): IssuesAction => {
  return {
    type: RemoteDataActionType.GET_ISSUES,
    payload: issues
  };
};

export const callCountActionCreator = (callTotal: number): CallCountAction => {
  return {
    type: RemoteDataActionType.GET_CALL_TOTAL,
    payload: callTotal
  };
};

export const apiErrorMessageActionCreator = (message: string): ApiErrorAction => {
  return {
    type: RemoteDataActionType.API_ERROR,
    payload: message
  };
};

export const newLocationLookup = (location: string): NewLocationLookupAction => {
  return {
    type: LocationActionType.NEW_LOCATION_LOOKUP,
    payload: location
  };
};
