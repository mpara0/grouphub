import React from 'react';
import './App.css';
import Iframe from 'react-iframe';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          GroupHub
        </h1>
        <p> The ultimate hub to finding your next community</p>
        <Iframe url="https://airtable.com/embed/shrBJGllgw0q87iSC?backgroundColor=blue&viewControls=on" width="80%" height="500px"/>
      </header>
      <footer className="App-footer">
        <p><a href="https://www.google.com/" target="_blank">hello</a></p>
      </footer>
    </div>
  );
}


export default App;
