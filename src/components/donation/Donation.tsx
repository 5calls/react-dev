import * as React from 'react';
import { formatNumber } from '../shared/utils';

interface Props {
  total: number;
  goal: number;
}

export const Donation: React.StatelessComponent<Props> = (props: Props) => {
  const pctDone = (props.total / props.goal) * 100;
  const pctDoneStyle = {width: `${pctDone}%`};
  return (
    <div className="logo__header__inner layout">
      <div className="logo__header__donatebar">
        <span style={pctDoneStyle} className="logo__header__donatebar__total">
            {`\$${formatNumber(props.total)}`}
        </span>
        <span className="logo__header__donatebar__goal">{`\$${formatNumber(props.goal)}`}</span>
      </div>
        <p className="logo__header__donatetext">
          <a href="https://secure.actblue.com/donate/5calls-donate">Donate today to keep 5 Calls running</a>
        </p>
    </div>
  );
};
