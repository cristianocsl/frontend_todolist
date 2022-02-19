import React from 'react';
import { BrowserRouter, Routes ,Route, Navigate } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import TasksPage from './pages/TasksPage';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Navigate replace to="/login" /> } />
          <Route path="/login" element={ <Login /> } />
          <Route path="/register" element={ <Register />} />
          <Route path="/tasks" element={ <TasksPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
