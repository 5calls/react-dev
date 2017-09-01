import * as React from 'react';
import { Issue } from '../../common/model';

interface Props {
  readonly issue: Issue;
}

const IssueLink: React.StatelessComponent<Props> = ({ issue }: Props) => {
  let linkTitle = issue.link;
  if (issue.linkTitle) {
    linkTitle = issue.linkTitle;
  }

  if (issue.link) {
    return (
      <h4 className="call__script__link"><a target="link" href={issue.link}>{linkTitle}</a></h4>
    );
  } else {
    return <span />;
  }
};

export default IssueLink;
