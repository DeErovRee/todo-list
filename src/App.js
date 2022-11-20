import React, { useState } from 'react'
import './styles/App.css';
import './styles/normalize.css'
import { Task } from './components/task'
import { FunctionalPanel } from './components/functionalPanel';

export function App() {

  const [taskList, setTaskList] = useState([
    {
      heading: 'Buy food',
      description: 'Buy food for a week, at the fix price store on the next street',
      endDate: '12-02-2023',
      files: [
        'first',
        'second',
        'last'
      ]
    },
    {
      heading: 'Give the book away',
      description: 'Give the book to Alexander',
      endDate: '13-05-2023',
      files: [
        'first',
        'second',
        'last'
      ]
    },
    {
      heading: 'Do your homework',
      description: 'Do your math homework using the guidelines',
      endDate: '10-01-2023',
      files: [
        'first',
        'second',
        'last'
      ]
    },
  ])

  return (
    <>
      <FunctionalPanel 
        setTaskList={setTaskList}/>
      <Task 
        taskList={taskList}
        />
    </>
  );
}
