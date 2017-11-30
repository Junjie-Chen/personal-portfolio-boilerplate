import React from 'react';
import { createStore } from 'redux';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';
import { expect } from 'chai';
// import configureMockStore from 'redux-mock-store';
// import thunkMiddleware from 'redux-thunk';

import WrappedSidebar from '../Sidebar';
import { reducer, middleware, toggleDropdown } from '../../store';

Enzyme.configure({ adapter: new Adapter() });

// const mockStore = configureMockStore([thunkMiddleware]);
// const initialState = {
//   dropdown: false
// };

describe('<Sidebar />', () => {
  let store, UnwrappedSidebar = WrappedSidebar.WrappedComponent, unwrappedSidebar, buttonClick = sinon.spy();

  beforeEach('creates store and ShallowWrapper', () => {
    // store = mockStore(initialState);
    store = createStore(reducer, middleware);
    unwrappedSidebar = shallow(<UnwrappedSidebar sidebar={true} dropdown={true} handleClick={buttonClick} />, {context: {store}});
  });

  it('has initial state set to false', () => {
    expect(store.getState().sidebar).to.be.equal(false);
    expect(store.getState().dropdown).to.be.equal(false);
  });

  it('renders a `#sidebar`', () => {
    expect(unwrappedSidebar.find('#sidebar')).to.have.length(1);
  });

  it('called handleClick when `#clickedElement` is clicked', () => {
    expect(buttonClick.calledOnce).to.be.equal(false);
    unwrappedSidebar.find('#clickedElement').simulate('click');
    expect(buttonClick.calledOnce).to.be.equal(true);
  });

  it('renders `.dropdown` after props dropdown is true', () => {
    expect(unwrappedSidebar.find('.dropdown').exists()).to.be.equal(true);
  });

  it('has class `sidebar-active` after props sidebar is true', () => {
    expect(unwrappedSidebar.find('#sidebar').hasClass('sidebar-active')).to.be.equal(true);
  });

  it('should create a toggleDropdown action', () => {
    const TOGGLE_DROPDOWN = 'TOGGLE_DROPDOWN';
    const expectedAction = {
      type: TOGGLE_DROPDOWN
    };

    expect(toggleDropdown().type).to.be.equal(expectedAction.type);
  });

  it('sets dropdown to true after dispatch', () => {
    store.dispatch(toggleDropdown());

    const newState = store.getState();

    expect(newState.dropdown).to.be.equal(true);
  });
});
