import { SetUserStatsAction, AddCallEventAction, UserStatsState, UserContactEvent, UserStatsActionType } from './index';

export const setUserStatsActionCreator = (userStats: UserStatsState): SetUserStatsAction => {
  return {
    type: UserStatsActionType.SET_USER_STATS,
    payload: userStats
  };
};

export const addCallEventActionCreator = (callEvent: UserContactEvent): AddCallEventAction => {
  return {
    type: UserStatsActionType.ADD_CALL_EVENT,
    payload: callEvent
  };
};