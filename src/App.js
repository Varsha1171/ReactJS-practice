import FormPage from "./components/FormPage";
import List from "./components/List";
import React, { useState } from "react";
function App() {
  const list = [
    { task: "Design" },
    { task: "Coding" }
  ]

  const [newList,setNewList]=useState(list);
  const submitHandler=(newMember)=>{
     setNewList(newList=>{
      return [...newList,newMember];
    });
  }
  console.log(newList);
  return (
    <div className="App">
      <FormPage onSubmitData={submitHandler}></FormPage>
      <List list={newList}></List>
    </div>
  );
}
export default App;
// To use styled componet in react 
// add the file into component.js 