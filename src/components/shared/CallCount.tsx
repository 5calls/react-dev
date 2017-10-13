import * as React from 'react';
import { TranslationFunction } from 'i18next';
import { translate } from 'react-i18next';
import { formatNumber } from '../shared/utils';

export interface Props {
  readonly totalCount: number;
  readonly large: boolean;
  readonly t: TranslationFunction;
}

export const CallCount: React.StatelessComponent<Props> = (props: Props) => {
  const pctDone = (props.totalCount / 2000000) * 100;
  const pctStyle = {width: `${pctDone}%`};    

  const className = props.large ? ' progress__large' : '';

  return (
    <div>
      <div className={`progress${className}`}>
        <p className="totaltext">Together we've made {formatNumber(props.totalCount)} Calls!</p>
        <span className="progress__border">&nbsp;</span>
        <span className="progress__goal">{formatNumber(2000000)}</span>
        <span style={pctStyle} className="progress__total"></span>
      </div>
    </div>
  );
};

export default translate()(CallCount);
