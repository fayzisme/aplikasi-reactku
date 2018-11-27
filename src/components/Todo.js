import React, { Component } from 'react';

class Todo extends Component {
    state = {
        database: [],
        input : '',
        buttonView : false,
        id : 0
    };

    handlechange = (param)=> {
        this.setState({
            input : param.target.value
        });
    };

    addData = ()=> {
        let data = this.state.database;
        let param = this.state.input;
        data.push(param);
        localStorage.setItem('todos', JSON.stringify(data));
        console.log(data);
        this.setState({
            input : ''
        });
    };

    getData = ()=> {
        let getItem = JSON.parse(localStorage.getItem('todos'));
        if (getItem !== null) {
            return this.setState({
                database : getItem
            });
        }
        console.log(getItem);
    };

    getDataID = (index)=> {
        let data = this.state.database;
        let getData = data[index];
        this.setState({
            input : getData,
            buttonView : true,
            id : index
        });
    }

    deleteData = (index)=> {
           let data = this.state.database;
           data.splice(index, 1);
           localStorage.setItem('todos', JSON.stringify(data));
           this.getData();
    }

    editData = id => {
        let data = this.state.database;
        data.splice(id, 1, this.state.input)
        localStorage.setItem('todos', JSON.stringify(data));
        this.getData();
        this.setState({
            input : '',
            buttonView : false
        });
    }

    cancelData = () => {
        let data = this.state.database;
        localStorage.setItem('todos', JSON.stringify(data));
        this.getData();
        this.setState({
            input : '',
            buttonView : false
        });
    }

    componentDidMount() {
        this.getData();
    }

    render() {
        return (
            <div id='container'>
                <h1>Ini ToDo !</h1>
                <input type = 'text' placeholder='Apa yang ingin dilakukan ?' onChange={this.handlechange} value={this.state.input}></input>
                {this.state.buttonView ?(
                    <div>
                        <button onClick={()=>this.editData(this.state.id)}>Edit</button>
                        <button onClick={()=>this.cancelData()}>Batal</button>
                    </div>):(<button onClick={this.addData}>Simpan</button>)}
                 <ul>
                    {this.state.database.map( (tolist, index) => {
                        return (
                        <div>
                            <li>{tolist}</li>
                            <button onClick={()=>this.deleteData(index)}>Delete</button>
                            <button onClick={()=>this.getDataID(index)}>Edit</button>
                        </div>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

export default Todo