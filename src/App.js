import React from 'react';
import { BrowserRouter, Routes ,Route } from 'react-router-dom';
import Register from './pages/Register';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={ <Register />} />
        </Routes>
      </BrowserRouter>
      <Register />
    </div>
  );
}

export default App;
