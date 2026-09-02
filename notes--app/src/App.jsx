import {useState } from 'react'

export default function App()
{

  const [tasks , setTasks] = useState([])
  const [form , setForm] = useState({
    id :Date.now(),
    task : "", 
    desc : ""
  })

  const handleChange = (e) =>{
    setForm({...form , [e.target.name] : e.target.value})
  }

  const handleSubmit = (e) =>{
    e.preventDefault()
    setTasks([...tasks , form])
    setForm({
      id : Date.now(),
      task : "",
      desc : ""
    })
  }
  const handleDelete = (id) =>{
    setTasks(tasks.filter((item) => item.id != id))

  }

  return(
    <>
    <form onSubmit = {handleSubmit} >
      <label>Enter the task</label>
      <input type= "text" name = "task" value = {form.task} required = "true" onChange = {handleChange}></input>
      <br />
      <label>enter the task desc</label>
      <input type = "text" name = "desc" value = {form.desc} required = "true" onChange = {handleChange}></input>
      <br />
      <button type = "submit" >Add</button>
    </form>
    <div>
      {tasks.map((item , index) => (
        <ol key = {index}>
          <li>{item.task}</li>
          <li>{item.desc}</li>
          <button onClick = {() => {handleDelete(item.id)}}>Delete</button>
        </ol>
      ))}
      
      </div>
    </>
  )
}