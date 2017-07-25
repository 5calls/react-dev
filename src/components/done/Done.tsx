import * as React from 'react';
import { TranslationFunction } from 'i18next';
import { translate } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Issue } from '../../common/model';
import { Promotion, CallCount } from '../shared';

interface Props {
  readonly currentIssue: Issue;
  readonly totalCount: number;
  readonly t: TranslationFunction;
}

const Done: React.StatelessComponent<Props> = (props: Props) => {
  return (
    <section className="call">
      <div className="call_complete">
        <h2 className="call__title">{props.t('callComplete.title')}</h2>
        {/*impactPreview*/}
        <p className="call__text">
          {props.t('callComplete.pickAnotherIssue')}
        </p>
        <Promotion selectedIssue={props.currentIssue} />
        <p className="call__text">
          {props.t('callComplete.learnWhyCallingIsGreat')}
        </p>
        {/* Choo method: townHall(state) */}
        <strong>TOWN HALL COMPONENT HERE</strong><br />

        <CallCount totalCount={props.totalCount} />
      </div>
    </section>
  );
};

export default Done;
