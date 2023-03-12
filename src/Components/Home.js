import React from 'react';
import './home.css';

function Home() {
    return (
      <div>
        <div className='m-header-first-line d-flex m-light-yellow'>
            {`Hi, I'm`}
        </div>
        <h1 className='m-header-full-name d-flex m-orange'>
            {'Mehrdad,'}
        </h1>
        <div className='m-header-first-line d-flex m-light-yellow'>
            {'a full stack web developer'}.
        </div>
        
      </div>
    );
  }
  
  export default Home;