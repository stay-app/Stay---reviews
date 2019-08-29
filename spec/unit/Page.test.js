import React from 'react';
import Page from '../../client/components/Page.jsx';
import renderer from 'react-test-renderer';
import ReactDOM from 'react-dom';
import Enzyme from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import {configure} from 'enzyme';
import {shallow, mount, render} from 'enzyme';

configure({ adapter: new Adapter() });

describe('Page', ()=>{

  it('renders without crashing', () => {
    const props = {
      currentPage:3,
      lastPage:10,
    }

    const wrapper = shallow(<Page {...props}/>)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('page inputs are renderred properly when current page is 1 ', () => {

    const props = {
      currentPage:1,
      lastPage:10,
    }

    const component = mount(<Page {...props}/>)
    expect(component.find('#left').length).toEqual(0);
    expect(component.find('#right').length).toEqual(1);
    expect(component.find('.pg').length).toEqual(4);

    component.unmount();

  })

  it('page inputs are renderred properly when current page is 2 ', () => {
    const props = {
      currentPage:2,
      lastPage:10,
    }

    const component = mount(<Page {...props}/>)
    expect(component.find('#left').length).toEqual(1);
    expect(component.find('#right').length).toEqual(1);
    expect(component.find('.pg').length).toEqual(4);

    component.unmount();

  })

  it('page inputs are renderred properly when current page is 3 ', () => {
    const props = {
      currentPage:3,
      lastPage:10,
    }

    const component = mount(<Page {...props}/>)
    expect(component.find('#left').length).toEqual(1);
    expect(component.find('#right').length).toEqual(1);
    expect(component.find('.pg').length).toEqual(5);

    component.unmount();

  })

  it('page inputs are renderred properly when current page is 4 ', () => {
    const props = {
      currentPage:4,
      lastPage:10,
    }

    const component = mount(<Page {...props}/>)
    expect(component.find('#left').length).toEqual(1);
    expect(component.find('#right').length).toEqual(1);
    expect(component.find('.pg').length).toEqual(6);

    component.unmount();

  })

  it('page inputs are renderred properly when current page is in the middle ', () => {
    const props = {
      currentPage:5,
      lastPage:10,
    }

    const component = mount(<Page {...props}/>)
    expect(component.find('#left').length).toEqual(1);
    expect(component.find('#right').length).toEqual(1);
    expect(component.find('.pg').length).toEqual(5);

    component.unmount();

  })

  it('page inputs are renderred properly when current page is last page ', () => {
    const props = {
      currentPage:10,
      lastPage:10,
    }

    const component = mount(<Page {...props}/>)
    expect(component.find('#left').length).toEqual(1);
    expect(component.find('#right').length).toEqual(0);
    expect(component.find('.pg').length).toEqual(4);

    component.unmount();

  })

  it('page inputs are renderred properly when current page is second last page ', () => {
    const props = {
      currentPage:9,
      lastPage:10,
    }

    const component = mount(<Page {...props}/>)
    expect(component.find('#left').length).toEqual(1);
    expect(component.find('#right').length).toEqual(1);
    expect(component.find('.pg').length).toEqual(4);

    component.unmount();

  })

  it('page inputs are renderred properly when current page is third last page ', () => {
    const props = {
      currentPage:8,
      lastPage:10,
    }

    const component = mount(<Page {...props}/>)
    expect(component.find('#left').length).toEqual(1);
    expect(component.find('#right').length).toEqual(1);
    expect(component.find('.pg').length).toEqual(5);

    component.unmount();

  })

  it('page inputs are renderred properly when current page is forth last page ', () => {
    const props = {
      currentPage:7,
      lastPage:10,
    }

    const component = mount(<Page {...props}/>)
    expect(component.find('#left').length).toEqual(1);
    expect(component.find('#right').length).toEqual(1);
    expect(component.find('.pg').length).toEqual(6);

    component.unmount();

  })

  it('page inputs are renderred properly when pages are less than 5 ', () => {
    const props = {
      currentPage:2,
      lastPage:4,
    }

    const component = mount(<Page {...props}/>)
    expect(component.find('#left').length).toEqual(1);
    expect(component.find('#right').length).toEqual(1);
    expect(component.find('.pg').length).toEqual(4);

    component.unmount();

  })

  it('changeCurrentPage and renderCurrentPage are invoked when right button is clicked', () => {
    let current = true;
    let render = true
    const props = {
      currentPage:3,
      lastPage:10,
      changeCurrentPage:() => {current = false},
      renderCurrentPage:() => {render = false}
    }

    const component = mount(<Page {...props}/>)
    component
      .find('#right')
      .simulate('click')

    expect(current).toEqual(false);
    expect(render).toEqual(false);

    component.unmount();

  })

  it('changeCurrentPage and renderCurrentPage are invoked when left button is clicked', () => {
    let current = true;
    let render = true
    const props = {
      currentPage:3,
      lastPage:10,
      changeCurrentPage:() => {current = false},
      renderCurrentPage:() => {render = false}
    }

    const component = mount(<Page {...props}/>)
    component
      .find('#left')
      .simulate('click')

    expect(current).toEqual(false);
    expect(render).toEqual(false);

    component.unmount();
  })

  it('changeCurrentPage and renderCurrentPage are invoked when page number button is clicked', () => {
    let current = true;
    let render = true
    const props = {
      currentPage:3,
      lastPage:10,
      changeCurrentPage:() => {current = false},
      renderCurrentPage:() => {render = false}
    }

    const component = mount(<Page {...props}/>)
    component
      .find('.pg')
      .first()
      .simulate('click')

    expect(current).toEqual(false);
    expect(render).toEqual(false);

    component.unmount();
  })
})