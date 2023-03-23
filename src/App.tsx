import React from 'react';

import './App.css';
import Header from './header';
import Footer from './footer';
import TeamList from './teamFiles/TeamList'


function App() {
  return (
    <div className="App">
      <Header></Header>
      <body>
        <TeamList></TeamList>
      </body>
      <Footer></Footer>


    </div>
  );
}

export default App;
