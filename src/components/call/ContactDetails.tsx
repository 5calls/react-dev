import * as React from 'react';
import { TranslationFunction } from 'i18next';
import { translate } from 'react-i18next';
import { Issue, Contact, DefaultContact } from '../../common/model';

interface Props {
  readonly currentIssue: Issue;
  readonly contactIndex: number;
  readonly t: TranslationFunction;
}

const ContactDetails: React.StatelessComponent<Props> = ({ currentIssue, contactIndex = 0, t }: Props) => {
  const contact: Contact = currentIssue.contacts && currentIssue.contacts.length !== 0 ?
    currentIssue.contacts[contactIndex] : DefaultContact;
  if (contact === DefaultContact) {
    return <span />;
  } else {
    return (
      <div className="call__contact" id="contact">
        <div className="call__contact__image"><img alt="" src={contact.photoURL} /></div>
        <h3 className="call__contact__type">{t('contact.callThisOffice')}</h3>
        <p className="call__contact__name">
          {contact.name} {contact.party ? `${contact.party.substring(0, 1)}-${contact.state}` : ''}
        </p>
        <p className="call__contact__phone">{makePhoneLink(contact.phone)}</p>
        {renderFieldOffices(contact, t)}
        <h3 className="call__contact__reason__header">
          {t('contact.whyYouAreCallingThisOffice')}
        </h3>
        <p className="call__contact__reason">{contact.reason}</p>
      </div>
    );
  }
};

const renderFieldOffices = (contact, t) => {
  // TODO: account for state.showFieldOfficeNumbers == false
  return (
    <div>
      <h3 className="call__contact__field-offices__header">{t('contact.localOfficeNumbers')}</h3>
      <ul className="call__contact__field-office-list">
        {contact.field_offices ? contact.field_offices.map(office =>
          <li key={office.phone}>{makePhoneLink(office.phone)}{cityFormat(office, contact)}</li>
        ) : <span />}
      </ul>
    </div>
  );
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

export default translate()(ContactDetails);
