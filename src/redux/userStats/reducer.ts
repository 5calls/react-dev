import { Reducer } from 'redux';
import { UserStatsAction } from './index';

export enum UserContactEventType {
  UNAVAILABLE = 'unavailable',
  VOICEMAIL = 'voicemail',
  CONTACT = 'contact'
}

export interface UserContactEvent {
  contactid: string;
  issueid: string;
  result: string;
  time: number;
}

export interface UserStatsState {
  all: UserContactEvent[];
  unavailable: number;
  voicemail: number;
  contact: number;
}

const initialState: UserStatsState = {
  all: [],
  unavailable: 0,
  voicemail: 0,
  contact: 0,
};

export const userStatsReducer: Reducer<UserStatsState> = (
  state: UserStatsState = initialState as UserStatsState, action: UserStatsAction): UserStatsState => {
  switch (action.type) {
    case 'SET_USER_STATS': {
      const userStats: UserStatsState = action.payload as UserStatsState;

      // create a deep copy of the incoming object to create the new state
      const all: UserContactEvent[] = [...userStats.all];

      // spread the incoming userStats object into a new object
      //  overwrite the "all" property with the new all array, made above
      //  otherwise the "all" array would be a reference to the old/existing "all" array
      const newState: UserStatsState = { ...userStats, all: all };

      return newState;
    }
    case 'ADD_CALL_EVENT': {
      const callEvent: UserContactEvent = action.payload as UserContactEvent;
      if (callEvent.result === 'skip') {
        return state;
      }

      const createdState: UserStatsState = { ...state, all: [...state.all] };
      let addEvent: boolean = false;
      switch (callEvent.result) {
        case UserContactEventType.UNAVAILABLE: {
          createdState.unavailable = createdState.unavailable + 1;
          addEvent = true;
          break;
        }
        case UserContactEventType.VOICEMAIL: {
          createdState.voicemail = createdState.voicemail + 1;
          addEvent = true;
          break;
        }
        case UserContactEventType.CONTACT: {
          createdState.contact = createdState.contact + 1;
          addEvent = true;
          break;
        }
        default: {
          // this represents an invalid result string
          // do nothing and return an unchanged state below
        }
      }

      if (addEvent) {
        createdState.all.unshift(callEvent);
      }
      return createdState;
    }
    default: {
      return state;
    }
  }
};
