import React from 'react';
import Navbar from './Navbar';

const Home = () => {
  return (
    <div id="inner-container">
      <Navbar />
      <div id="main-content">
        <div className="item">
          <p>1</p>
        </div>
        <div className="item">
          <p>2</p>
        </div>
        <div className="item">
          <p>3</p>
        </div>
        <div className="item">
          <p>4</p>
        </div>
        <div className="item">
          <p>5</p>
        </div>
        <div className="item">
          <p>6</p>
        </div>
        <div className="item">
          <p>7</p>
        </div>
        <div className="item">
          <p>8</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
