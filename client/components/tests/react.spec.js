import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';
import { expect } from 'chai';
import configureMockStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';

import WrappedSidebar from '../Sidebar';

Enzyme.configure({ adapter: new Adapter() });

const mockStore = configureMockStore([thunkMiddleware]);
const initialState = {
  sidebar: false
};

describe('Components', () => {
  let store;

  describe('<Sidebar />', () => {
    let UnwrappedSidebar = WrappedSidebar.WrappedComponent, wrappedSidebar, unwrappedSidebar, buttonClick = sinon.spy();

    beforeEach('creates store and ShallowWrapper', () => {
      store = mockStore(initialState);
      wrappedSidebar = shallow(<WrappedSidebar />, {context: {store}}).dive();
      unwrappedSidebar = shallow(<UnwrappedSidebar sidebar={false} dropdown={false} handleClick={buttonClick} />, {context: {store}});
    });

    it('renders a `#sidebar`', () => {
      expect(unwrappedSidebar.find('#sidebar')).to.have.length(1);
    });

    it('has three props `sidebar`, `dropdown`, `handleClick`', () => {
      expect(unwrappedSidebar.props().sidebar).to.be.equal(true);
      expect(unwrappedSidebar.instance().props.dropdown).to.be.equal(true);
      expect(typeof unwrappedSidebar.instance().props.handleClick).to.be.equal('function');
    });

    it('simulates click events', () => {
      expect(buttonClick.notCalled).to.be.equal(true);
      unwrappedSidebar.find('#clickedElement').simulate('click');
      expect(buttonClick.calledOnce).to.be.equal(true);
    });
  });
});
