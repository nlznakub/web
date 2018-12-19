import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { observer } from 'mobx-react';
import Mobx from './mobx/Mobx';
import { Toggle } from './components/Toggle';

@observer
class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      time: 0,
      count: 0
    }
  }

  componentDidMount = () => {
    // setTimeout(() => {
    //   this.setState({ time: 1 })
    // }, 3000)
  }


  render() {
    let { time } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          {Mobx.getCount}
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* Learn React {Mobx.getCount} */}
          </a>
          {!time && <Toggle _name={Mobx.name} _count={2} />}
          {/* <input value={Mobx.getName} onChange={e => Mobx.setName(e.target.value)} /> */}
        </header>
      </div>
    );
  }
}

export default App;
