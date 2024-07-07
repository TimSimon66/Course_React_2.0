
const TodoData = (props) => {
    //props la bien object
    const { todoList } = props;
    return (
        <div className="todo-data">
            {todoList.map((item, index) => {
                console.log(">> check ", item, index)
                return (
                    <div>
                        <div className={`todo-item ${index}`} key={index.id}>
                            <div> {item.name} </div>
                            <button>Delete</button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default TodoData;