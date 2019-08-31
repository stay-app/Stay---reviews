import React from 'react';
import ReactDOM from 'react-dom';
import Rating from '../../client/components/Rating.jsx';
import renderer from 'react-test-renderer';
import Enzyme from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import {shallow} from 'enzyme'
Enzyme.configure({ adapter: new Adapter() });

describe('Rating', ()=>{
  it('renders without crashing', () => {
    const props = {
      rating:{
        rating_accuracy:5,
        rating_communication:4.5,
        rating_cleanliness:4,
        rating_location:5,
        rating_checkin:4.5,
        rating_value:4
      }
    }
    const wrapper = shallow(<Rating {...props}/>)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})