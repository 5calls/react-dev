import * as React from 'react';
/*
    "callCount": {
      "callCountPhrase": "Together we’ve made {{formattedCallsTotal}} $t(common.call,{'count': {{totalCalls}}})"
    },
*/
export interface Props {
  totalCount: number;
}

export const CallCount: React.StatelessComponent<Props> = (props: Props) => {
    return (
      <h2 className="callcount">
        {`Together we’ve made ${callCount(props.totalCount)} calls`}
        {/*t("callCount.callCountPhrase",
          {formattedCallsTotal: callCount(state),
          totalCalls: callCountAsNumber(state)})*/}
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

export default CallCount;
