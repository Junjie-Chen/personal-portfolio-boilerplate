import React from 'react';
import Sidebar from './Sidebar';

const Main = props => {
  const { children } = props;

  return (
    <div id="outer-container">
      <Sidebar />
      {children}
    </div>
  );
}

export default Main;
