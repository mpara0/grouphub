import React from 'react';
import './App.css';
import Iframe from 'react-iframe';
import world from './world.svg';

function App() {
  return (
    <div className="App">
      <link href='https://fonts.googleapis.com/css?family=Amiko' rel='stylesheet'></link>
      <header>
        <h1>
          GroupHub
        </h1>
      </header>
      <div className="App-body">
        <div id="main" className="description">
          <div className="first-block">
            <h2> The ultimate hub to finding your next community <span role="img" aria-label="world emoji">🌐</span></h2>
            <h3 className="description-p"> We are devoted to connecting students to different interest groups, and we hope that you are able to find your community here. </h3>
            <div>
              <button class="button"><a href = "https://airtable.com/shrDDDGmh2uab4oTZ" target="_blank" rel="noopener noreferrer">Add Your Community</a> </button>
              <button class="button"> <a href = "https://airtable.com/shrJJaJHFP3bctc4m" target="_blank" rel="noopener noreferrer">Join Our Slack Channel</a></button>
            </div>
          </div>
          <div className="first-block"><img src={world} className="World-logo" alt="world"/></div>
        </div>
        <br></br>
        <div className="airtable">
          <Iframe url="https://airtable.com/embed/shrBJGllgw0q87iSC?backgroundColor=blue&viewControls=on" width="100%" height="600px"/>
        </div>
        <br></br>
      </div>
      <footer>
        <p className="footer-p">Made by Anushka and Monika</p>
      </footer>
    </div>
  );
}


export default App;
