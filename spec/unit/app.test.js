import React from 'react';
import ReactDOM from 'react-dom';
import App from '../../client/app.jsx';
import renderer from 'react-test-renderer';
import Enzyme from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import {shallow,mount} from 'enzyme'
Enzyme.configure({ adapter: new Adapter() });

describe('app rendering', ()=>{
  it('renders without crashing', () => {
    const wrapper = shallow(<App/>)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})

describe('app function invokation', () => {

  it('submitSearchValue changes the state values properly when the function is invoked', () => {
    const wrapper = shallow(<App/>);
    wrapper.setState({
      searchStatus:false,
      searchCount:20,
      searchedList:[],
      searchValue:"hello",
      reviewList:[{comments:'hello'}, {comments:'HELLO'}],
      lastPage:10,
      count:50,
      currentPage:5
    });

    wrapper.instance().submitSearchValue();

    expect(wrapper.state('lastPage')).toEqual(1);
    expect(wrapper.state('searchCount')).toEqual(2);
    expect(wrapper.state('searchedList').length).toEqual(2);
    expect(wrapper.state('searchStatus')).toEqual(true);
    expect(wrapper.state('currentPage')).toEqual(1)
  });

  it('clearSearchValue changes the state values properly when the function is invoked', () => {
    const wrapper = shallow(<App/>);
    wrapper.setState({
      searchStatus:true,
      searchCount:20,
      searchedList:[],
      searchValue:"hello",
      reviewList:[{comments:'hello'}, {comments:'HELLO'}],
      lastPage:10,
      count:49,
      currentPage:5
    });

    wrapper.instance().clearSearchValue();

    expect(wrapper.state('lastPage')).toEqual(7);
    expect(wrapper.state('searchCount')).toEqual(0);
    expect(wrapper.state('searchedList').length).toEqual(0);
    expect(wrapper.state('searchStatus')).toEqual(false);
    expect(wrapper.state('currentPage')).toEqual(1);
    expect(wrapper.state('searchValue').length).toEqual(0)
  });

  it('changeSearchValue changes the state values properly when the function is invoked', () => {
    const wrapper = shallow(<App/>);
    wrapper.instance().changeSearchValue("hi");

    expect(wrapper.state('searchValue')).toEqual('hi')
  });

  it('renderCurrentPage changes the state values properly with search status is true when the function is invoked', () => {
    const wrapper = shallow(<App/>);
    wrapper.setState({
      searchStatus:true,
      searchCount:3,
      searchedList:[{comments:'hi'}, {comments:'HI'},{comments:'HII'}],
      reviewList:[{comments:'hello'}, {comments:'HELLO'},{comments:'HELLO1'},{comments:'HELLO2'}],
      count:4,
      currentList:[]
    });
    wrapper.instance().renderCurrentPage(1);

    expect(wrapper.state('currentList').length).toEqual(3)
  });

  it('renderCurrentPage changes the state values properly with search status is false when the function is invoked', () => {
    const wrapper = shallow(<App/>);
    wrapper.setState({
      searchStatus:false,
      searchCount:3,
      searchedList:[{comments:'hi'}, {comments:'HI'},{comments:'HII'}],
      reviewList:[{comments:'hello'}, {comments:'HELLO'},{comments:'HELLO1'},{comments:'HELLO2'}],
      count:4,
      currentList:[]
    });
    wrapper.instance().renderCurrentPage(1);

    expect(wrapper.state('currentList').length).toEqual(4)
  });

})

