import { getIssues } from '../../redux/remoteData/apiThunk';
import { setLocation } from './actionCreator';

export function setAddress(address: string) {
  return (dispatch) => {
    dispatch(getIssues(address));
    dispatch(setLocation(address));
  };
}