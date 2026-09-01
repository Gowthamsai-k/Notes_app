import { useState } from "react";
import  axios  from 'axios'
export default function App()
{
  const [form , setForm] = useState({
    task : "",
    description: "" ,
    active : true
  })

  const handleChange = (e) =>{
    setForm({
      ...form , [e.target.name] : e.target.value
    })
  }
  const handleSumbit = (e) =>{

    e.preventDefault()
    console.log(form.task);
    console.log(form.description)
    axios.post('https://symmetrical-succotash-jj4wjp497r94cv7g-3000.app.github.dev/save',form
    )  .then(response => console.log(response.data))
  .catch(error => console.error(error))
  }
  return(
    <>
    <h1>Notes App</h1>
    <form onSubmit={handleSumbit}>
      <label>Enter task</label>

      <input type = "text" 
      onChange ={handleChange}
      name = "task" 
      value = {form.task}>
       </input>

      <br />
      <label>Enter description of the task</label>

      <input type = "text" 
      onChange = {handleChange} 
      name = "description" 
      value = {form.description}>
       </input>
      <br />

      <button type = "submit">Add Task</button>
    </form>
    </>
  )
}