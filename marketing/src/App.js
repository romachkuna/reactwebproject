import React from 'react';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Home_new from './components/pages/Home_new'
import Aboutpage from './components/pages/Aboutpage.jsx'
import Footer from './components/Footer';
import Register from "./components/sign-up/sign-up";
import Login from "./components/log-in/log-in";
import Notfound from "./components/notfound/notfound";
import Location from './components/FooterPages/Location';
import Navbar from './components/newNavbar/Navbar';
import Tos from './components/FooterPages/Tos';
import Contact from './components/FooterPages/Contact'
import Chatbot from './components/Chatbot';
import AddProductCard from './components/Admin/AddProductCard';
import ProductPage from './components/Admin/ProductPage';
import Cookies from './components/FooterPages/Cookies';
import Thanks from './components/FooterPages/Thanks';
import MessageSent from './components/FooterPages/MessageSent';
import Support from './components/FooterPages/Support';
import Payment from './components/FooterPages/Payment';
import Success from './components/FooterPages/Success';
import MessengerCustomerChat from 'react-messenger-customer-chat';
import LoginDone from './components/log-in/LoginDone';

function App() {
  return (
    <>
    {/*
    <Cart />
    */}
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home_new />} />
        <Route path='/Aboutpage' element={<Aboutpage />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="*" element={<Notfound />} />
        <Route path='/Products' element={<ProductPage />} />
        <Route path='/Location' element={<Location />} />
        <Route path='/Tos' element={<Tos />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/44t3EpmMKJLknqYj2KycYJqFAEU9v8' element={<AddProductCard />} />
        <Route path='/Cookies' element={<Cookies />} />
        <Route path='/thanks' element={<Thanks />} />
        <Route path='/MessageSent' element={<MessageSent />} />
        <Route path='/Support' element={<Support />} />
        <Route path='/Payment' element={<Payment />} />
        <Route path='/Success' element={<Success />} />
        <Route path='/LoginDone' element={<LoginDone />} />
        {/* remember the sercet path to admin page it is to after each use */}
      </Routes>
      <Chatbot />
      <MessengerCustomerChat
      pageId="100596326045407"
      appId="447747350045292"
      />
    </Router>
    </>
  );
}

export default App;
