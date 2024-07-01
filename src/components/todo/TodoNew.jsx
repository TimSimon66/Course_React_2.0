import { useState } from "react";

const TodoNew = (props) => {

    // const valueInput = "eric";
    const [valueInput, setValueInput] = useState("eric")

    const { addNewTodo } = props;

    const handleClick = () => {
        console.log(">>> cheack data", valueInput)
    }

    const handleOnChange = (name) => {
        setValueInput(name);
    }

    addNewTodo("eric");
    return (
        <div className="todo-new">
            <input type="text"
                onChange={(event) => handleOnChange(event.target.value)}
            />
            <button
                style={{ cursor: "pointer" }}
                onClick={handleClick}
            >Add</button>
            <div>
                My text input is = {valueInput}
            </div>
        </div>
    )
}

export default TodoNew;