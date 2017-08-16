import * as React from 'react';
import i18n from '../../services/i18n';
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
          t={i18n.t}
        />
        <p className="call__text">
          <Trans i18nKey="callComplete.learnWhyCallingIsGreat">
            <a href="/about">about-link-text-stub</a>
          </Trans>
        </p>
        {/* Choo method: townHall(state) */}
        <strong>TOWN HALL COMPONENT HERE</strong><br />

        <CallCount
          totalCount={props.totalCount}
          t={i18n.t}
        />
      </div>
    </section>
  );
};

export const DoneTranslatable = translate()(Done);
