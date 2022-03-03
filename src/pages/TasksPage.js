import React from 'react';
import TasksHeader from './TasksHeader';
import TasksComponent from '../components/TasksComponent';

export default function TasksPage() {
  return (
    <div>
      <TasksHeader />
      <TasksComponent />
    </div>
  );
}
