import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

// App components
import Header from './Header';
import Home from './Home';
import Products from './Products';
import Clients from './Clients';
import Catalog  from './Catalog';
import NotFound from './NotFound';

const App = () => (
  <BrowserRouter>
    <div className="container">
      <Header />
      
      <Switch>
        <Route exact path="/" component={Home} />  
        <Route exact path="/products" component={Products} />
        <Route exact path="/catalog" component={Catalog} />
        <Route path="/clients" component={Clients} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;


/**
 *       <Route path="/about" render={ () => <About title='About' /> } />
 */

