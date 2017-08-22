import { Reducer } from 'redux';
import { UserStatsAction } from './index';

export interface UserContactEvent {
  contactId: string;
  issueId: string;
  result: string;
  time: number;
}

export interface UserStatsState {
  all: UserContactEvent[];
  unavailable: number;
  voice_mail: number;
  made_contact: number;
  yes: number;
}

const initialState: UserStatsState = {
  all: [],
  unavailable: 0,
  voice_mail: 0,
  made_contact: 0,
  yes: 0,
};

export const userStatsReducer: Reducer<UserStatsState> = (
  state: UserStatsState = initialState as UserStatsState, action: UserStatsAction): UserStatsState => {
  switch (action.type) {
    case 'UPDATE_USER_STATS':
      const userStats: UserStatsState = action.payload as UserStatsState;

      // create a deep copy of the incoming object to create the new state
      const all: UserContactEvent[] = [...userStats.all];

      // spread the incoming userStats object into a new object
      //  overwrite the "all" property with the new all array, made above
      //  otherwise the "all" array would be a reference to the old/existing "all" array
      const newState: UserStatsState = { ...userStats, all: all };

      return newState;
    default:
      return state;
  }
};
