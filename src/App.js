import React from 'react';
import './App.css';
import Home from './Components/Home'

function App() {
  return (
    <div className="App m-dark-green">
      <div className="container  vh-100">
        <div className="row vh-100">
          <div className="col-sm-1">
          </div>
          <div className="col-sm-10 align-self-md-center">
          <Home></Home>
          </div>
          <div className="col-sm-1"></div>
        </div>
      </div>
      <div className="fixed-bottom m-light-yellow">
            <h6 className="">
              <span className="m-light-yellow">Get in touch </span>
              <span className="emoji pointer"></span>
              <span >
                <a href="mailto:brittany.chiang@gmail.com" target="_blank" className="m-orange" rel="noreferrer">mehrdad.naser@gmail.com</a>
              </span> 
            </h6>
          </div>
    </div>
  );
}

export default App;
