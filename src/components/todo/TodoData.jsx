
const TodoData = (props) => {
    //props la bien object
    console.log(">> check props: ", props)
    const { todoList } = props;
    console.log(">>check data", props)
    return (
        <div className="todo-data">
            {todoList.map((item, index) => {
                console.log(">> check ", item, index)
                return (
                    <div>
                        <div className="todo-itme">
                            {item.name}
                            <button>Delete</button>
                        </div>
                    </div>
                )
            })}
            <div>
                {JSON.stringify(props.todoList)}
            </div>
        </div>
    )
}

export default TodoData;