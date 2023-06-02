import { Fragment, useEffect, useContext } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';
import Navbar from './components/header/Navbar';
import AddCart from './screens/AddCart';
import HomePage from './screens/HomePage';
import Login from './screens/LoginPage';
import Signup from './screens/SignupPage';
import Profile from './screens/Profile';

import { Context as AuthContext } from '../src/context/AuthContext'

function App() {
  const { state, loadUser } = useContext(AuthContext)


  useEffect(() => {
    loadUser()
  }, [])
  return (
    <Router>
      <Fragment>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/signup' element={<Signup />} />
          <Route exact path='/addcart' element={<AddCart />} />
          <Route exact path='/profile' element={<Profile />} />
        </Routes>
      </Fragment>
    </Router >
  );
}

export default App;

