import * as React from 'react';
import { formatNumber } from '../shared/utils';

interface Props {
  total: number;
  goal: number;
}

interface State {}

export class Donation extends React.Component<Props, State> {
  render () {
    // if goal is zero, percent = 100 to avoid divide by zero error
    const pctDone = this.props.goal && this.props.goal !== 0 ? (this.props.total / this.props.goal) * 100 : 100;
    const pctDoneStyle = {width: `${pctDone}%`};
    if (this.props.goal !== 0 && this.props.total !== 0) {
      return (
        <div className="logo__header__inner layout">
          <div className="logo__header__donatebar">
            <span style={pctDoneStyle} className="logo__header__donatebar__total">
                {`\$${formatNumber(this.props.total)}`}
            </span>
            <span className="logo__header__donatebar__goal">{`\$${formatNumber(this.props.goal)}`}</span>
          </div>
          <p className="logo__header__donatetext">
            <a href="https://secure.actblue.com/donate/5calls-donate">Donate today to keep 5 Calls running</a>
          </p>
        </div>);
    } else {
      return <span/>;
    }
  }
}
