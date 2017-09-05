import { } from './NoContact';
import * as React from 'react';
import i18n from '../../services/i18n';
import { TranslationFunction } from 'i18next';
import { translate } from 'react-i18next';
import { Issue, Contact } from '../../common/model';
import { CallHeader, ContactDetails, Outcomes, ScriptTranslatable, NoContactSplitDistrict } from './index';
import { CallState, OutcomeData } from '../../redux/callState';
import { LocationState } from '../../redux/location/reducer';

// This defines the props that we must pass into this component.
export interface Props {
  readonly issue: Issue;
  readonly callState: CallState;
  readonly t: TranslationFunction;
  readonly splitDistrict: boolean;
  readonly clearLocation: () => void;
  readonly onSubmitOutcome: (data: OutcomeData) => Function;
  readonly locationState: LocationState;
}

export interface State {
  issue: Issue;
  currentContact: Contact | undefined;
  currentContactIndex: number;
  numberContactsLeft: number;
}

export class Call extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    // set initial state
    this.state = this.setStateFromProps(props);
  }

  /**
   * Set state from props when props
   * are initialized or refreshed
   *
   * @param {Props} props
   * @returns {State}
   */
  setStateFromProps(props: Props): State {
    let currentContactIndex = 0;
    if (props.issue && props.callState.contactIndexes && props.callState.contactIndexes[props.issue.id]) {
      currentContactIndex = props.callState.contactIndexes[props.issue.id];
    }

    const currentContact = (props.issue && props.issue.contacts
      ? props.issue.contacts[currentContactIndex]
      : undefined);
    const numberContactsLeft = props.issue && props.issue.contacts
      ? props.issue.contacts.length - (currentContactIndex + 1)
      : 0;

    return {
      currentContact: currentContact,
      currentContactIndex: currentContactIndex,
      numberContactsLeft: numberContactsLeft,
      issue: props.issue
    };
  }

  componentWillReceiveProps(newProps: Props) {
    this.setState(this.setStateFromProps(newProps));
  }

  render() {
    return (
      <section className="call">
        {/* TODO: Move header into a separate component */}
        <CallHeader
          currentIssue={this.state.issue}
          t={i18n.t}
        />
        {this.props.splitDistrict ?
        <NoContactSplitDistrict
          splitDistrict={this.props.splitDistrict}
          clearLocation={this.props.clearLocation}
          t={i18n.t}
        /> :
        <ContactDetails
          currentIssue={this.state.issue}
          contactIndex={this.state.currentContactIndex}
          t={i18n.t}
        />}
        <ScriptTranslatable
          issue={this.state.issue}
          contactIndex={this.state.currentContactIndex}
          locationState={this.props.locationState}
          t={i18n.t}
        />
        {this.props.splitDistrict ? <span/> :
        <Outcomes
          currentIssue={this.state.issue}
          numberContactsLeft={this.state.numberContactsLeft}
          currentContactId={(this.state.currentContact ? this.state.currentContact.id : '')}
          onSubmitOutcome={this.props.onSubmitOutcome}
          t={i18n.t}
        />}
        {/* TODO: Fix people/person text for 1 contact left. Move logic to a function */}
        {this.props.splitDistrict ? <span/> :
        this.state.numberContactsLeft > 0 ?
          <h3 aria-live="polite" className="call__contacts__left" >
            {this.props.t('outcomes.contactsLeft', { contactsRemaining: this.state.numberContactsLeft })}
          </h3> : ''
        }
      </section>
    );
  }
}

export const CallTranslatable = translate()(Call);
