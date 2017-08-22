import * as React from 'react';
import i18n from '../../services/i18n';
import { TranslationFunction } from 'i18next';
import { translate } from 'react-i18next';
import { CallCount } from '../shared';
import { UserStatsState } from '../../redux/userStats';

interface Props {
  readonly userStats: UserStatsState;
  readonly totalCount: number;
  readonly t: TranslationFunction;
}

export const MyImpact: React.StatelessComponent<Props> = (props: Props) => {
  const callSummaryParams = {
    contactedCalls: props.userStats.made_contact,
    vmCalls: props.userStats.voice_mail,
    unavailableCalls: props.userStats.unavailable
  };

  return (
    <section className="impact">
      <h2 className="impact__title">{props.t('impact.title')}</h2>
      <h2
        className="impact_total"
        // eslint-disable-next-line
        dangerouslySetInnerHTML={{ __html: props.t('impact.totalCallCountText', { myTotalCalls: props.userStats.all.length }) }}
      />

      <p className="impact__text">{props.t('impact.text')}</p>
      <div
        className="impact_result"
        dangerouslySetInnerHTML={{ __html: props.t('impact.callSummaryText', callSummaryParams) }}
      />

      <CallCount
        totalCount={props.totalCount}
        t={i18n.t}
      />
    </section>
  );
};

export const MyImpactTranslatable = translate()(MyImpact);
