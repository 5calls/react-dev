import * as React from 'react';
import i18n from '../../services/i18n';
import { Issue } from '../../common/model';
import { ContactDetails } from './index';

interface Props {
  readonly currentIssue: Issue;
}

const CallDetail: React.StatelessComponent<Props> = (props: Props) => (
  <div>
    <ContactDetails
      currentIssue={props.currentIssue}
      contactIndex={0}
      t={i18n.t}
    />
  </div>

);

export default CallDetail;
