import * as React from 'react';
import { TranslationFunction } from 'i18next';
import { translate } from 'react-i18next';
import { Issue, Contact, DefaultContact } from '../../common/model';
import { makePhoneLink, cityFormat } from '../shared/jsxUtils';

interface Props {
  readonly currentIssue: Issue;
  readonly contactIndex: number;
  readonly t: TranslationFunction;
}

export interface State {
  showFieldOfficeNumbers: boolean;  
}

export class ContactOffices extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {showFieldOfficeNumbers: false};
  }

  showField = () => {
    this.setState({showFieldOfficeNumbers: true});
  }

  // this component is reused and the local state is maintained through contact changes,
  // we want the local state to reset when it's updated
  componentWillReceiveProps(nextProps: Props) {
    this.setState({showFieldOfficeNumbers: false});    
  }
  
  render() {
    const contact: Contact = this.props.currentIssue.contacts && this.props.currentIssue.contacts.length !== 0 ?
      this.props.currentIssue.contacts[this.props.contactIndex] : DefaultContact;

    if (contact.field_offices == null || contact.field_offices.length === 0) {
      return (<span />);
    }

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
          <p className="call__contact__show-field-offices">{this.props.t('contact.busyLine')}&nbsp;
            <a onClick={this.showField}>{this.props.t('contact.busyLineGuidance')}</a>
          </p>
        </div>
      );
    }  
  }
}

export default translate()(ContactOffices);

export const ContactOfficesTranslatable = translate()(ContactOffices);
