import React from 'react';
import './App.css';
import Iframe from 'react-iframe';
import world from './world.svg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          GroupHub
        </h1>
        <img src={world} className="World-logo" alt="world"/>
        <h3> The ultimate hub to finding your next community <span role="img" aria-label="world emoji">🌐</span></h3>
        <p> We are devoted to connecting students to different interest groups and we hope that you are able to find your community here!
        Feel free to add your group by clicking below </p>
        <button><a href = "https://airtable.com/shrDDDGmh2uab4oTZ">Add Group</a> </button>
        <button> <a href = "">Join Our Slack Channel</a></button>
        <Iframe url="https://airtable.com/embed/shrBJGllgw0q87iSC?backgroundColor=blue&viewControls=on" width="80%" height="500px"/>
      </header>
      <footer className="App-footer">
        <p> Made by Anushka and Monika </p>
//<a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">hello</a>
      </footer>
    </div>
  );
}


export default App;
