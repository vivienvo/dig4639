import React, { Component } from 'react';

import './App.css';
import NameForm from './NameForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.setValid = this.setValid.bind(this);
    this.state = {isValid:true};
  }
  setValid(value)
  {
    this.setState ({isValid:value});
    console.log("Getting input")
  }
  render() {
    return(<div>
      <NameForm  setValid={this.setValid}/>
    {(!this.state.isValid) ?
      <div className="errortext">Error not alpha input</div>
    : null}
    </div>)
    }
  }


export default App;
