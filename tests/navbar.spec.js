import React from 'react';
import { createStore } from 'redux';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';
import { expect } from 'chai';

import WrappedNavbar from '../client/components/Navbar';
import { reducer, middleware, toggleSidebar, toggleNavbar } from '../client/store';

Enzyme.configure({ adapter: new Adapter() });

describe('<Navbar />', () => {
  let store, UnwrappedNavbar = WrappedNavbar.WrappedComponent, unwrappedNavbar, buttonClick = sinon.spy();

  beforeEach('creates store and ShallowWrapper', () => {
    store = createStore(reducer, middleware);
    unwrappedNavbar = shallow(<UnwrappedNavbar navbar={true} handleClickSidebar={buttonClick} handleClickNavbar={buttonClick} />, {context: {store}});
    buttonClick.reset();
  });

  it('has initial state set to false', () => {
    expect(store.getState().navbar).to.be.equal(false);
  });

  it('renders a `#navbar`', () => {
    expect(unwrappedNavbar.find('#navbar')).to.have.length(1);
  });

  it('calls handleClickSidebar when `button` is clicked', () => {
    expect(buttonClick.calledOnce).to.be.equal(false);
    unwrappedNavbar.find('button').simulate('click');
    expect(buttonClick.calledOnce).to.be.equal(true);
  });

  it('calls handleClickNavbar when `i` is clicked', () => {
    expect(buttonClick.calledOnce).to.be.equal(false);
    unwrappedNavbar.find('i').simulate('click');
    expect(buttonClick.calledOnce).to.be.equal(true);
  });

  it('has class `navbar-active` after props navbar is true', () => {
    expect(unwrappedNavbar.find('.navbar-header').hasClass('navbar-active')).to.be.equal(true);
    expect(unwrappedNavbar.find('.navbar-body').hasClass('navbar-active')).to.be.equal(true);
  });

  it('should create a toggleSidebar action', () => {
    const TOGGLE_SIDEBAR = 'TOGGLE_SIDEBAR';
    const expectedAction = {
      type: TOGGLE_SIDEBAR
    };

    expect(toggleSidebar().type).to.be.equal(expectedAction.type);
  });

  it('should create a toggleNavbar action', () => {
    const TOGGLE_NAVBAR = 'TOGGLE_NAVBAR';
    const expectedAction = {
      type: TOGGLE_NAVBAR
    };

    expect(toggleNavbar().type).to.be.equal(expectedAction.type);
  });

  it('sets navbar to true after dispatch', () => {
    store.dispatch(toggleNavbar());

    const newState = store.getState();

    expect(newState.navbar).to.be.equal(true);
  });
});
