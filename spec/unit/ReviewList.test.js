import React from 'react';
import Review from '../../client/components/Review.jsx';
import Page from '../../client/components/Page.jsx';
import ReviewList from '../../client/components/ReviewList.jsx';
import renderer from 'react-test-renderer';
import ReactDOM from 'react-dom';
import Enzyme from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import {shallow} from 'enzyme'
Enzyme.configure({ adapter: new Adapter() });

describe('ReviewList', ()=>{
  it('renders without crashing when only one page', () => {
    const props = {
      reviewList:[
        {
          profile:'https://s3.amazonaws.com/uifaces/faces/twitter/maxlinderman/128.jpg',
          name:"jinjing",
          review_data:"3/14/19",
          comments:"it is good"
        },
        {
          profile:'https://s3.amazonaws.com/uifaces/faces/twitter/maxlinderman/129.jpg',
          name:"derek",
          review_data:"3/20/19",
          comments:"great"
        }
      ],
      searchStatus:false,
      currentPage:1,
      lastPage:1,
      renderCurrentPage:() => {},
      changeCurrentPage:() => {}
    }

    const wrapper = shallow(<ReviewList {...props}/>)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('renders without crashing when more than one page', () => {
    const props = {
      reviewList:[
        {
          profile:'https://s3.amazonaws.com/uifaces/faces/twitter/maxlinderman/128.jpg',
          name:"jinjing",
          review_data:"3/14/19",
          comments:"it is good"
        },
        {
          profile:'https://s3.amazonaws.com/uifaces/faces/twitter/maxlinderman/129.jpg',
          name:"derek",
          review_data:"3/20/19",
          comments:"great"
        }
      ],
      searchStatus:false,
      currentPage:1,
      lastPage:2,
      renderCurrentPage:() => {},
      changeCurrentPage:() => {}
    }

    const wrapper = shallow(<ReviewList {...props}/>)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})