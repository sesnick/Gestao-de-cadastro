import React, { Component } from 'react';

class Clients extends Component {    

    
  handleSubmit = (e) => {
    e.preventDefault();

    let clientName = this.name.value;
    let clientEmail = this.email.value;
    let clientNumber = this.number.value;
    let clientDoc = this.doc.value;

    localStorage.setItem(`clientName`,clientName ); 
    localStorage.setItem(`clientEmail`,clientEmail ); 
    localStorage.setItem(`clientNumber`,clientNumber ); 
    localStorage.setItem(`clientDoc`,clientDoc ); 

    this.name.value="";
    this.email.value="";
    this.number.value ="";
    this.doc.value ="";
  }
  
  render() {
    return (
      <div className="main-content home">
        <h2>Client database</h2>

        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Name" ref={ (input) => this.name = input } />
          <input type="text" placeholder="Email" ref={ (input) => this.email = input } />
          <input type="text" placeholder="Phone number" ref={ (input) => this.number = input } />
          <input type="text" placeholder="Document" ref={ (input) => this.doc = input } />
          <button type="submit">Submit!</button>
        </form>
      </div>
    );
  }
}

export default Clients;