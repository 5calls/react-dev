import { } from './NoContact';
import * as React from 'react';
import i18n from '../../services/i18n';
import { TranslationFunction } from 'i18next';
import { Issue, VoterContact } from '../../common/model';
import { CallHeaderTranslatable } from './index';
import { CallState, FlexibleOutcomeData } from '../../redux/callState';
import { LocationState } from '../../redux/location/reducer';
import { getNextContact } from '../../services/apiServices';
import { queueUntilRehydration } from '../../redux/rehydrationUtil';

// This defines the props that we must pass into this component.
export interface Props {
  readonly issue: Issue;
  readonly currentGroupId?: string;
  readonly callState: CallState;
  readonly locationState: LocationState;
  readonly t: TranslationFunction;
  readonly clearLocation: () => void;
  readonly onSubmitOutcome: (data: FlexibleOutcomeData) => Function;
}

export interface State {
  issue: Issue;
  currentContact?: VoterContact;
  outcomeState?: string;
  supportState?: string;
}

export interface Button {
  title: string;
  emoji: string;
  key: string;
}

export default class FetchCall extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    // set initial state
    this.state = this.setStateFromProps(props);
  }

  setStateFromProps(props: Props): State {
    return {
      // currentContact: currentContact,
      issue: props.issue
    };
  }

  componentDidMount() {
    queueUntilRehydration(() => {
      this.fillContact();
    });      
  }

  fillContact() {
    getNextContact(this.props.issue.id).then((contact: VoterContact) => {
      this.setState({ currentContact: contact, outcomeState: undefined, supportState: undefined });
    });
  }

  componentWillReceiveProps(newProps: Props) {
    this.setState(this.setStateFromProps(newProps));
  }

  nextButton() {
    if (this.nextEnabled()) {
      return (
        <div className="call__outcomes__items">
          <button onClick={(e) => this.nextContact(e)}>Next Contact ➡️</button>
        </div>
      );
    }

    return (
      <div className="call__outcomes__items disabled">
        <button disabled={true}>Next Contact ➡️</button>
      </div>
    );
  }

  nextEnabled(): Boolean {
    // anything other than contacted
    if (this.state.outcomeState && this.state.outcomeState !== 'contacted') {
      return true;
    }

    // support for contacted
    if (this.state.outcomeState && this.state.outcomeState === 'contacted' && this.state.supportState) {
      return true;
    }

    return false;
  }

  supportButtons() {
    const buttons: Button[] = [
      {title: 'Strong Support', emoji: '🎉', key: 'strongsupport'},
      {title: 'Lean Support', emoji: '⭐', key: 'leansupport'},
      {title: 'Undecided', emoji: '🌀', key: 'undecided'},
      {title: 'Lean Opponent', emoji: '🚫', key: 'leanopp'},
      {title: 'Strong Opponent', emoji: '💔', key: 'strongopp'},
      {title: 'Not Voting', emoji: '😡', key: 'novote'},
    ];

    if (this.supportEnabled()) {
      return (
      <div className="call__outcomes__items call__outcomes__support">
        {buttons.map((button, index) => 
          <button key={index} onClick={(e) => this.setSupport(e, button.key)} className={this.buttonClass(button.key)}>
            {button.title}<br/>{button.emoji}
          </button>
        )}
      </div>
      );
    }

    return (
      <div className="call__outcomes__items call__outcomes__support disabled">
        {buttons.map((button, index) => 
          <button key={index} disabled={true}>{button.title}<br/>{button.emoji}</button>
        )}
      </div>
    );
  }

  supportEnabled(): Boolean {
    if (this.state.outcomeState && this.state.outcomeState === 'contacted') {
      return true;
    }

    return false;
  }

  setOutcome(e: React.MouseEvent<HTMLButtonElement>, outcome: string) {
    e.currentTarget.blur();

    if (outcome !== '') {
      this.setState({ outcomeState: outcome });
    }
  }

  setSupport(e: React.MouseEvent<HTMLButtonElement>, support: string) {
    e.currentTarget.blur();

    if (support !== '') {
      this.setState({ supportState: support });
    }
  }

  nextContact(e: React.MouseEvent<HTMLButtonElement>) {
    e.currentTarget.blur();

    let outcomeState = '';
    if (this.state.outcomeState) {
      outcomeState += this.state.outcomeState;

      if (this.state.supportState) {
        outcomeState += ':' + this.state.supportState;
      }
    }

    this.props.onSubmitOutcome({
      outcome: outcomeState,
      numberContactsLeft: 0,
      issueId: this.props.issue.id,
      contactId: this.state.currentContact ? this.state.currentContact.id : 'none',
    });
    this.setState({ currentContact: undefined });
    this.fillContact();
  }

  buttonClass(key: string) {
    if (this.state.outcomeState && this.state.outcomeState === key) {
      return 'selected';
    }

    if (this.state.supportState && this.state.supportState === key) {
      return 'selected';
    }

    return '';
  }

  contactArea() {
    const outcomeButtons: Button[] = [
      {title: 'Contacted', emoji: '😀', key: 'contacted'},
      {title: 'Not Home', emoji: '😕', key: 'nothome'},
      {title: 'Refused', emoji: '🤐', key: 'refused'},
      // {title: 'Left Message', emoji: '📼', key: 'voicemail'},
      {title: 'Disconnected', emoji: '📵', key: 'disconnected'},
      {title: 'Wrong Number', emoji: '👽', key: 'wrongnumber'},
    ];

    if (this.state.currentContact) {
      return (
        <div>
        <div className="call__contact" id="contact">
          {/* <div className="call__contact__image"><img alt="" src="" /></div> */}
          <h3 className="call__contact__type">{this.props.t('contact.callThisOffice')}</h3>
          <p className="call__contact__name">
            {this.state.currentContact.name} <span>from</span> {this.state.currentContact.city}
          </p>
          <p className="call__contact__phone">
            <a href={`tel:${this.state.currentContact.phone}`}>{this.state.currentContact.phone}</a>
          </p>
        </div>
        <h3 className="call__script__header">{this.props.t('script.yourScript')}</h3>
        <div className="call__script__body">
          {this.props.issue.script.split('\n').map((line, index) =>
            <p key={index}>{line}</p>
          )}
        </div>
        <div className="call__outcomes">
          <h3 className="call__outcomes__header">
            How did the call go?
          </h3>
          <div className="call__outcomes__items">
            {outcomeButtons.map((button, index) =>
              <button
                key={index}
                onClick={(e) => this.setOutcome(e, button.key)}
                className={this.buttonClass(button.key)}
              >
                {button.title}<br/>{button.emoji}
              </button>
            )}
          </div>
          <h3 className="call__outcomes__header">
            Contacted? Result here.           
          </h3>
          {this.supportButtons()}
          <h3 className="call__outcomes__header">
            All done           
          </h3>
          {this.nextButton()}
        </div>
        </div>
      );
    }

    return <h3 className="call__outcomes__header">Getting your next contact...</h3>;
  }

  render() {
    return (
      <section className="call voter">
        <CallHeaderTranslatable
          currentIssue={this.state.issue}
          t={i18n.t}
        />
        {this.contactArea()}
      </section>
    );
  }
}
