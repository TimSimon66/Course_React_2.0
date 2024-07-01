
const TodoNew = (props) => {
    console.log(">>> check point: ", props);
    const { addNewTodo } = props;

    const handleClick = () => {
        alert("Click me");
    }

    const handleOnChange = (name) => {
        console.log(">>> handleOnChange", name);
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
        </div>
    )
}

export default TodoNew;