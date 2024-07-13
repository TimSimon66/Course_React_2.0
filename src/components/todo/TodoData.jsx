
const TodoData = (props) => {
    //props la bien object
    const { todoList, deleteTodo } = props;

    const handleClickDelete = (id) => {
        deleteTodo(id)
    }
    return (
        <div className="todo-data">
            {todoList.map((item, index) => {
                console.log(">> check ", item, index)
                return (
                    <div>
                        <div className={`todo-item ${index}`} key={index.id}>
                            <div> {item.name} </div>
                            <button onClick={() => handleClickDelete(item.id)}
                                style={{ cursor: "pointer" }}>Delete</button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default TodoData;