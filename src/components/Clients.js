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

        <label for="name">Name:<br/>
          <input type="text" id="name" placeholder="Name" ref={ (input) => this.name = input } />
        </label><br/>
        <label for="Email">Email : <br/>
          <input type="text" id="Email" placeholder="Email" ref={ (input) => this.email = input } />
        </label><br/>
        <label for="phone">Phone:<br/>
          <input type="text" id="phone" placeholder="Phone number" ref={ (input) => this.number = input } />
        </label><br/>
        <label for="doc">Document:<br/>
          <input type="text" id="doc" placeholder="Document" ref={ (input) => this.doc = input } />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Clients;