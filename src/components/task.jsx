import React from 'react'

export const Task = ({taskList}) => {
    return( taskList.map(el => {
        return(
        <div className="task">
            <div className="taskHead">
                <h2>{el.heading}</h2>
                <p><span 
                    className='coloreText'
                    style={{color: '#FF4C2B'}}
                    >{el.endDate}</span>
                </p>
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
        </div>)
    })
    )
}