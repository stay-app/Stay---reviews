import React from 'react';
import ReadMore from '../../client/components/ReadMore.jsx';
import renderer from 'react-test-renderer';
import ReactDOM from 'react-dom';
import Enzyme from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import {shallow} from 'enzyme';
import {mount} from 'enzyme';
Enzyme.configure({ adapter: new Adapter() });

describe('Search', ()=>{

  it('renders without crashing when expand is true', () => {
    const props = {
      expand:true,
      comments:"erw qertr fshfs era fsgfdhf gfg eyrrw qetewr dg jkl eqt jkl yu jk fghjk kl; hjk hnjmk, ghj hjk hjk hjk wer sdfg ikjhb gfc hgvc iujh red ygfv okj plkm tgv ed yhjkl sdfghj asdfghj werty asdfg fghj fghjk uio tyuik "
    }

    const wrapper = shallow(<ReadMore {...props}/>)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('renders without crashing when expand is false', () => {
    const props = {
      expand:false,
      comments:"erw qertr fshfs era fsgfdhf gfg eyrrw"
    }

    const wrapper = shallow(<ReadMore {...props}/>)
    expect(toJson(wrapper)).toMatchSnapshot()
  })


  it('should run expandHandler with clicking on Read more', () => {
    let result = null;
    const props = {
      expand:true,
      comments:"erw qertr fshfs era fsgfdhf gfg eyrrw qetewr dg jkl eqt jkl yu jk fghjk kl ",
      expandHandler:()=>{ this.setState({expand:false})}
    }
    const component = mount(<ReadMore {...props}/>);
    component
      .find('#read_more_button')
      .simulate('click');

    expect(component.find('#read_more_false').length).toEqual(1);
    component.unmount();
  });
})