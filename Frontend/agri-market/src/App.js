import { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';
import Navbar from './components/header/Navbar';
import HomePage from './screens/HomePage';

function App() {
  return (
    <Router>
      <Fragment>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<HomePage/>} />
        </Routes>
      </Fragment>
    </Router >
  );
}

export default App;

