import React from 'react';
//import logo from './logo.svg';
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import './App.css';
import HomeContainer from './containers/HomeContainer';
import ProductsContainer from './containers/ProductsContainer';
import CustomersContainer from './containers/CustomersContainer';
import CustomerContainer from "./containers/CustomerContainer";
import ProductContainer from "./containers/ProductContainer";
//import NewCustomerContainer from './containers/NewCustomerContainer';
//import NewProductContainer from './containers/NewProductContainer';


function App() {
  //const renderHome = () => <HomeContainer/>
  //const renderCustomerContainer = () => <h1>Product Container</h1>
  
  //const renderCustomerListContainer = () => <ProductContainer/>
  const renderCustomerNewContainer = () => <h1>Product New Container</h1>

  return (
    <Router>
      <div className="App">
        <Route exact path='/' component= {HomeContainer}/>
        <Route exact path='/products' component= {ProductsContainer}/>
        <Route exact path='/customers' component= {CustomersContainer}/>
        <Switch>
          <Route path='/products/new' component= {renderCustomerNewContainer}/>
          <Route path='/products/:product_id' render= { props => <ProductContainer product_id={props.match.params.product_id}/>}/>
          <Route path='/customers/new' component= {renderCustomerNewContainer}/>
          <Route path='/customers/:dni' render= { props => <CustomerContainer dni={props.match.params.dni}/>}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
