import React, { Component } from 'react';

class LuarFile extends Component  {
  
    handleClick = () => {
      alert('Kandani Ojo di Klik');
    };
  
    render() {
      return (
        <div className="LuarFile">
          <h1>nama : {this.props.nama}</h1>
          <h1>kelas : {this.props.kelas}</h1>
          <button onClick={()=> this.handleClick()}>Jangan di klik/button</button>
        </div>
      )
    }
  }

  export default LuarFile;