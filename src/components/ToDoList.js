function ToDoList(props) {
    return (
        <div className="text-center">
            <h1 className="text-warning">To Do List</h1>
            {
                props.tasks.map((item, index) =>
                    <h3 key={index}>{item}</h3>)
            }
        </div>

    )
}
export default ToDoList;