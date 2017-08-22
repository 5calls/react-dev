import { Dispatch } from 'redux';
import { ApiData, IpInfoData, LocationFetchType, ReportData } from './../../common/model';
import { get5CallsApiData, getReportData } from '../../services/apiServices';
import { setCachedCity, setLocation, setLocationFetchType, setSplitDistrict } from '../location/index';
import { getLocationByIP, getBrowserGeolocation, GEOLOCATION_TIMEOUT } from '../../services/geolocationServices';
import { issuesActionCreator, callCountActionCreator, apiErrorMessageActionCreator } from './index';
import { ApplicationState } from '../root';
import { LocationUiState } from '../../common/model';
import { setUiState } from './../location';
/**
 * Timer for calling fetchLocationByIP() if
 * fetchBrowserGeolocation() fails or times out.
 */
let setTimeoutHandle; //

export const getIssuesIfNeeded = () => {
  return (dispatch: Dispatch<ApplicationState>,
          getState: () => ApplicationState) => {
    const state: ApplicationState = getState();
    // Only make the api call if it hasn't already been made
    // This method is primarily for when a user has navigated
    // directly to a route with an issue id
    if (!state.remoteDataState.issues || state.remoteDataState.issues.length === 0) {
      startup();
    }
  };
};

export const getApiData = (address: string = '') => {
  return (dispatch: Dispatch<ApplicationState>,
          getState: () => ApplicationState) => {
    // console.log('getApiData start');
    return get5CallsApiData(address)
      .then((response: ApiData) => {
        // console.log('getApiData then() response', response);
        if (response.invalidAddress) {
          throw new Error('Invalid address found');
        }
        const normalizedAddress = response.normalizedLocation as string;
        dispatch(setCachedCity(normalizedAddress));
        dispatch(setLocation(address));
        dispatch(setSplitDistrict(response.splitDistrict));
        dispatch(setLocationFetchType(LocationFetchType.CACHED_ADDRESS));
        dispatch(issuesActionCreator(response.issues));
      }).catch((error) => {
        dispatch(apiErrorMessageActionCreator(error.message));
        // tslint:disable-next-line:no-console
        console.error(`getIssue error: ${error.message}`, error);
        throw error;
      });
  };
};

export const fetchCallCount = () => {
  return (dispatch: Dispatch<ApplicationState>,
          getState: () => ApplicationState) => {
    return getReportData()
      .then((response: ReportData) => {
        dispatch(callCountActionCreator(response.count));
        // tslint:disable-next-line:no-console
      }).catch((error) => console.error(`fetchCallCount error: ${error.message}`, error));
  };
};

export const fetchLocationByIP = () => {
  return (dispatch: Dispatch<ApplicationState>,
          getState: () => ApplicationState) => {
    clearTimeout(setTimeoutHandle);
    dispatch(setUiState(LocationUiState.FETCHING_LOCATION));
    return getLocationByIP()
        .then((response: IpInfoData) => {
          dispatch(setLocationFetchType(LocationFetchType.IP_INFO));
          const location = response.loc;
          dispatch(getApiData(location))
          .then(() => {
            dispatch(setUiState(LocationUiState.LOCATION_FOUND));
          });
          // TODO: dispatch an error message
          // tslint:disable-next-line:no-console
        }).catch((error) => console.error(`fetchLocationByIP error: ${error.message}`, error));
    // }
  };
};

export const fetchBrowserGeolocation = () => {
  return (dispatch: Dispatch<ApplicationState>,
          getState: () => ApplicationState) => {
    // Sometimes, the user ignores the prompt or the browser does not
    // provide a response when they do not permit browser location.
    // After GEOLOCATION_TIMEOUT + 1 second, try IP-based location,
    // but let browser-based continue. This timeout is cleared after
    // either geolocation or ipinfo.io location succeeds.
    dispatch(setUiState(LocationUiState.FETCHING_LOCATION));
    const state = getState();
    const fetchType = state.locationState.locationFetchType;
    // const useGeolocation = state.locationState.useGeolocation || null;

    // tslint:disable-next-line:no-shadowed-variable
    setTimeoutHandle = setTimeout(() => dispatch(fetchLocationByIP()), GEOLOCATION_TIMEOUT + 1000);
    // fetchType will be undefined at first
    if (fetchType === undefined || fetchType === LocationFetchType.BROWSER_GEOLOCATION) {
      getBrowserGeolocation()
        .then(location => {
          if (location.latitude && location.longitude) {
            dispatch(setLocationFetchType(LocationFetchType.BROWSER_GEOLOCATION));
            const loc = `${location.latitude} ${location.longitude}`;
            dispatch(getApiData(loc));
            clearTimeout(setTimeoutHandle);
          } else {
            dispatch(fetchLocationByIP());
          }
        })
        .catch(e => {
          // tslint:disable-next-line:no-console
          console.error('Problem getting browser geolocation', e);
          dispatch(fetchLocationByIP());
        });
    } else {
      dispatch(fetchLocationByIP());
    }
  };
};

export const startup = () => {
  return (dispatch: Dispatch<ApplicationState>,
          getState: () => ApplicationState) => {
    dispatch(setUiState(LocationUiState.FETCHING_LOCATION));
    let state = getState();
    const loc = state.locationState.address || state.locationState.cachedCity;
    if (loc) {
      // console.log('Using cached address');
      dispatch(getApiData(loc))
        .then(() => {
          setLocationFetchType(LocationFetchType.CACHED_ADDRESS);
        });
    } else {
      dispatch(fetchBrowserGeolocation());
    }
    dispatch(fetchCallCount());
  };
};
