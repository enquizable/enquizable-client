import React from 'react';
import { shallow } from 'enzyme';
import App from '../client/src/components/App';

describe('App component', () => {
  it('renders', () => {
    const result = shallow(<App />);
    expect(result).toBeTruthy();
  });
});
