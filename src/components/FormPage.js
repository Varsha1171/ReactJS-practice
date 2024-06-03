import './FormPage.css';
import React, { useState } from "react";
import styled from 'styled-components';
const FormControl = styled.div`

    margin: 20px;
    padding: 20px;
    border: 1px soild black;
    text-shadow:black  2px;
    background-color:azure;

&.InvalidClass {
    border-color: red;
    background-color: rgb(243, 206, 206);
}
 &.InvalidClass {
    color: red;
}
&.BtnClass{
    width:100%;
}
@media(min-width: 768px){
    width:auto;
}
`;
const FormPage = (props) => {
    const [newMember, setNewMember] = useState({
        task: '',
    });
    const [isValid, setIsValid] = useState(true);
    const taskChangeHandler = (event) => {
        if (newMember.task.trim().length > 0) {
            setIsValid(true);
        }
        setNewMember(newMember => {
            return {
                ...newMember,
                task: event.target.value
            };
        });
    };
    const submitHandler = (event) => {
        event.preventDefault();
        if (newMember.task.trim().length === 0) {
            setIsValid(false);
            return;
        }
        const newListOfTasks = {
            task: newMember.task,
        }
        props.onSubmitData(newListOfTasks);
    }
    return (
        <div>
            <form className='FormClassPro' onSubmit={submitHandler}>
                <FormControl className={!isValid && 'InvalidClass'}>
                    <label>Task:</label>
                    <input type='text' onChange={taskChangeHandler}></input>
                </FormControl>
                <button className='BtnClass' type='submit'>Add Task</button>

            </form>
        </div>
    );
}

export default FormPage;