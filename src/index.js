import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import NavigationBar from './navbar/Navbar'; // Import the NavigationBar component
import SignUp from './SignUp';
import SignIn from './SignIn';
import Header from './header/Header';
import Destination from './destination/Destination';
import Contact from './contact/Contact';
import CV from './cv/Cv'; // Remove this if you're using `Cv`
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    

    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/home" element={<Header />} />
        <Route path="/about" element={<Destination />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cv" element={<CV />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
