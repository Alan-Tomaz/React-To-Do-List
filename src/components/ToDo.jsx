import React from 'react'

const ToDo = ({ toDo, removeToDo, completeToDo }) => {
    return (
        <div>
            <div className="todo" style={{ textDecoration: toDo.isCompleted ? "line-through" : "" }}>
                <div className="content">
                    <p>{toDo.text}</p>
                    <p className='category'>
                        ({toDo.category})
                    </p>
                </div>
                <div>
                    <button className='complete' onClick={() => completeToDo(toDo.id)}>Complete</button>
                    <button className='remove' onClick={() => removeToDo(toDo.id)}>x</button>
                </div>
            </div>
        </div>
    )
}

export default ToDo
