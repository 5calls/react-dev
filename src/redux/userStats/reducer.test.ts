import { userStatsReducer, UserStatsState, SetUserStatsAction, AddCallEventAction } from './index';

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

test('UserStats reducer processes SetUserStatsActionCreator action correctly', () => {
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

test('UserStats reducer processes addCallEventActionCreator action correctly', () => {
  const state: UserStatsState = { ...defaultState };

  // set up
  state.all.unshift(getUserContactObject('unavailable'));
  state.unavailable = 1;

  const action: SetUserStatsAction = {
    type: 'SET_USER_STATS',
    payload: state
  };
  let newState = userStatsReducer(state, action);

  const callEvent = getUserContactObject('voice_mail');

  const callEventAction: AddCallEventAction = {
    type: 'ADD_CALL_EVENT',
    payload: callEvent
  };

  newState = userStatsReducer(newState, callEventAction);
  expect(newState.unavailable).toEqual(1);
  expect(newState.voice_mail).toEqual(1);
  expect(newState.all.length).toEqual(2);
});

const getUserContactObject = (result: string) => {
  return {
    result,
    contactId: 'fake-contact-id',
    issueId: 'fake-issue-id',
    time: Date.now(),
  };
};