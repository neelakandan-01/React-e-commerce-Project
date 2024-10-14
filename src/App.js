import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './Register';
import Login from './Login';
import Dashboard from './Dashboard'; 
import Home from './Home';
import Products from './Products';

const App = () => {
  const [accessToken, setAccessToken] = useState(null);

  const handleLoginSuccess = (token) => {
    setAccessToken(token);
  };

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login onLoginSuccess={handleLoginSuccess} />} />
          <Route path="/dashboard" element={accessToken ? <Dashboard /> : <Login onLoginSuccess={handleLoginSuccess} />} />
          <Route path='/products' element={accessToken ? <Products/>:<Login onLoginSuccess={handleLoginSuccess} />}></Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
