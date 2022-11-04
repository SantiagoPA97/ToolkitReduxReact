import { useState } from "react";
import { useGetTodosQuery, useGetTodoQuery } from "./store/api/todosApi"

export const TodoApp = () => {

  // const { data: todos = [], isLoading, completed } = useGetTodosQuery();
  const [todoId, setTodoId] = useState(1);
  const { data: todo, isLoading } = useGetTodoQuery(todoId);

  const handleNextTodo = () => {
    setTodoId(todoId + 1)
  }

  const handlePreviousTodo = () => {
    if(todoId === 1) return;
    setTodoId(todoId - 1)
  }

  return (
   <>
    <h1>Todos - RTK Query</h1>
    <hr />

    <h4>{isLoading && 'Loading...'}</h4>

    <pre>{ JSON.stringify(todo)}</pre>

    {/* <ul>
      { todos.map(({id, title}) => (
        <li key={ id }>
          <strong> { completed ? 'Done' : 'Pending'} </strong>
          { title }
        </li>
      ))}
    </ul> */}

    <button onClick={ handlePreviousTodo }>Previous Todo</button>
    <button onClick={ handleNextTodo }>Next Todo</button>
   </>
  ) 
}
