import './App.css';
import React, { createContext, useReducer } from 'react';
import { Route, Routes } from 'react-router-dom';
import CreateCoupon from "./components/CreateCoupon";
import Login from './components/Login';
import Signup from './components/Signup';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Logout from './components/Logout';
import {initialState, reducer} from '../src/reducer/UseReducer';
import EditCoupon from './components/EditCoupon';
import Forgot from './components/Forgot';
import Reset from './components/Reset';
import Fulldetails from './components/Fulldetails';
import Filters from './components/Filters';

export const PartnerContext = createContext();

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/create" element={<CreateCoupon />} />
      <Route path="/edit" element={<EditCoupon />} />
      <Route path="/forgot" element={<Forgot />} />
      <Route path="/reset" element={<Reset />} />
      <Route path="/fulldetail" element={<Fulldetails />} />
      <Route path="/filter" element={<Filters />} />
    </Routes>
  )
}

function App() {

  const [state, dispatch] = useReducer(reducer, initialState);

  return (

    <>
      <PartnerContext.Provider value={{state, dispatch}}>
        <Navbar />
        <Routing /> 
      </PartnerContext.Provider>
    </>
  )
}

export default App;
