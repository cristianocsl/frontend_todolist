import React from 'react';
import TasksComponent from '../components/TasksComponent';
import axios from 'axios';

import './taskPage.css';

export default function TasksPage() {
  return (
    <div>
      <h2>Bem vindo, {axios.defaults.headers['userName']}!</h2>
      <TasksComponent />
    </div>
  );
}
