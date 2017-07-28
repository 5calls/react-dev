import { ReportData, IpInfoData, ApiData } from './../../common/model';
import * as api from '../../services/apiServices';
import {issuesActionCreator, callCountActionCreator } from './index';
import {ApplicationState} from '../root';

export const getIssuesIfNeeded = () => {
  return (dispatch, getState) => {
    const state: ApplicationState = getState();
    let location: string = '';
    if (state.locationState.address) {
      location = state.locationState.address;
    } else if (state.locationState.address) {
      location = state.locationState.cachedCity;
    }

    // only make the api call if it hasn't already been made
    // This method is primarily for when a user has navigated directly to a route with an issue id
    if (!state.remoteDataState.issues || state.remoteDataState.issues.length === 0) {
      dispatch(getIssues);
    }
  };
};

export const getIssues = (address: string = '') => {
  return (dispatch, getState) => {
    api.get5CallsApiData(address)
      .then((response: ApiData) => {
        dispatch(issuesActionCreator(response.issues));
        // tslint:disable-next-line:no-console
      }).catch((error) => console.error(`getIssue error: ${error.message}`, error));
  };
};

export const fetchCallCount = () => {
  return (dispatch, getState) => {
    api.getReportData()
      .then((response: ReportData) => {
        dispatch(callCountActionCreator(response.count));
        // tslint:disable-next-line:no-console
      }).catch((error) => console.error(`fetchCallCount error: ${error.message}`, error));
  };
};

// TODO: integrate geolocation and catch errors
export const fetchLocationByIP = () => {
  return (dispatch, getState) => {
    api.getLocationByIP()
      .then((response: IpInfoData) => {
        const location = response.loc;
        dispatch(getIssues(location));
        // tslint:disable-next-line:no-console
      }).catch((error) => console.error(`fetchLocationByIP error: ${error.message}`, error));
  };
};