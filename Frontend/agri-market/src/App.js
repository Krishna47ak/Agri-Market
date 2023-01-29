import { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';
import Navbar from './components/header/Navbar';
import HomePage from './screens/HomePage';
import Login from './screens/LoginPage';
import Signup from './screens/SignupPage';

function App() {
  return (
    <Router>
      <Fragment>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<HomePage/>} />
          <Route exact path='/login' element={<Login/>} />
          <Route exact path='/signup' element={<Signup/>} />
        </Routes>
      </Fragment>
    </Router >
  );
}

export default App;

