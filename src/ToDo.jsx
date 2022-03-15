import React from "react";
import Todo from './TodoComp'
const TodoList = ({todos,setTodos,filteredTodos, saveLocalTodos}) => {
    if(!filteredTodos) filteredTodos = []
    return (
        <div className="todo-container">
            <ul className="todo-list">
              {filteredTodos.map(todo => (
                  <Todo setTodos={setTodos}
                   todos={todos}
                   todo={todo}
                   key={todo.id} 
                   text={todo.text}
                   saveLocalTodos={saveLocalTodos}/>
              ))}
            </ul>
        </div>
    )
} 

export default TodoList