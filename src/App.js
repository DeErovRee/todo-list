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
      date: '12-02-2023',
      files: [
        'first',
        'second',
        'last'
      ],
      complite: false,
    },
    {
      heading: 'Give the book away',
      description: 'Give the book to Alexander',
      date: '13-05-2023',
      files: [
        'first',
        'second',
        'last'
      ],
      complite: false,
    },
    {
      heading: 'Do your homework',
      description: 'Do your math homework using the guidelines',
      date: '10-01-2023',
      files: [
        'first',
        'second',
        'last'
      ],
      complite: false,
    },
  ])

  return (
    <>
      <FunctionalPanel 
        setTaskList={setTaskList}
        taskList={taskList}
        />
      <Task 
        taskList={taskList}
        setTaskList={setTaskList}
        />
    </>
  );
}
