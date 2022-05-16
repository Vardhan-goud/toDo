
import { useForm } from 'react-hook-form';


function AddToDo(props) {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const formSubmit = (obj) => {
        props.setTasks([...props.tasks, obj.task]);
    }
    return (
        <div className='text-center'>
            <h1 className='text-info'>Add To Do</h1>
            <form className="w-50 mx-auto" onSubmit={handleSubmit(formSubmit)}>
                <input className="form-control" type="text" placeholder="add task" {...register("task")}></input>
                <button className="btn btn-primary mt-3 ms-2" type="submit">Add</button>
            </form>
        </div>
    )
}
export default AddToDo;