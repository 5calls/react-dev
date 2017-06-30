import { getIssues } from '../../redux/remoteData';
import { setLocation } from './index';

export function setAddress(address: string) {
  return (dispatch) => {
    dispatch(getIssues(address));
    dispatch(setLocation(address));
  };
}