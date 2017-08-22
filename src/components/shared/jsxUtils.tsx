import * as React from 'react';
import { FieldOffice, Contact } from '../../common/model';

export const makePhoneLink = (phoneNumber: string): JSX.Element => {
  if (phoneNumber) {
    return (
      <a href={`tel:${phoneNumber.replace(/-| /g, '')}`}>{phoneNumber.replace(/^\+1 /, '')}</a>
    );
  } else {
    return <span />;
  }
};

export const cityFormat = (office: FieldOffice, contact: Contact): JSX.Element => {
  if (office.city) {
    return <span>{` - ${office.city}, ${contact.state}`}</span>;
  } else {
    return <span />;
  }
};
