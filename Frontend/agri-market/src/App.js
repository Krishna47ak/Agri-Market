import { Fragment, useEffect, useContext } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';
import Navbar from './components/header/Navbar';
import AddCart from './screens/AddCart';
import HomePage from './screens/HomePage';
import Login from './screens/LoginPage';
import Signup from './screens/SignupPage';
import Profile from './screens/Profile';
import ProfileEdit from './screens/ProfileEdit';
import Alert from './components/alert/Alert';

import { Context as AuthContext } from '../src/context/AuthContext'

function App() {
  const { state, fetchUser } = useContext(AuthContext)


  useEffect(() => {
    fetchUser()
  }, [])
  return (
    <Router>
      <Fragment>
        <Navbar />
        <Alert/>
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/signup' element={<Signup />} />
          <Route exact path='/addcart' element={<AddCart />} />
          <Route exact path='/profile' element={<Profile />} />
          <Route exact path='/profile-edit' element={<ProfileEdit />} />
        </Routes>
      </Fragment>
    </Router >
  );
}

export default App;

