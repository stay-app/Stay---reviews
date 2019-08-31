import React from 'react';
import Review from '../../client/components/Review.jsx';
import ReadMore from '../../client/components/ReadMore.jsx';
import renderer from 'react-test-renderer';
import ReactDOM from 'react-dom';
import Enzyme from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import {shallow} from 'enzyme'
Enzyme.configure({ adapter: new Adapter() });

describe('Review', ()=>{
  it('renders without crashing', () => {
    const props = {
      data:{
        profile:'https://s3.amazonaws.com/uifaces/faces/twitter/maxlinderman/128.jpg',
        name:"jinjing",
        review_data:"3/14/19",
        comments:"it is good"
      },
      searchStatus:false
    }

    const wrapper = shallow(<Review {...props}/>)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})



describe('Review_ReadMore', () => {
  it('Render ReadMore component when comments has over 30 words',() => {
    const props={
      data:{
        profile:'https://s3.amazonaws.com/uifaces/faces/twitter/maxlinderman/128.jpg',
        name:"jinjing",
        review_data:"3/14/19",
        comments:"Necessitatibus dolorem eius nemo odit aut quisquam natus. Quam ullam vitae fugit amet. Aut sequi repudiandae voluptas. Ducimus velit sequi iusto nemo ad accusantium et molestias. Atque quibusdam iste doloremque ea. In sint sed voluptatem unde fghj rdftyg drtf ghj ftyg hjk rytu"
      },
      searchStatus:false
    }

    const wrapper = shallow(<Review {...props}/>);
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})






