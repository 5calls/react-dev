import * as React from 'react';
import { Link } from 'react-router-dom';

import i18n from '../../services/i18n';
import { LocationState } from '../../redux/location/reducer';
import { CallState } from '../../redux/callState/reducer';
import { LocationTranslatable } from '../location';

interface Props {
  readonly callState: CallState;
  readonly currentGroupId?: string;
  readonly locationState: LocationState;
  readonly setLocation: (location: string) => void;  
  readonly clearLocation: () => void;  
}

const SidebarHeader: React.StatelessComponent<Props> = (props: Props) => {
  let headerIntro = <h2>{i18n.t('issues.whatsImportantToYou')}</h2>;

  if (props.currentGroupId) {
    headerIntro = (
      <h3>
        Your&nbsp;
        <Link to={`/team/${props.currentGroupId}`}>team page</Link>
      </h3>
    );
  }  

  return (
    <header className="issues__header" role="banner">
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