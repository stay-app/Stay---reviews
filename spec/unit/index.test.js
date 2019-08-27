import React from 'react';
import ReactDOM from 'react-dom';
import Review from '../client/components/Review.jsx'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

// Enzyme.configure({adapter:new Adapter()});

it ('renders without cash', ( => {
  const div = document.createElement('dv');
  ReactDOM.render(<Review/>. div);
  ReactDOM.unmountComponentAtNode(div)
})

  describe('Addition', () => {
    it('knows that 2 and 2 make 4', () => {
      expect(2 + 2).toBe(4);
    });
  });

)


