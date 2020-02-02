import React from 'react';
//import logo from './logo.svg';
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import './App.css';
import HomeContainer from './containers/HomeContainer';
import ProductContainer from './containers/ProductsContainer';
import CustomersContainer from './containers/CustomersContainer';
//import NewCustomerContainer from './containers/NewCustomerContainer';
//import NewProductContainer from './containers/NewProductContainer';


function App() {
  //const renderHome = () => <HomeContainer/>
  const renderCustomerContainer = () => <h1>Product Container</h1>
  
  //const renderCustomerListContainer = () => <ProductContainer/>
  const renderCustomerNewContainer = () => <h1>Product New Container</h1>

  return (
    <Router>
      <div className="App">
        <Route exact path='/' component= {HomeContainer}/>
        <Route exact path='/products' component= {ProductContainer}/>
        <Route exact path='/customers' component= {CustomersContainer}/>
        <Switch>
          <Route path='/products/new' component= {renderCustomerNewContainer}/>        
          <Route path='/products/:dni' component= {renderCustomerContainer}/>
          <Route path='/customers/new' component= {renderCustomerNewContainer}/>        
          <Route path='/customers/:dni' component= {renderCustomerContainer}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
