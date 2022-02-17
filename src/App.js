import React from 'react';
import { BrowserRouter, Routes ,Route, Navigate } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Navigate replace to="/login" /> } />
          <Route path="/login" element={ <Login /> } />
          <Route path="/register" element={ <Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
