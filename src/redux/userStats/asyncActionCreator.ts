import { Dispatch } from 'redux';
import { ApplicationState } from '../root';
import { UserContactEvent, UserStatsState } from './reducer';
import { updateUserStatsActionCreator } from './index';

export function updateUserStatsAsyncActionCreator(data: UserContactEvent) {
  return (dispatch: Dispatch<ApplicationState>, getState) => {
    if (data.result === 'skip') {
      return;
    }

    const userStats: UserStatsState = (getState() as ApplicationState).userStatsState;

    switch (data.result) {
      case 'unavailable': {
        userStats.unavailable = userStats.unavailable + 1;
        break;
      }
      case 'voice_mail': {
        userStats.voice_mail = userStats.voice_mail + 1;
        break;
      }
      case 'made_contact': {
        userStats.made_contact = userStats.made_contact + 1;
        break;
      }
      default: {
        // this represents an invalid setting
        return;
      }
    }

    userStats.all.unshift(data);
    dispatch(updateUserStatsActionCreator(userStats));
  };
}
