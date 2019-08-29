import React from 'react';
import Search from '../../client/components/Search.jsx';
import renderer from 'react-test-renderer';
import ReactDOM from 'react-dom';
import Enzyme from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import {shallow} from 'enzyme';
import {mount} from 'enzyme';
Enzyme.configure({ adapter: new Adapter() });

describe('Search', ()=>{


  it('renders without crashing', () => {
    const props = {
      searchValue:"hello"
    }

    const wrapper = shallow(<Search {...props}/>)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('should run changeHandler with changed text in search box', () => {
    let result = null;
    const props = {
      changeSearchValue:()=>{result="hit"}
    }
    const component = mount(<Search {...props}/>);
    component
      .find('#search_text')
      .simulate('change');

    expect(result).toEqual("hit");
    component.unmount();
  });

  it('should run submitHandler with submitting a search text in search box', () => {
    let result = null;
    const props = {
      submitSearchValue:()=>{result="hit"}
    }
    const component = mount(<Search {...props}/>);
    component
      .find('form')
      .simulate('submit');

    expect(result).toEqual("hit");
    component.unmount();
  });
})