import './FormPage.css'; 
import React ,{useState} from 'react';
const FormPage=(props)=>{
    const [enteredTask,setEnteredTask]=useState('');
    const taskChangeHandler=(event)=>{
        setEnteredTask(event.target.value);
        console.log(enteredTask);
    }
    const addNewTask=(event)=>{
        event.preventDefault();
        const newTask=enteredTask;
        props.onFormData(newTask);
    };
    return (
        <div>
            <form className="FormClassPro" onSubmit={addNewTask}>
                <label>Task:</label>
                <input type="text" onTaskChange={taskChangeHandler}></input>
                <br></br>
                <button type='submit'>Add Task</button>
            </form>
        </div>
    );
};
export default FormPage;