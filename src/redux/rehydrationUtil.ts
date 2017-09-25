import { Dispatch } from 'redux';
import { ApplicationState } from './root';
import { startup } from './remoteData/asyncActionCreator';

// when things are dispatched on component mount on first page load, 
// it's possible that this can occur before rehydration is complete.
// keep track of this and launch any post-hydration actions afterwards

let hasRehydrated = false;
let rehydrationQueue: Function[] = [];

export const rehydrated = () => {
  return (dispatch: Dispatch<ApplicationState>,
          getState: () => ApplicationState) => {
    // console.log(`rehydrated, executing`);

    // startup should always be run first after rehydration is complete
    startup(dispatch, getState);

    hasRehydrated = true;
    
    for (let f of rehydrationQueue) {
      f();
    }
  
    rehydrationQueue = [];
  };
};

export const queueUntilHydration = (f: Function) => {
  if (hasRehydrated) {
    // console.log(`already rehydrated, executing`);
    f();
  } else {
    // console.log(`storing for later`);
    rehydrationQueue.push(f);
  }
};