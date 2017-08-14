import { Dispatch } from 'redux';
import { getApiData } from '../../redux/remoteData';
import { setLocation, setUiState } from './index';
import { ApplicationState } from '../root';
import { LocationUiState } from '../../common/model';

export function setAddress(address: string) {
  return (dispatch: Dispatch<ApplicationState>) => {
    return dispatch(getApiData(address))
      .then(() => {
        dispatch(setLocation(address));
      });
  };
}

export function newLocationLookup(location: string) {
  return (dispatch: Dispatch<ApplicationState>) => {
    return dispatch(getApiData(location))
      .then(() => {
        dispatch(setUiState(LocationUiState.LOCATION_FOUND));
      })
      .catch((error) => {
        dispatch(setUiState(LocationUiState.LOCATION_ERROR));
      });
  };
}
