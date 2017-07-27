import { UpdateUserStatsAction, UserStats } from './index';

export const updateUserStatsActionCreator = (userStats: UserStats): UpdateUserStatsAction => {
  return {
    type: 'UPDATE_USER_STATS',
    payload: userStats
  };
};