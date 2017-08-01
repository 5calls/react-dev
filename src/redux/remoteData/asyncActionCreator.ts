import { ReportData, IpInfoData, ApiData } from './../../common/model';
import { get5CallsApiData, getReportData } from '../../services/apiServices';
import { setAddress, clearAddress } from '../location/index';
import { Dispatch } from 'redux';
import { getLocationByIP, getBrowserGeolocation, GEOLOCATION_TIMEOUT } from '../../services/geolocationServices';
import { issuesActionCreator, callCountActionCreator } from './index';
import { ApplicationState } from '../root';

export const getIssuesIfNeeded = () => {
  return (dispatch: Dispatch<ApplicationState>,
          getState: () => ApplicationState) => {
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
      dispatch(getIssues());
    }
  };
};

export const getIssues = (address: string = '') => {
  return (dispatch: Dispatch<ApplicationState>,
          getState: () => ApplicationState) => {
    get5CallsApiData(address)
      .then((response: ApiData) => {
        // TODO: dispatch normalizedLocation as cachedCity
        // TODO: dispatch address
        dispatch(issuesActionCreator(response.issues));
      }).catch((error) => {
        // TODO: dispatch an error message???
        // tslint:disable-next-line:no-console
        console.error(`getIssue error: ${error.message}`, error);
      });
  };
};

export const fetchCallCount = () => {
  return (dispatch: Dispatch<ApplicationState>,
          getState: () => ApplicationState) => {
    getReportData()
      .then((response: ReportData) => {
        dispatch(callCountActionCreator(response.count));
        // tslint:disable-next-line:no-console
      }).catch((error) => console.error(`fetchCallCount error: ${error.message}`, error));
  };
};

export const fetchLocationByIP = () => {
  return (dispatch: Dispatch<ApplicationState>,
          getState: () => ApplicationState) => {
    // check to see if state contains an address already,
    // which means that fetchGeolocation() has been successful
    const state: ApplicationState = getState();
    if (!state.locationState.address) {
      getLocationByIP()
        .then((response: IpInfoData) => {
          const location = response.loc;
          console.log('fetchLocationByIP() location found', location);
          dispatch(getIssues(location));
          // tslint:disable-next-line:no-console
        }).catch((error) => console.error(`fetchLocationByIP error: ${error.message}`, error));
    }
  };
};

export const fetchBrowserGeolocation = () => {
  return (dispatch: Dispatch<ApplicationState>,
          getState: () => ApplicationState) => {
    setTimeout(fetchLocationByIP()(dispatch, getState), GEOLOCATION_TIMEOUT + 1000);
    getBrowserGeolocation()
      .then(location => {
        if (location.latitude && location.longitude) {
          const loc = `${location.latitude} ${location.longitude}`;
          console.log('fetchGeolocation() success. Setting address:', loc);
          dispatch(setAddress(loc));
        } else {
          console.log('fetchGeolocation() no location found. Clearing address');
          dispatch(clearAddress());
        }
      })
      .catch(e => {
        // tslint:disable-next-line:no-console
        console.error('Problem getting browser geolocation', e);
        fetchLocationByIP();
      });
  };
};
