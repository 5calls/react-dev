import { UpdateUserStatsAction, UserStatsState } from './index';

export const updateUserStatsActionCreator = (userStats: UserStatsState): UpdateUserStatsAction => {
  return {
    type: 'UPDATE_USER_STATS',
    payload: userStats
  };
};