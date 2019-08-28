import React from 'react';
import ReactDOM from 'react-dom';
import App from '../../client/app.jsx';
import renderer from 'react-test-renderer';
import Enzyme from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import {shallow} from 'enzyme'
Enzyme.configure({ adapter: new Adapter() });

describe('app', ()=>{
  it('renders without crashing', () => {
    const wrapper = shallow(<App/>)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})