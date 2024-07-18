import TodoData from './TodoData';
import TodoNew from './TodoNew';
import './todo.css';
import reactLogo from '../../assets/react.svg'
import { useState } from 'react';

const TodoApp = () => {
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

    const deleteTodo = (id) => {
        const newTodo = todoList.filter(item => item.id !== id)
        console.log("Check id", newTodo)
        setTodoList(newTodo)
    }
    return (
        <div className="todo-container">
            <div className="todo-title">Todo list</div>
            <TodoNew
                addNewTodo={addNewTodo}
            />
            {todoList.length > 0 ?
                <TodoData
                    deleteTodo={deleteTodo}
                    todoList={todoList}
                />
                :
                <div className="todo-image">
                    <img src={reactLogo} className="logo" />
                </div>
            }

            {/* {todoList.length > 0 && <TodoData
      todoList={todoList}
    />}
    {todoList.length == 0 && <div className="todo-image">
      <img src={reactLogo} className="logo" />
    </div>} */}

        </div>
    )
}

export default TodoApp;