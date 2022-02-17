import React from 'react';
import { BrowserRouter, Routes ,Route } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={ <Register />} />
          <Route path="/login" element={ <Login /> } />
        </Routes>
      </BrowserRouter>
      <Register />
    </div>
  );
}

export default App;
