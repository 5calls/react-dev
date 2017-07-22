import * as React from 'react';
import * as Constants from '../../common/constants';
import { Issue } from '../../common/model';

/*
  i18n Keys:
    "promote": {
      "iJustCalled": "I just called my rep to ",
      "youShouldToo": " -- you should too:",
      "tweetThisIssue": "Tweet this issue",
      "shareThisIssue": "Share this issue",
      "shareOnTwitter": "Share on Twitter",
      "shareOnFacebook": "Share on Facebook",
      "motto": "Spend 5 minutes. Make 5 calls. Make your voice heard."
    },
*/
interface Props {
  readonly selectedIssue: Issue | null;
}

const Promotion: React.StatelessComponent<Props> = (props: Props) => {
  let url = encodeURIComponent(Constants.APP_URL);
  let additionalTwitterComps = '&via=make5calls';
  // tslint:disable-next-line:max-line-length
  let tweet = encodeURIComponent('Spend 5 minutes. Make 5 calls. Make your voice heard.'/*t("promote.motto", null, true)*/);
  let twitterTitle = 'Share on Twitter'/*t("promote.shareOnTwitter", null, true)*/;
  let facebookTitle = 'Share on Facebook'/*t("promote.shareOnFacebook", null, true)*/;

  // for selected issues, customize the share text a bit more
  if (props.selectedIssue) {
    url = encodeURIComponent(`${Constants.APP_URL}/issue/${props.selectedIssue.id}`);
    // the additional "via @make5calls" text that the via param introduces doesn't fit with issue titles, remove it
    additionalTwitterComps = '';
    // tslint:disable-next-line:max-line-length
    tweet = encodeURIComponent('I just called my rep to ' /*t("promote.iJustCalled", null, true)*/ + props.selectedIssue.name.substring(0, 72) + ' -- you should too:'/*t("promote.youShouldToo", null , true)*/);
    twitterTitle = 'Tweet this issue'/*t("promote.tweetThisIssue", null , true)*/;
    facebookTitle = 'Share this issue'/*t("promote.shareThisIssue", null , true)*/;
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
          <i className="fa fa-twitter" aria-hidden="true"/> {twitterTitle}
        </a>
        <a target="_blank" onClick={(e) => facebookShare(e)}>
          <i className="fa fa-facebook" aria-hidden="true"/> {facebookTitle}
        </a>
      </p>
    </div>
  );
};

export default Promotion;
