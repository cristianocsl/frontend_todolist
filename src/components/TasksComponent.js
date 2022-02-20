import React, { useEffect, useState } from 'react';
import fetchByMethod from '../fecthApi';
import TaskItem from './TaskItem';
import './taskComponent.css';

export default function TasksComponent() {
  const [tasks, setTasks] = useState([]);
  
  useEffect(async () => {
    const data = await fetchByMethod.fetchAllTasks();
    setTasks(data);
  }, []);

  console.log(tasks);

  const handleChange = (taskObj) => {
    const found = tasks.map((item) => {
      if (item._id === taskObj._id) return {
        ...item, ...taskObj
      };
      return item;
    });
    setTasks(found);
  };

  return (
    <div className="container">
      {
        tasks.map((item, index) => (
          <TaskItem item={item} key={index} sendChangesToFather={handleChange} />
        ))
      }
    </div>
  );
}
