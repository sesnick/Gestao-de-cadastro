import React, { Component } from 'react';

class Products extends Component {   
    
  
  handleSubmit = (e) => {
    e.preventDefault();
    let prodName = this.name.value;
    let prodCategory = this.category.value;
    let prodDescription = this.description.value;
    let prodPrice = this.price.value;
    let prodInventory = this.inventory.value;
    let prodImg = this.img.value;

    localStorage.setItem(`prodName`,prodName ); 
    localStorage.setItem(`prodCategory`,prodCategory ); 
    localStorage.setItem(`prodDescription`,prodDescription ); 
    localStorage.setItem(`prodPrice`,prodPrice ); 
    localStorage.setItem(`prodInventory`,prodInventory ); 
    localStorage.setItem(`prodImg`,prodImg ); 
    
    this.name.value = "";
    this.category.value ="";
    this.description.value ="";
    this.price.value ="";
    this.inventory.value ="";
    this.img.value ="";
       

  }
  
  render() {
    return (
      <div className="main-content home">
        <h2>Product database</h2>

        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Name" ref={ (input) => this.name = input } />
          <input type="text" placeholder="Category" ref={ (input) => this.category = input } />
          <input type="text" placeholder="Description" ref={ (input) => this.description = input } />
          <input type="text" placeholder="Price" ref={ (input) => this.price = input } />
          <input type="text" placeholder="Image URL" ref={ (input) => this.img = input } />
          <input type="text" placeholder="Inventory" ref={ (input) => this.inventory = input } />
            <div>
                <button type="submit">Submit!</button>
            </div>
        </form>
      </div>
    );
  }
}

export default Products;