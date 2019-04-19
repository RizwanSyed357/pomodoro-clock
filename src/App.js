import React from 'react';
import logo from './logo.svg';
import './App.css';
import TimeAdjuster from './TimeAdjuster/TimeAdjuster.js'
//import LengthSetter from './LengthSetter/LengthSetter.js'

class App extends React.Component {
  constructor (props){
    super(props);
    this.state = {
      workTime: 25,
      restTime: 0
    }
  }


  render() {
    return (
      <React.Fragment>
        <h1>Pomodoro Clock</h1>
        <TimeAdjuster time={this.state.workTime} />
        
      </React.Fragment>
    )
  }
}



export default App;
