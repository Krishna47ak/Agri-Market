import { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';
import useProducts from './hooks/useProducts';
import Banner from './components/header/Banner';
import Navbar from './components/header/Navbar';
import Products from './components/landing/Products';

function App() {
  const [ products ] = useProducts()
  return (
      <Router>
        <Fragment>
          <Navbar />
          <Banner />
          <Products title="Fruits" data={products.fruit} />
          <Products title="Vegetables" data={products.vegetable} />
        </Fragment>
      </Router >
  );
}

export default App;

