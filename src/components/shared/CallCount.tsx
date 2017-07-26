import * as React from 'react';
import { TranslationFunction } from 'i18next';
import { translate } from 'react-i18next';

export interface Props {
  readonly totalCount: number;
  readonly t: TranslationFunction;
}

export const CallCount: React.StatelessComponent<Props> = (props: Props) => {
  return (
    <h2 className="callcount">
      {props.t('callCount.callCountPhrase', {
        formattedCallsTotal: callCount(props.totalCount),
        totalCalls: callCountAsNumber(props.totalCount)
      })}
    </h2>
  );
};

function callCount(totalCalls: number) {
  const calls = callCountAsNumber(totalCalls);
  return calls.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function callCountAsNumber(totalCalls: number) {
  // let calls = Number(totalCalls);
  // Handle undefined input.
  // Number(undefined) is NaN, while Number("") is 0
  return isNaN(totalCalls) ? 0 : totalCalls;
}

export default translate()(CallCount);
