import { LocationClearedAction , LocationSetAction } from './action';

export function setLocation(address: string): LocationSetAction {
  return {
    type: 'LOCATION_SET',
    payload: address
  };
}

export function clearAddress(): LocationClearedAction {
  return {
    type: 'LOCATION_CLEAR'
  };
}
