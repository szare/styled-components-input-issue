import React, {Component} from 'react';
import './App.css';
import Input from './Input.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.onChange = this.onChange.bind(this);
  }

  onChange(value) {
    this.setState({value});
  };

  render() {
    return (
      <div className="App">
        <Input type={'number'} onChange={this.onChange}/>
        <p>{this.state.value}</p>
      </div>
    );
  }
}

export default App;
