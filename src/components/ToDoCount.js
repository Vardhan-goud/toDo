function ToDoCount(props){
    return(
        <div>
        <h1 className="text-success">Count</h1>
        <h2>{props.tasks.length}</h2>
        </div>
    )
}
export default ToDoCount;