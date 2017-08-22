import * as React from 'react';
import * as Constants from '../../common/constants';
import { TranslationFunction } from 'i18next';
import { translate } from 'react-i18next';

export interface Props {
  readonly t: TranslationFunction;
}

export const About: React.StatelessComponent<Props> = (props: Props) => (
  <section className="about">
    <h2 className="about__title">{props.t('about.title')}</h2>
    <h3 className="about__subtitle">{props.t('about.whyCallingWorks.title')}</h3>
    <p dangerouslySetInnerHTML={{ __html: props.t('about.whyCallingWorks.justificationForCalling') }} />
    <p>{props.t('about.whyCallingWorks.justificationArticlesListHeader')}</p>
    <ul>
      <li>
        <span dangerouslySetInnerHTML={{ __html: props.t('about.whyCallingWorks.article1') }} />
      </li>
      <li>
        <span dangerouslySetInnerHTML={{ __html: props.t('about.whyCallingWorks.article2') }} />
      </li>
      <li>
        <span dangerouslySetInnerHTML={{ __html: props.t('about.whyCallingWorks.article3') }} />
      </li>
      <li>
        <span dangerouslySetInnerHTML={{ __html: props.t('about.whyCallingWorks.article4') }} />
      </li>
    </ul>
    <p dangerouslySetInnerHTML={{ __html: props.t('about.whyCallingWorks.weDoTheResearch') }} />
    {/*tslint:disable-next-line:max-line-length*/}
    <p dangerouslySetInnerHTML={{ __html: props.t('about.whyCallingWorks.sendYourIssues', { contactEmail: Constants.contact.email }) }} />
    <h3 className="about__subtitle">{props.t('about.callingTips.title')}</h3>
    <p dangerouslySetInnerHTML={{ __html: props.t('about.callingTips.callTechnique') }} />
    <p dangerouslySetInnerHTML={{ __html: props.t('about.callingTips.callEtiquette') }} />
    <h3 className="about__subtitle">
      {props.t('about.whoIs5Calls.title')}
    </h3>
    <p dangerouslySetInnerHTML={{ __html: props.t('about.whoIs5Calls.overview') }} />
    <p dangerouslySetInnerHTML={{ __html: props.t('about.whoIs5Calls.iOSApp') }} />
    <p dangerouslySetInnerHTML={{ __html: props.t('about.whoIs5Calls.androidApp') }} />
    <p dangerouslySetInnerHTML={{ __html: props.t('about.whoIs5Calls.contentAndSocial') }} />
    <p dangerouslySetInnerHTML={{ __html: props.t('about.whoIs5Calls.whyStatement') }} />

    <h3 className="about__subtitle">{props.t('about.joinUs.title')}</h3>
    <p dangerouslySetInnerHTML={{ __html: props.t('about.whoIs5Calls.whyStatement') }} />
    {/*tslint:disable-next-line:max-line-length*/}
    <p dangerouslySetInnerHTML={{ __html: props.t('about.joinUs.contactInvite', { contactEmail: Constants.contact.email }) }} />
  </section>
);

export const AboutTranslatable = translate()(About);
