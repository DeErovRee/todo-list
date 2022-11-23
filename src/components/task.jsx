import React, { useEffect } from 'react'

export const Task = ({taskList, setTaskList}) => {

    const toggleComplite = (e) => {
        const id = e.target.parentElement.attributes['data-key'].value
        const copyTaskList = Object.assign(taskList)
    
        copyTaskList[id].complite = !copyTaskList[id].complite
        if (copyTaskList[id].complite) {
            e.target.style = 'background-color: darkgreen'
        } else {
            e.target.style = 'background-color: darkred'
        }
        console.log(copyTaskList)
        setTaskList(copyTaskList)
    }

    const getColor = (complite) => {
        if (complite) {
            return 'darkgreen'
        } else {
            return 'darkred'
        }
    }

    const delTask = (e) => {
        
        const id = e.target.parentElement.attributes['data-heading'].value

        const filteredArr = taskList.filter(el => el.heading !== id)
        setTaskList(filteredArr)
    }

    return( taskList.map((el, ind) =>
        <div className="task" key={ind} data-key={ind} data-heading={el.heading} >
            <div className="taskHead">
                <h2>{el.heading}</h2>
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

            <p>
                <span 
                    className='coloreText'
                    style={{color: '#FF4C2B'}}
                    >{el.date}</span>
            </p>
            <div className='compliteStatus' onClick={(e) => toggleComplite(e, el.complite)} style={{backgroundColor: getColor(el.complite)}} ></div>
            <input style={{display: 'none'}} className='compliteToggle' type="checkbox" onChange={(e) => toggleComplite(e)}/>
            <button className='delBtn' onClick={(e) => delTask(e)}>X</button>
        </div>
    )
    )
}