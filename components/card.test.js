import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Card from './card';

Enzyme.configure({ adapter: new Adapter() });

describe('<Counter>', () => {
  const cardComponent = shallow(
    <Card
      id={0}
      name="test"
      information="test"
      description="jason"
      handleSelected=""
      selected={0}
    />
  );
  /*
  */
  test('should render ', () => {
    expect(cardComponent.find('.card').length).toBe(1);
  });
});
