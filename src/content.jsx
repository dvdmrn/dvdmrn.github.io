import React from 'react';
import Emoji from './helpers.jsx';

const Welcome = ()=>{
  return(
          <div>
          <span className="gradient"><b>Welcome!</b></span>
          <p>
            <Emoji symbol="💡" label="lightbulb"/> TIP: Use panels to the left to navigate.
          </p>
          </div>
  )
}

const PooWindow = ()=>{
  return(
          <div>
          You've opened the poo window
          </div>
  )
}

export {Welcome, PooWindow}