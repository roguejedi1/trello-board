import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PropTypes from "prop-types"

const TrelloBoard = ({tasks}) => {
  return (
    <>
      <div className="border">
      <h1 className="title">Task list</h1>
      <div className="inner">
      {tasks.map(task => (
        <div className="task" key={task.id}>
          <p>{task.name}</p>
        </div>
      ))}
      <input placeholder="Add a task"/>
      </div>
      </div>
    </>
  )
}

TrelloBoard.propTypes = {
  tasks: PropTypes.array
}

const Task = ({task}) => {
  return (
    <>
    <div className="task">

    </div>
    </>
  )
}

const taskList = [
  {
    id: 1,
    name: 'ta'
  },
  {
    id: 2,
    name: 'ta'
  },
  {
    id: 3,
    name: 'ta'
  },
  {
    id: 4,
    name: 'ta'
  },
  {
    id: 5,
    name: 'ta'
  },
]

ReactDOM.render(
  <TrelloBoard tasks={taskList}/>,
  document.querySelector('#root')
)