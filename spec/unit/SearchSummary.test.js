import React from 'react';
import SearchSummary from '../../client/components/SearchSummary.jsx';
import renderer from 'react-test-renderer';
import ReactDOM from 'react-dom';
import Enzyme from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import {shallow} from 'enzyme';
import {mount} from 'enzyme';
Enzyme.configure({ adapter: new Adapter() });

describe('SearchSummary', ()=>{
  it('renders without crashing when there is a search result', () => {
    const props = {
      searchCount:5,
      searchValue:"hello"
    }

    const wrapper = shallow(<SearchSummary {...props}/>)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('renders without crashing when there is no search result', () => {
    const props = {
      searchCount:0,
      searchValue:"hello"
    }

    const wrapper = shallow(<SearchSummary {...props}/>)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('should run backToAllHandler with backToAll click', () => {
    let result = null;
    const props = {
      clearSearchValue:()=>{result="hit"}
    }
    const component = mount(<SearchSummary {...props}/>);
    component
      .find('#back_to_all')
      .simulate('click',);

    expect(result).toEqual("hit");
    component.unmount();
  });
})