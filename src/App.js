import React from 'react';
import logo from './logo.svg';
import './App.css';
import Iframe from 'react-iframe';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          GroupHub
        </h1>
        <p> The ultimate hub to finding your next community 🌐 </p>
        <Iframe url="https://airtable.com/embed/shrBJGllgw0q87iSC?backgroundColor=blue&viewControls=on" width="80%" height="500px"/>
      </header>
    </div>



  );
}


export default App;
