import React, { useState} from 'react'

export const FunctionalPanel = ({setTaskList}) => {
    const [data, setData] = useState()

    const addNewTask = (e) => {
        e.preventDefault()
        
    }

    return(
        <div className="functionalPanel">
            <button onSubmit={(e) => addNewTask(e)}>Add new tasks</button>
            <input type="text" placeholder="Heading"/>
            <input type="text" placeholder="Description"/>
            <input type="date" />
        </div>
    )
}