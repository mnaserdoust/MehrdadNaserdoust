import React from 'react';
import './App.css';
import Home from './Components/Home'

function App() {
  return (
    <div className="App .m-dark-green">
      <div className="container">
        <div className="row justify-content-center h-100">
          <div className="col-sm-1 h-100">
            <div className="sticky-bottom">
              
            </div>
          </div>
          <div className="col-sm-10">
          <Home></Home>
          <div className="fixed-bottom m-light-yellow">...</div>
          </div>
          <div className="col-sm-1"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
