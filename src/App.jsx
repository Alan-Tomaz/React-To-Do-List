import { useState } from 'react'
import "./App.css";
import ToDo from './components/ToDo';
import ToDoForm from './components/ToDoForm';
import Search from './components/Search';
import Filter from './components/filter';

function App() {

  const [toDos, setToDos] = useState([
    {
      id: 1,
      text: "Create x functionality in the system",
      category: "Work",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Go to Gym",
      category: "Pessoal",
      isCompleted: false,
    },
    {
      id: 3,
      text: "Study React",
      category: "Study",
      isCompleted: false,
    }
  ]);

  const [search, setSearch] = useState("");

  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("Asc");

  const addTodo = (text, category) => {
    const newTodos = [...toDos, {
      id: toDos.length + 1,
      text,
      category,
      isCompleted: false
    }];

    setToDos(newTodos);

  }

  const removeToDo = (id) => {
    const newToDos = [...toDos]
    const filteredToDos = newToDos.filter(toDo => toDo.id !== id ? toDo : null);
    setToDos(filteredToDos);
  }

  const completeToDo = (id) => {
    const newToDos = [...toDos]
    newToDos.map((toDo) => toDo.id === id ? toDo.isCompleted = !toDo.isCompleted : toDo);
    setToDos(newToDos);
  }

  return (
    <div className='app'>
      <h1>Tasks Lists</h1>
      <Search search={search} setSearch={setSearch} />
      <Filter filter={filter} setFilter={setFilter} setSort={setSort} />
      <div className="todo-list">
        {
          // Show The tasks but before filter they for search and parameters of filtering
          toDos.filter(toDo =>
            filter === "All"
              ? true
              : filter === "Completed"
                ? toDo.isCompleted
                : !toDo.isCompleted)
            .filter(toDo =>
              toDo.text.toLowerCase().includes(search.toLowerCase())
            )
            .sort((a, b) =>
              sort === "Asc"
                ? a.text.localeCompare(b.text)
                : b.text.localeCompare(a.text)
            )
            .map((toDo) => (
              <ToDo key={toDo.id} toDo={toDo} removeToDo={removeToDo} completeToDo={completeToDo} />
            ))}
      </div>
      <ToDoForm addTodo={addTodo} />
    </div>
  )
}

export default App
