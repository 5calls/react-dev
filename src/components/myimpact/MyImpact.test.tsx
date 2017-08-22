import * as React from 'react';
import { shallow } from 'enzyme';
import i18n from '../../services/i18n';
import { MyImpact } from './index';
import { UserStatsState } from '../../redux/userStats';

test('Done component snapshot renders correctly', () => {
  const userStats: UserStatsState = {
    all: [],
    voice_mail: 0,
    unavailable: 0,
    made_contact: 0,
    yes: 0,
  };
  const count = 1000;
  const component = shallow(
    <MyImpact
      userStats={userStats}
      totalCount={count}
      t={i18n.t}
    />
  );
  expect(component).toMatchSnapshot();
});
