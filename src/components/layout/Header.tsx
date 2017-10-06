import * as React from 'react';
import { Link } from 'react-router-dom';
// import { DonationContainer } from '../donation/';

interface Props {}

export const Header: React.StatelessComponent<Props> = (props: Props) => {

  return (
    <header className="logo__header" role="banner" >
      <div className="logo__header__logo layout">
        <Link to={`/`}>
          <img src="/img/5calls-logo-small.png" alt="5 Calls" />
        </Link>
        <img className="stars" src="/img/5calls-stars.png" alt="Make your voice heard" />
      </div>
      {/* <DonationContainer /> */}
    </header>
  );
};
