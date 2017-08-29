import * as React from 'react';
import { TranslationFunction } from 'i18next';
import { translate } from 'react-i18next';
import { Issue, CategoryMap } from '../../common/model';
import { IssuesListItem } from './index';

interface Props {
  readonly inactiveIssues: Issue[];
  readonly categoryMap: CategoryMap[];
  readonly completedIssueIds: string[];
  readonly t: TranslationFunction;
  readonly onSelectIssue: (issueId: string) => Function;  
}

export const MoreIssues: React.StatelessComponent<Props> = (props: Props) => {
  return (
    <section className="call">
    <div className="call_complete">
      <h2 className="call__title">
        {props.t('issues.activeIssuesWithCount', {count: (props.inactiveIssues ? props.inactiveIssues.length : 0)})}
      </h2>
      {props.categoryMap ? props.categoryMap.map((cat, key) =>
        <div key={key}>
          <h2>{cat.category.name}</h2>
          <ul className="issues-list" role="navigation">
          {cat.issues.map((issue) =>
            <IssuesListItem
              key={issue.id}
              issue={issue}
              isIssueComplete={
                props.completedIssueIds &&
                (props.completedIssueIds.find((issueId: string) => issue.id === issueId) !== undefined)
              }
              isIssueActive={false}
              onSelectIssue={props.onSelectIssue}
            />
          )}
          </ul>
        </div>
      ) : <span/> }
    </div>
    </section>
  );
};

export const MoreIssuesTranslatable = translate()(MoreIssues);
