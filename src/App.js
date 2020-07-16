import React from 'react';
import './App.css';
import Iframe from 'react-iframe';
import world from './world.svg';

function App() {
  return (
    <div className="App">
      <link href='https://fonts.googleapis.com/css?family=Amiko' rel='stylesheet'></link>
      <header className="App-header">
        <h1>
          GroupHub
        </h1>
        <div>
          <div className="first-block">
            <h3> The ultimate hub to finding your next community <span role="img" aria-label="world emoji">🌐</span></h3>
            <p className="description-p"> We are devoted to connecting students to different interest groups and we hope that you are able to find your community here!
            Feel free to add your group by clicking below </p>
          </div>
          <div className="second-block"><img src={world} className="World-logo" alt="world"/></div>
        </div>
        <div>
          <button><a href = "https://airtable.com/shrDDDGmh2uab4oTZ" target="_blank" rel="noopener noreferrer">Add Group</a> </button>
          <button> <a href = "https://airtable.com/shrDDDGmh2uab4oTZ" target="_blank" rel="noopener noreferrer">Join Our Slack Channel</a></button>
        </div>
        <Iframe url="https://airtable.com/embed/shrBJGllgw0q87iSC?backgroundColor=blue&viewControls=on" width="80%" height="600px"/>
      </header>
      <footer className="App-footer">
        <p className="footer-p">Made by Anushka and Monika</p>
      </footer>
    </div>
  );
}


export default App;
