import React from 'react';
//import logo from './logo.svg';
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import './App.css';
import HomeContainer from './containers/HomeContainer';
import ProductContainer from './containers/ProductContainer';

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
        <Switch>
          <Route path='/products/new' component= {renderCustomerNewContainer}/>        
          <Route path='/products/:dni' component= {renderCustomerContainer}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
