import React, { Component } from 'react';
import cat from './cat.jpg';
import Counter from './components/counter';
import './App.css';

class App extends Component {

  state = {
    angka: 2
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={cat} className="logo" alt="logo" />
          <h1 className="App-title">Selamat Datang di React pertamaku</h1>
        </header>
        <Counter name='Istighfar'/>
        <Counter name='Hamdalah'/>
      </div>
    );
  }
}

/*const Header =()=>{
  return <h1>Ini Header functional</h1>
};*/

/*class DalamFile extends Component  {
  state = {
    angka: 1
  };

  render() {
    return (
      <div className="DalamFile">
        <h1>Ini Component class {this.state.angka}</h1>
      </div>
    )
  }
}*/

export default App;
