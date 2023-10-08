import React, { useState } from 'react'

const ToDoForm = ({ addTodo }) => {

    const [value, setValue] = useState("")
    const [category, setCategory] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!value || !category) return;

        //add to-do
        addTodo(value, category);
        //clear fields
        setValue("");
        setCategory("");
    }

    return (
        <div className='todo-form'>
            <h2>Create Task</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Write The Title' onChange={e => setValue(e.target.value)} value={value} />
                <select value={category} onChange={e => setCategory(e.target.value)}>
                    <option value="">Select a category</option>
                    <option value="Work">Work</option>
                    <option value="Pessoal">Pessoal</option>
                    <option value="Study">Study</option>
                </select>
                <button type="submit">Create Task</button>
            </form>
        </div>
    )
}

export default ToDoForm
