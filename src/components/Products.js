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
        
        <label for="name">Name:<br/>
          <input type="text" id="name" placeholder="Name" ref={ (input) => this.name = input } />
        </label><br/>
        <label for="category">Category:<br/>
          <input type="text" id="category" placeholder="Category" ref={ (input) => this.category = input } />
        </label><br/>
        <label for="descrip">Description:<br/>
          <input type="text" id="descrip" placeholder="Description" ref={ (input) => this.description = input } />
        </label><br/>
        <label for="price">Price:<br/>
          <input type="text" id="price" placeholder="Price" ref={ (input) => this.price = input } />
       </label><br/> 
       <label for="img">Image URL:<br/>
          <input type="text" id="img" placeholder="Image URL" ref={ (input) => this.img = input } />
       </label><br/> 
       <label for="inventory">Quantity:<br/> 
          <input type="text" placeholder="Inventory" ref={ (input) => this.inventory = input } />
       </label> 
            <div>
                <button type="submit">Submit</button>
            </div>
        </form>
      </div>
    );
  }
}

export default Products;