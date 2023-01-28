import { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';
import Banner from './components/header/Banner';
import Navbar from './components/header/Navbar';

function App() {
  return (
    <Router>
      <Fragment>
        <Navbar />
        <Banner/>
      </Fragment>
    </Router >
  );
}

export default App;

