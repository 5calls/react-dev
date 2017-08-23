import { userStatsReducer, UserStatsState, SetUserStatsAction, } from './index';

let defaultState;
beforeEach(() => {
  defaultState = {
    all: [],
    voice_mail: 0,
    unavailable: 0,
    made_contact: 0,
    yes: 0,
  };
});

test('UserStats reducer processes UpdateStatsActionCreator action correctly', () => {
  const state: UserStatsState = { ...defaultState };

  // add contact
  state.all.unshift(getUserContactObject('unavailable'));
  state.unavailable = 1;

  const action: SetUserStatsAction = {
    type: 'SET_USER_STATS',
    payload: state
  };
  const newState = userStatsReducer(state, action);
  expect(newState.unavailable).toEqual(1);
  expect(newState.voice_mail).toEqual(0);
  expect(newState.all.length).toEqual(1);
});

const getUserContactObject = (result: string) => {
  return {
    result,
    contactId: 'fake-contact-id',
    issueId: 'fake-issue-id',
    time: Date.now(),
  };
};