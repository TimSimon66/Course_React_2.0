import TodoData from './components/todo/TodoData';
import TodoNew from './components/todo/TodoNew';
import './components/todo/todo.css';
import reactLogo from './assets/react.svg'
import { useState } from 'react';
//npm start

const App = () => {

  const [todoList, setTodoList] = useState([
    // { id: 1, name: "Learning React" },
    // { id: 2, name: "Watching Youtube" }
  ])

  // const hoidanit = "Eric Arsenan";
  // const age = 25;
  // const data = {
  //   address: "ha noi",
  //   country: "vietnam",
  // }

  const addNewTodo = (name) => {
    const newTodo = {
      id: randomIntFromInterval(1, 1000000),
      name: name

    }
    setTodoList([...todoList, newTodo]) // dùng settodolist để cập nhật giá trị cho mảng, ...todoList để copy giá trị cũ, newTodoList thêm giá trị mới vào cuối mảng

  }
  const randomIntFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  return (
    <div className="todo-container">
      <div className="todo-title">Todo list</div>
      <TodoNew
        addNewTodo={addNewTodo}
      />
      <TodoData
        todoList={todoList}
      />
      <div className="todo-image">
        <img src={reactLogo} className="logo" />
      </div>

    </div>
  )
}

export default App
