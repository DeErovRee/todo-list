import React, { useState} from 'react'

export const FunctionalPanel = ({taskList, setTaskList}) => {
    const [data, setData] = useState({
        heading: '',
        description: '',
        date: '',
    })

    const addNewTask = (e) => {
        e.preventDefault()
        const heading = e.target[1].value.trim()
        const description = e.target[2].value.trim()
        const date = e.target[3].value.trim()

        if (heading < 3 || description < 3 || date === '') {
            return alert('Вы ввели неверные значения')
        } else {
            setTaskList(prevstate => [...prevstate, {
                heading: heading,
                description: description,
                date: date,
                files: [],
                complite: false,
            }])
            setData({
                heading: '',
                description: '',
                date: '',
            })
        }
        
    }

    const delAllCompTask = (e) => {
        e.preventDefault()
        const filteredArr = taskList.filter(el => el.complite !== true)

        setTaskList(filteredArr)
    }

    // const hideCompliteTask = (e) => {
    //     const condition = e.target.checked
    //     console.log(condition)
    // }

    return(
        <>
        <div className="functionalPanel">
            <form onSubmit={(e) => addNewTask(e)}>
                <button className='addTaskBtn'>ADD NEW TASK</button>
                <input className='inputTask' type="text" placeholder="Heading" value={data.heading} onChange={(e) => setData(prevstate => [{...prevstate, heading: e.target.value}])}/>
                <input className='inputTask' type="text" placeholder="Description" value={data.description} onChange={(e) => setData(prevstate => [{...prevstate, description: e.target.value}])}/>
                <input className='inputTask' type="date" value={data.description} onChange={(e) => setData(prevstate => [{...prevstate, date: e.target.value}])}/>
            </form>
            <button className='delAllCompTaskBtn' onClick={(e) => delAllCompTask(e)}>DELETE ALL COMPLITE TASK</button>
        </div>
            {/* <p>Hide complite task</p>
            <input type="checkbox" onChange={(e) => hideCompliteTask(e)}/> */}
        </>
        
    )
}