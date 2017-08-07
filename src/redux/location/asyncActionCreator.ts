import { Dispatch } from 'redux';
import { getApiData } from '../../redux/remoteData';
import { setLocation } from './index';
import { ApplicationState } from '../root';

export function setAddress(address: string) {
  return (dispatch: Dispatch<ApplicationState>) => {
    return dispatch(getApiData(address))
      .then(() => {
        dispatch(setLocation(address));
      });
  };
}