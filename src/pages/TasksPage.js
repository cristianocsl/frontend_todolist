import React from 'react';
import TasksComponent from '../components/TasksComponent';
import axios from 'axios';

import './taskPage.css';

export default function TasksPage() {
  return (
    <div>
      <h1>Olá, {axios.defaults.headers['userName']}!</h1>
      <TasksComponent />
    </div>
  );
}
