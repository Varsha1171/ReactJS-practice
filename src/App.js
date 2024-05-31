import FormPage from "./components/FormPage";
import List from "./components/List";
import React ,{useState} from "react";
function App() {
  const [newTask,setNewTask]=useState('');
  const formData=(props)=>{
      setNewTask(props.newTask);
  };
  return (
    <div className="App">
      <FormPage onFormData={formData}/>
      <List newValue={newTask}/>
    </div>
  );
}

export default App;
