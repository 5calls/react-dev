import * as React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { TranslationFunction } from 'i18next';
import { translate } from 'react-i18next';
import { OutcomeData } from '../../redux/callState';
import { Issue } from '../../common/model';

interface Props {
  readonly currentIssue: Issue;
  readonly currentContactId: string;
  readonly numberContactsLeft: number;
  readonly t: TranslationFunction;
  readonly onSubmitOutcome: (data: OutcomeData) => void;
}
interface State { }

// tslint:disable-next-line:no-any
class Outcomes extends React.Component<Props & RouteComponentProps<any>, State>  {

  dispatchOutcome(e: React.MouseEvent<HTMLButtonElement>, outcome: string) {
    /* e.target.blur() called in Choo version
      for details on use of currentTarget see:
      https://github.com/DefinitelyTyped/DefinitelyTyped/pull/12239
    */
    e.currentTarget.blur();

    this.props.onSubmitOutcome(
      {
        outcome,
        numberContactsLeft: this.props.numberContactsLeft,
        issueId: this.props.currentIssue.id,
        contactId: this.props.currentContactId,
      }
    );

    // navigate to /done when finished
    if (this.props.numberContactsLeft === 0 && this.props.history) {
      this.props.history.push(`/done/${this.props.currentIssue.id}`);
    }

    window.scroll(1, 1);
    return true;
  }

  render() {
    return (
      <div className="call__outcomes">
        <h3 className="call__outcomes__header">
          {this.props.t('outcomes.enterYourCallResult')}
        </h3>
        <div className="call__outcomes__items">
          {this.props.currentIssue.outcomeModels.map(outcome => 
            <button onClick={(e) => this.dispatchOutcome(e, outcome.label)}>
              {this.props.t('outcomes.' + outcome.label)}
            </button>
          )}
        </div>
      </div>
    );
  }
}

export default translate()(withRouter(Outcomes));
