import React from 'react'

export const Task = ({taskList, setTaskList}) => {

    const toggleComplite = (e) => {
        const checkbox = e.target.checked
        const id = e.target.parentElement.parentElement.attributes['data-key'].value
        const copyTaskList = Object.assign(taskList)
    
        copyTaskList[id].complite = checkbox
        setTaskList(copyTaskList)
    }

    const delTask = (e) => {
        
        const id = e.target.parentElement.parentElement.attributes['data-heading'].value

        const filteredArr = taskList.filter(el => el.heading !== id)
        setTaskList(filteredArr)
    }

    return( taskList.map((el, ind) =>
        <div className="task" key={ind} data-key={ind} data-heading={el.heading} >
            <div className="taskHead">
                <h2>{el.heading}</h2>
                <p><span 
                    className='coloreText'
                    style={{color: '#FF4C2B'}}
                    >{el.date}</span>
                </p>
                <input type="checkbox" onChange={(e) => toggleComplite(e)}/>
                <button onClick={(e) => delTask(e)}>X</button>
            </div>

            <p>{el.description}</p>
            
            <div className="attachedFiles">
                <p>Файлы:</p>
                <div className="files">
                    <div className="file"></div>
                    <div className="file"></div>
                    <div className="file"></div>
                    <div className="file"></div>
                </div>
            </div>
        </div>
    )
    )
}