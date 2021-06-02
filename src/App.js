import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/header';
import CartPage from './pages/cart';
import ProductPage from './pages/product';
import LoginPage from './pages/login';
import HomePage from './pages/home';
// import Test from '../src/test';
import './App.scss';

function App() {
  // const [data, setData] = useState([]);
  // pull the data from products json using useEffect
  // useEffect(() => {
  //   fetch('http://localhost:8000/products')
  //     .then((res) => res.json())
  //     .then((data) => setData(data));
  // }, []);
  return (
    <Router>
      <Header />
      {/* <Test /> */}

      <div className='page-container'>
        <Switch>
          <Route exact path='/cart'>
            <CartPage />
          </Route>

          <Route exact path='/product/:productId'>
            <ProductPage />
          </Route>

          <Route exact path='/login'>
            <LoginPage />
          </Route>

          <Route>
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
