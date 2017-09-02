import * as React from 'react';
import { shallow } from 'enzyme';
import i18n from '../../services/i18n';
import { MyImpact } from './index';
import { UserStatsState } from '../../redux/userStats';

test('MyImpact component snapshot renders correctly', () => {
  const userStats: UserStatsState = {
    all: [],
    voicemail: 0,
    unavailable: 0,
    contact: 0,
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
