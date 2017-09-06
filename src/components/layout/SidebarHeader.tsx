import * as React from 'react';
import { Link } from 'react-router-dom';

import i18n from '../../services/i18n';
import { LocationState } from '../../redux/location/reducer';
import { CallState } from '../../redux/callState/reducer';
import { LocationTranslatable } from '../location';

interface Props {
  readonly callState: CallState;
  readonly locationState: LocationState;
  readonly setLocation: (location: string) => void;  
  readonly clearLocation: () => void;  
}

const SidebarHeader: React.StatelessComponent<Props> = (props: Props) => {
  let headerIntro = <h2>{i18n.t('issues.whatsImportantToYou')}</h2>;
  if (props.callState.group) {
    headerIntro = (
      <h3>
        You're calling with&nbsp;
        <Link to={`/group/${props.callState.group.id}`}>
          {props.callState.group.name}
        </Link>
      </h3>
    );
  }  

  return (
    <header className="issues__header" role="banner">
      <h1 className="issues__title">
        <Link
          to={`/`}
        >
          <img className="issues__logo" src="/img/5calls-logotype.png" alt="5 Calls" />5 Calls
        </Link>
      </h1>
      <div className="issues__location">
        <LocationTranslatable
          locationState={props.locationState}
          setLocation={props.setLocation}
          clearLocation={props.clearLocation}
          t={i18n.t}
        />
      </div>
      {headerIntro}
    </header>
  );
};

export default SidebarHeader;