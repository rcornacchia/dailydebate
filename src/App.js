import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="title">Minimum income is good for society</h1>
        <div className="col-md-6 for">
          <span className="title">For</span>
        </div>        
        <div className="col-md-6 against">
          <span className="title">Against</span>
          <ul className="list-group">
            <li className="list-group-item">Cras justo odio</li>
            <li className="list-group-item">Dapibus ac facilisis in</li>
            <li className="list-group-item">Morbi leo risus</li>
            <li className="list-group-item">Porta ac consectetur ac</li>
            <li className="list-group-item">Vestibulum at eros</li>
          </ul>
        </div>

        
      </div>
    );
  }
}

export default App;
