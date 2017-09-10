import * as React from 'react';
import { Link } from 'react-router-dom';
import { TranslationFunction } from 'i18next';
import { translate, Trans } from 'react-i18next';
import { Issue } from '../../common/model';
import { Promotion, CallCount } from '../shared';

interface Props {
  readonly currentIssue: Issue;
  readonly totalCount: number;
  readonly t: TranslationFunction;
}

export const Done: React.StatelessComponent<Props> = (props: Props) => {
  return (
    <section className="call">
      <div className="call_complete">
        <h2 className="call__title">{props.t('callComplete.title')}</h2>
        {/*impactPreview*/}
        <p className="call__text">
          {props.t('callComplete.pickAnotherIssue')}
        </p>
        <Promotion
          currentIssue={props.currentIssue}
          t={props.t}
        />
        <p className="call__text">
          <Trans i18nKey="callComplete.learnWhyCallingIsGreat" parent="span">
            <Link to="/about">about-link-text-stub</Link>
          </Trans>
        </p>

        <CallCount
          totalCount={props.totalCount}
          large={true}
          t={props.t}
        />
      </div>
    </section>
  );
};

export const DoneTranslatable = translate()(Done);
