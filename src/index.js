import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import logo from './logo.svg';

var CronJob = require('cron').CronJob;
new CronJob('20 14 * * Sun', function() {
  console.log('You will see this message every second');
}, null, true, 'America/Los_Angeles');
function tick() {
  const element = (
  	<div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </header>
      </div>
  );
  ReactDOM.render(element, document.getElementById('root'));
}

setInterval(tick, 1000);
