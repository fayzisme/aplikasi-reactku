import React, { Component } from 'react';
import { Button } from 'reactstrap';

class Counter extends Component{
    state = {
        angka : 0
    };

    tambah =()=> {
        this.setState({
            angka : this.state.angka + 1
        });
        console.log(this.state.angka);
    };

    kurang =()=> {
        this.setState({
            angka : this.state.angka - 1
        });
        console.log(this.state.angka);
    };

    render(){
        return(
            <div>
                <h1>{this.props.name}</h1>
                <h2>{this.state.angka}</h2>
                <p><Button onClick={()=>this.tambah()} color='dark'>Tambah</Button> <Button onClick={()=>this.kurang()} color='dark'>Kurang</Button>
                </p>
            </div>
        )
    }
}

export default Counter