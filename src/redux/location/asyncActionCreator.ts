import { getApiData } from '../../redux/remoteData';
import { setLocation } from './index';
export function setAddress(address: string) {
  return (dispatch) => {
    dispatch(getApiData(address));
    dispatch(setLocation(address));
  };
}