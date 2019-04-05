import React, { Component } from 'react';
import '../App.css';
import DisplayList from './DisplayList'
import axios from 'axios';

class AddBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: '',
      task: []
    };

    this.handleCancel = this.handleCancel.bind(this)

  }
    handleCancel(id){
        axios.delete(`http://localhost:3000/api/delete/`)
        .then(resp => {
          this.setState ({
            task: resp.data,
          })
        }).catch(console.log)
      }

  render() {
      
    return (
      <div className="App">

         <div>
           <input className="inputImageURL" value={this.state.input} 
                 onChange={ (e) => this.handleInputChange( e.target.value ) }
           />
           <input className="inputProductName" value={this.state.input} 
                 onChange={ (e) => this.handleInputChange( e.target.value ) }
           />
           <input className="Price" value={this.state.input} 
                    placeholder="Free?"
                 onChange={ (e) => this.handleInputChange( e.target.value ) }
           />
           

           <button className="cancelButton" onClick={ this.handleAddTask }>Cancel</button>
           <button className="addToInventoryButton" onClick={ this.handleGet }>Add to Inventory</button>

           
           task={this.state.task}
           handleCancel={this.handleCancel}
           
          </div>
        </div>

     
    );
  }
}

export default AddBox;