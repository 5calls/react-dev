import * as React from 'react';
import { TranslationFunction } from 'i18next';
// import { translate } from 'react-i18next';
import { Issue } from '../../common/model';

interface Props {
  readonly issue: Issue;
  readonly t: TranslationFunction;
}

const Link: React.StatelessComponent<Props> = ({ issue, t }: Props) => {
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

export default Link;
