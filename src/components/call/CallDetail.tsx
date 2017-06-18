import * as React from 'react';
import { Issue } from '../../common/model';
import ContactDetails from './ContactDetails';

interface Props {
  selectedIssue: Issue;
}

const CallDetail: React.StatelessComponent<Props> = (props: Props) => (
  <div>
    {/* TODO: Make contactIndex dynamic */}
    <ContactDetails selectedIssue={props.selectedIssue} contactIndex={0}/>
  </div>

);

export default CallDetail;
