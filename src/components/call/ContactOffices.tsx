import * as React from 'react';
import { TranslationFunction } from 'i18next';
import { translate } from 'react-i18next';
import { Issue, Contact, DefaultContact } from '../../common/model';

interface Props {
  readonly currentIssue: Issue;
  readonly contactIndex: number;
  readonly t: TranslationFunction;
}

export interface State {
  showFieldOfficeNumbers: Boolean;  
}

export class ContactOffices extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {showFieldOfficeNumbers: false};
  }

  showField = () => {
    this.setState({showFieldOfficeNumbers: true});
  };
  
  render() {
    const contact: Contact = this.props.currentIssue.contacts && this.props.currentIssue.contacts.length !== 0 ? this.props.currentIssue.contacts[this.props.contactIndex] : DefaultContact;

    if (this.state.showFieldOfficeNumbers) {
      return (
        <div>
          <h3 className="call__contact__field-offices__header">{this.props.t('contact.localOfficeNumbers')}</h3>
          <ul className="call__contact__field-office-list">
            {contact.field_offices ? contact.field_offices.map(office =>
              <li key={office.phone}>{makePhoneLink(office.phone)}{cityFormat(office, contact)}</li>
            ) : <span />}
          </ul>
        </div>
      );
    } else {
      return (
        <div>
          <p className="call__contact__show-field-offices">{this.props.t('contact.busyLine')}  <a onClick={this.showField}>{this.props.t('contact.busyLineGuidance')}</a></p>
        </div>
      );
    }  
  }
};

const makePhoneLink = (phoneNumber: string): JSX.Element => {
  if (phoneNumber) {
    return (
      <a href={`tel:${phoneNumber.replace(/-| /g, '')}`}>{phoneNumber.replace(/^\+1 /, '')}</a>
    );
  } else {
    return <span />;
  }
};

const cityFormat = (office, contact): JSX.Element => {
  if (office.city) {
    return <span>{` - ${office.city}, ${contact.state}`}</span>;
  } else {
    return <span />;
  }
};

export default translate()(ContactOffices);
