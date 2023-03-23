import React from 'react';

import './App.css';

import TeamList from './teamFiles/TeamList'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to the NCAA basketball team tracker</h1>
        <h2>This is all for you sports fans</h2>
      </header>
      <body>
          <TeamList></TeamList>
      </body>
      <footer>
        <div className="Container">
          <p>© 2023 Jon Stauffer/Staufjon. All rights reserved.</p>
        </div>
      </footer>


    </div>
  );
}

export default App;
