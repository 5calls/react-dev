import * as React from 'react';
import { shallow } from 'enzyme';
import { I18nextProvider } from 'react-i18next';
import i18n from '../../services/i18n';
import { NoContactSplitDistrict } from './';

test('NoContactSplitDistrict component snapshot renders correctly when splitDistrict=true', () => {
  const mockClearLocation = jest.fn();
  const component = shallow(
    <I18nextProvider i18n={i18n}>
      <NoContactSplitDistrict
        splitDistrict={false}
        clearLocation={mockClearLocation}
        t={i18n.t}
      />
    </I18nextProvider>
  );
  expect(component).toMatchSnapshot();
});
