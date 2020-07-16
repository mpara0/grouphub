import React from 'react';
import './App.css';
import Iframe from 'react-iframe';
import world from './world.svg';

function App() {
  return (
    <div className="App">
      <link href='https://fonts.googleapis.com/css?family=Amiko' rel='stylesheet'></link>
      <header>
        <h1>GroupHub</h1>
      </header>
      <div className="App-body">
        <div id="main" className="description">
          <div className="side-cols">
            <h2> The ultimate hub to finding your next community <span role="img" aria-label="world emoji">🌐</span></h2>
            <h3 className="description-p"> We are devoted to connecting students to different interest groups, and we hope that you are able to find your community here. </h3>
            <div>
              <a href = "https://airtable.com/shrDDDGmh2uab4oTZ" target="_blank" rel="noopener noreferrer"><button class="button">Add Your Community</button></a> 
              <a href = "https://airtable.com/shrJJaJHFP3bctc4m" target="_blank" rel="noopener noreferrer"><button class="button">Join Our Slack Channel</button></a>
            </div>
          </div>
          <div className="side-cols"><img src={world} className="World-logo" alt="world"/></div>
        </div>
        <br></br>
        <div className="airtable">
          <Iframe url="https://airtable.com/embed/shrBJGllgw0q87iSC?backgroundColor=blue&viewControls=on" width="100%" height="600px"/>
        </div>
        <br></br>
      </div>
      <footer>
        <p>Created with <span role="img" aria-label="heart emoji">❤️</span>by <b><a href="https://www.linkedin.com/in/anushka-saxena-b40aa2165/" target="_blank" rel="noopener noreferrer">Anushka</a> </b>and <b><a href="https://www.linkedin.com/in/monica-para/" target="_blank" rel="noopener noreferrer">Monica</a> </b></p>
      </footer>
    </div>
  );
}


export default App;
