import React,{useState} from "react";
const List=(props)=>{
        const listOfTask=[
                {task:"coding for website"},
                {task:"analysis of website"},
        ];
       let tasks=listOfTask.map((member,index)=>
       <h4 key={index}>{member.task}</h4>
            );

            const[alistOfTask,setListOfTask]=useState(tasks)
        const updatedListOfTask=(props)=>{
            setListOfTask((alistOfTask)=>{
                return [...alistOfTask,props];
            });
        }
        return (
            <div>
                {alistOfTask}
            </div>
        );
};
export default List;