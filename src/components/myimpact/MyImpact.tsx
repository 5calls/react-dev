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
    contactedCalls: props.userStats.contact,
    vmCalls: props.userStats.voicemail,
    unavailableCalls: props.userStats.unavailable
  };

  const myTotalCalls = props.userStats.all.length;

  return (
    <section className="impact">
      <h1 className="impact__title">{props.t('impact.title')}</h1>
      {myTotalCalls === 0 &&
        <div>
          <h2
            className="impact_total"
            dangerouslySetInnerHTML={{ __html: props.t('impact.noCallsYet') }}
          />
        </div>
      }

      {myTotalCalls > 0 &&
        <div>
          <h1
            className="impact_total"
            dangerouslySetInnerHTML={{ __html: props.t('impact.totalCallCountText', { myTotalCalls }) }}
          />

          <p className="impact__text">{props.t('impact.text')}</p>
          <div
            className="impact_result"
            dangerouslySetInnerHTML={{ __html: props.t('impact.callSummaryText', callSummaryParams) }}
          />
        </div>
      }

      <CallCount
        totalCount={props.totalCount}
        large={true}
        t={i18n.t}
      />
    </section>
  );
};

export const MyImpactTranslatable = translate()(MyImpact);
