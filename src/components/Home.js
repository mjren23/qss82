import React from 'react';
import NavHeader from './NavHeader';

function Home() {
  return(
    <div className="Home">
      <NavHeader></NavHeader>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
    </div>
  );
}

export default Home;