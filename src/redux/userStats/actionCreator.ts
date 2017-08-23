import { SetUserStatsAction, AddCallEventAction, UserStatsState, UserContactEvent } from './index';

export const setUserStatsActionCreator = (userStats: UserStatsState): SetUserStatsAction => {
  return {
    type: 'SET_USER_STATS',
    payload: userStats
  };
};

export const addCallEventActionCreator = (callEvent: UserContactEvent): AddCallEventAction => {
  return {
    type: 'ADD_CALL_EVENT',
    payload: callEvent
  };
};