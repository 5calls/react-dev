import { Dispatch } from 'redux';
import { ApplicationState } from './root';

// when things are dispatched on component mount on first page load, 
// it's possible that this can occur before rehydration is complete.
// keep track of this and launch any post-hydration actions afterwards

let hasRehydrated = false;
let rehydrationQueue: Function[] = [];

export const onStorageRehydrated = () => {
  return (dispatch: Dispatch<ApplicationState>,
          getState: () => ApplicationState) => {
    // console.log(`rehydrated, executing`);

    hasRehydrated = true;
    
    for (let f of rehydrationQueue) {
      f();
    }
  
    rehydrationQueue = [];
  };
};

export const queueUntilRehydration = (f: Function) => {
  if (hasRehydrated) {
    // console.log(`already rehydrated, executing`);
    f();
  } else {
    // console.log(`storing for later`);
    rehydrationQueue.push(f);
  }
};