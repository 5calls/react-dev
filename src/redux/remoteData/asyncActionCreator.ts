import { Dispatch } from 'redux';
import { ReportData, IpInfoData, ApiData } from './../../common/model';
import { get5CallsApiData, getReportData } from '../../services/apiServices';
import { setInvalidAddress, setCachedCity, setFetchingLocation,
  setLocation, setValidatingLocation } from '../location/index';
import { getLocationByIP, getBrowserGeolocation, GEOLOCATION_TIMEOUT } from '../../services/geolocationServices';
import { issuesActionCreator, callCountActionCreator, apiErrorMessageActionCreator } from './index';
import { ApplicationState } from '../root';

/**
 * Timer for calling fetchLocationByIP() if
 * fetchBrowserGeolocation() fails or times out.
 */
let setTimeoutHandle = 0; //

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
      dispatch(getApiData());
    }
  };
};

export const getApiData = (address: string = '') => {
  return (dispatch: Dispatch<ApplicationState>,
          getState: () => ApplicationState) => {
    // console.log('getApiData start');
    return get5CallsApiData(address)
      .then((response: ApiData) => {
        // console.log('getApiData then()');
        dispatch(setInvalidAddress(response.invalidAddress));
        const normalizedAddress = response.normalizedLocation as string;
        dispatch(setCachedCity(normalizedAddress));
        dispatch(setLocation(normalizedAddress));
        dispatch(issuesActionCreator(response.issues));
      }).catch((error) => {
        dispatch(apiErrorMessageActionCreator(error.message));
        // tslint:disable-next-line:no-console
        console.error(`getIssue error: ${error.message}`, error);
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
    // console.log('fetchLocationByIP start');
    clearTimeout(setTimeoutHandle);
    // check to see if state contains an address already,
    // which means that fetchGeolocation() has been successful
    // const state: ApplicationState = getState();
    // if (!state.locationState.address) {
    dispatch(setFetchingLocation(true));
    dispatch(setInvalidAddress(true));
    return getLocationByIP()
        .then((response: IpInfoData) => {
          // console.log('fetchLocationByIP then()');
          const location = response.loc;
          dispatch(getApiData(location))
          .then(() => {
            dispatch(setFetchingLocation(false));
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
    setTimeoutHandle = setTimeout(geolocationTimeoutHandler(dispatch, getState), GEOLOCATION_TIMEOUT + 1000);
    dispatch(setFetchingLocation(true));
    dispatch(setInvalidAddress(true));
    getBrowserGeolocation()
      .then(location => {
        if (location.latitude && location.longitude) {
          const loc = `${location.latitude} ${location.longitude}`;
          dispatch(setFetchingLocation(true));
          dispatch(getApiData(loc));
          dispatch(setFetchingLocation(false));
          clearTimeout(setTimeoutHandle);
        } else {
          // console.log('fetchGeolocation() no location found. Clearing address');
          dispatch(setFetchingLocation(false));
          fetchLocationByIP();
        }
      })
      .catch(e => {
        // tslint:disable-next-line:no-console
        console.error('Problem getting browser geolocation', e);
        fetchLocationByIP();
      });
  };
};

const geolocationTimeoutHandler = (dispatch, getState) => {
  // tslint:disable-next-line:no-console
  console.debug('geolocationTimeoutHandler() called');
  fetchLocationByIP()(dispatch, getState);
};

export const startup = () => {
  return (dispatch: Dispatch<ApplicationState>,
          getState: () => ApplicationState) => {
        dispatch(fetchBrowserGeolocation());
        dispatch(fetchCallCount());
        dispatch(setFetchingLocation(false));
        dispatch(setValidatingLocation(false));
      };
};
