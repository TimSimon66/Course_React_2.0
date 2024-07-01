
const TodoData = (props) => {
    //props la bien object
    console.log(">> check props: ", props)
    const { name, age, data } = props;
    console.log(">>check data", props)
    return (
        <div className="todo-data">
            <div>My name is {name}</div>
            <div>Learning React</div>
            <div>Watching Youtube</div>
            <div>
                {JSON.stringify(props.todoList)}
            </div>
        </div>
    )
}

export default TodoData;