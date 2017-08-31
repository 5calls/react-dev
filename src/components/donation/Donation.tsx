import * as React from 'react';

interface Props {
  total: number;
  goal: number;
}

export const Donation: React.StatelessComponent<Props> = (props: Props) => {
  const width = (props.total / props.goal) * 100;
  const style = {width: `${width}%`};
  return (
    <div className="logo__header__inner layout">
      <div className="logo__header__donatebar">
        <div
          style={style}
          className="logo__header__donatebar__total"
        >
            {props.total}
        </div>
        <span className="logo__header__donatebar__goal">{props.goal}</span>
        <p className="logo__header__donatetext">
          <a href="https://secure.actblue.com/donate/5calls-donate">Donate today to keep 5 Calls running</a>
        </p>
      </div>
    </div>
  );
};
