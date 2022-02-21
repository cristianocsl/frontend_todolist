import React from 'react';
import TasksComponent from '../components/TasksComponent';
import { Box } from '@mui/material';
import AddTaskIcon from '@mui/icons-material/AddTask';
import { colors } from '@mui/material/';
import axios from 'axios';

import './taskPage.css';

export default function TasksPage() {
  return (
    <div>
      <div className="header-task-page">
        <div className="add-task-logo">
          <AddTaskIcon sx={{ fontSize: 25, color: colors.blue[900] }} />
          <Box sx={{ fontSize: 20, color: colors.blue[600] }} >Add</Box>
          <Box sx={{ fontSize: 15, color: colors.blue[300] }} >Task</Box>
        </div>
        <h3>
          <Box sx={{ color: colors.blue[900] }}>
            Olá, {axios.defaults.headers['userName']}!
          </Box>
        </h3>
      </div>
        <TasksComponent />
    </div>
  );
}
