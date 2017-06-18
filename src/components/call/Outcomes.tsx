import * as React from 'react';
/*
  i18n Keys
    "outcomes":{
      "enterYourCallResult":"Enter your call result to get the next call:",
      "unavailable":"Unavailable",
      "voicemail":"Left Voicemail",
      "madeContact":"Made Contact",
      "skip":"Skip",
      "contactsLeft":
        "{{contactsRemaining}} more $t(common.person, {'count': {{contactsRemaining}}}) to call for this issue."
    },
*/

interface Props {
}
interface State {}

class Outcomes extends React.Component<Props, State>  {
  outcome(e: React.MouseEvent<HTMLElement> , outcome?: string) {
    const target: HTMLElement = e.target as HTMLElement;
    target.blur();
    if (outcome) {
      // TODO: dispatch callCompleteAction
    } else {
      // TODO: dispatch skipCallAction
    }
    return true;
  }

  render() {
    return (
    <div className="call__outcomes">
        <h3 className="call__outcomes__header">
          Enter your call result to get the next call: {/*"outcomes.enterYourCallResult"*/}
        </h3>
        <div className="call__outcomes__items">
          <button onClick={(e) => this.outcome(e, 'unavailable')}>Unavailable {/*"outcomes.unavailable"*/}</button>
          <button onClick={(e) => this.outcome(e, 'vm')}>Left Voicemail {/*"outcomes.voicemail"*/}</button>
          <button onClick={(e) => this.outcome(e, 'contacted')}>Made Contact {/*"outcomes.madeContact"*/}</button>
          <button onClick={(e) => this.outcome(e)}>Skip {/*"outcomes.skip"*/}</button>
        </div>
        {/* contactsLeft > 0 ?
          <h3 aria-live="polite" className="call__contacts__left" >{contactsLeftText}</h3> :
          <span/> */}
      </div>
    );
  }
}

export default Outcomes;
