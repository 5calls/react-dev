import * as React from 'react';
import { TranslationFunction } from 'i18next';
import { translate } from 'react-i18next';
import * as Constants from '../../common/constants';
import { Issue } from '../../common/model';

interface Props {
  readonly currentIssue: Issue | null;
  readonly t: TranslationFunction;
}

const Promotion: React.StatelessComponent<Props> = (props: Props) => {
  let url = encodeURIComponent(Constants.APP_URL);
  let additionalTwitterComps = '&via=make5calls';
  let tweet = encodeURIComponent(props.t('promote.motto'));
  let twitterTitle = props.t('promote.shareOnTwitter');
  let facebookTitle = props.t('promote.shareOnFacebook');

  // for selected issues, customize the share text a bit more
  if (props.currentIssue) {
    const issueID = props.currentIssue.slug ? props.currentIssue.slug : props.currentIssue.id;

    url = encodeURIComponent(`${Constants.APP_URL}/issue/${issueID}`);
    // the additional "via @make5calls" text that the via param introduces doesn't fit with issue titles, remove it
    additionalTwitterComps = '';
    // tslint:disable-next-line:max-line-length
    tweet = encodeURIComponent(props.t('promote.iJustCalled') + props.currentIssue.name.substring(0, 72) + props.t('promote.youShouldToo'));
    twitterTitle = props.t('promote.tweetThisIssue');
    facebookTitle = props.t('promote.shareThisIssue');
  }

  // is this new window behavior the best? Nope, but it matches the default behavior in both share widgets
  const twitterShare = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    // tslint:disable-next-line:max-line-length
    window.open(`https://twitter.com/share?url=${url}${additionalTwitterComps}&text=${tweet}`, 'sharewindow', 'width=500, height=350');
  };

  const facebookShare = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    // tslint:disable-next-line:max-line-length
    window.open('https://www.facebook.com/sharer/sharer.php?u=http://bit.ly/2iJb5nH', 'sharewindow', 'width=500, height=350');
  };

  return (
    <div className="promote">
      <p>
        <a target="_blank" onClick={(e) => twitterShare(e)}>
          <i className="fa fa-twitter" aria-hidden="true" /> {twitterTitle}
        </a>
        <a target="_blank" onClick={(e) => facebookShare(e)}>
          <i className="fa fa-facebook" aria-hidden="true" /> {facebookTitle}
        </a>
      </p>
    </div>
  );
};

export default translate()(Promotion);
