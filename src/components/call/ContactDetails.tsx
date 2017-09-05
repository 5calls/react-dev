import * as React from 'react';
import { TranslationFunction } from 'i18next';
import { translate } from 'react-i18next';
import { Issue, Contact, DefaultContact } from '../../common/model';
import { ContactOffices } from './index';
import { makePhoneLink } from '../shared/jsxUtils';

interface Props {
  readonly currentIssue: Issue;
  readonly contactIndex: number;
  readonly t: TranslationFunction;
}

const ContactDetails: React.StatelessComponent<Props> = ({ currentIssue, contactIndex = 0, t }: Props) => {
  if (currentIssue) {
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
          <ContactOffices
            currentIssue={currentIssue}
            contactIndex={contactIndex}
            t={t}
          />
          <h3 className="call__contact__reason__header">
            {t('contact.whyYouAreCallingThisOffice')}
          </h3>
          <p className="call__contact__reason">{contact.reason}</p>
        </div>
      );
    }
  } else {
    return <span />;
  }
};

export default translate()(ContactDetails);
