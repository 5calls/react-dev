import { Reducer } from 'redux';
import { UserStatsAction } from './index';

export interface UserContactEvent {
  contactId: string;
  issueId: string;
  result: string;
  time: number;
}

export interface UserStats {
  all: UserContactEvent[];
  contacted: number;
  vm: number;
  unavailable: number;
  voicemail: number;
  contact: number;
  yes: number;
}

export const userStatsReducer: Reducer<UserStats> = (
  state: UserStats = {} as UserStats, action: UserStatsAction): UserStats => {
  switch (action.type) {
    case 'UPDATE_USER_STATS':
      const userStats: UserStats = action.payload as UserStats;

      // create a deep copy of the incoming object to create the new state
      const all: UserContactEvent[] = [...userStats.all];

      // spread the incoming userStats object into a new object
      //  overwrite the "all" property with the new all array, made above
      //  otherwise the "all" array would be a reference to the old/existing "all" array
      const newState: UserStats = { ...userStats, all: all };

      return newState;
    default:
      return state;
  }
};
