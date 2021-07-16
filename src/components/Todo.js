import React, {useState, useEffect} from 'react';
import '/Users/hrishitahri/Desktop/reactproject1/NoDoProject/src/App.css'
import './Todo.css'
import useLocalStorage from '../useLocalStorage'
import Sidebar from './Sidebar'
import Navbar from './Navbar'


function Todo(){

    const [currentTodo, setCurrentTodo] = useState("");
    const [status,setStatus] = useState('all');
    const [filteredTodos, setFilteredTodos] = useState([]);
    const [todos, setTodos] = useLocalStorage('todos',[
        // {
        //     todo : "bake a cake",
        //     isCompleted: true
        // },
        // {
        //     todo : "go for a walk",
        //     isCompleted: false
        // },
        // {
        //     todo: "work on project",
        //     isCompleted: false
        // }

    ]);

function createNewTodo(currentTodo) {
    let todosArray = [...todos];
    todosArray.push({
        todo: currentTodo,
        isCompleted: false,
        id: Math.random()*1000
    });
    setTodos(todosArray)
}

function completeTodo(index) {
    const todosArray = [...todos];
    todosArray[index].isCompleted = !todosArray[index].isCompleted;
    setTodos(todosArray);

  }

  function deleteTodo(index) {
      let todosArray = [...todos];
      todosArray.splice(index, 1);
      setTodos(todosArray);
  }

  
  useEffect(() => {
      filterHandler();
  }, [todos, status]);

  const filterHandler = () => {
      switch(status){
          case 'completed':
              setFilteredTodos(todos.filter(todo => todo.isCompleted ===true));
              break;

        case 'uncompleted':
            setFilteredTodos(todos.filter(todo => todo.isCompleted === false));
            break;
        default:
            setFilteredTodos(todos);
            break;
            
        
      }
  }



    return(
        <>
        <Navbar />
        <div className="todo-container container-fluid">{/* kjfnvdjc*/}
        <Sidebar todos={todos} setTodos={setTodos} setStatus={setStatus} />
        <div className="d1">
        <div class="wrapper">
        <input className="todo-input" value={currentTodo} onChange = {e =>{
            setCurrentTodo(e.target.value);
        }}
        onKeyPress={e => {
            if(e.key === 'Enter') {
                createNewTodo(currentTodo);
                setCurrentTodo("");
            }
        }}
        placeholder = "Add a todo."
        />
        <span className="underline" />
        </div>
            {filteredTodos.map((todo, index)=> (
                {/* <ul>
                <li>{todo.todo}</li> 
                </ul>               */},
                <div key={todo} className="todo">
                <div className="radio" onClick={() => completeTodo(index)}>
                    {todo.isCompleted && <span className="radio-span"></span>}
                </div>

                <div className={todo.isCompleted ? "done" : ""}>{todo.todo}</div>
                
                <button className="delete" onClick={() => deleteTodo(index)}>
                <i><svg xmlns="http://www.w3.org/2000/svg" color= "black" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
  <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
</svg></i>
                </button>
                </div>
            ))}
            {/* {todos.length > 0 && `${todos.length} items`} */}
        </div>
        </div>
        </>
    );
}

export default Todo;