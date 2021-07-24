import React, { Component } from 'react';

class Home extends Component {    
  

  render() {
    return (
      <div className="main-content home">
        <h2>Masterdata</h2>
        <p>This is a directory for the <em>Database</em> </p>
        <p>Here you can store your client and product data </p>
        <hr />
        <h3>Tabs:</h3>
        <p>Products : Where you can register a new product</p>
        <p>Catalog : Where you find all the products registered</p>
        <p>Clients: Where you can register a new client</p>
      </div>

    );
  }
}

export default Home;



