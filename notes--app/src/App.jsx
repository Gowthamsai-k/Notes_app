import {useState} from 'react';
import axios from 'axios';

export default function App()
{
  const [form , setForm] = useState({
    name : "",
    desc : ""
  });
  const [task , setTask] = useState([])

  const handleChange = (e) =>{
    setForm({...form , [e.target.name] : e.target.value})
  }

  const  handleSubmit = async (e) =>{
    e.preventDefault()
    try{
      const res = await axios.post("https://bookish-orbit-q79g759649j9344q5-3000.app.github.dev/tasks" , 
        form)
      console.log(res.data);
    }
    catch (e)
    {
      console.log("error making the call" , e);
    }
    setTask([...task , form])
    setForm({
      name : "" ,
      desc : ""
    })

  }
    return(
      <>
      <h1>Notes app</h1>
      <form onSubmit = {handleSubmit}>
        <label>Enter the task</label>
        <br />
        <input type = "text" name = "name" value = {form.name} onChange = {handleChange}></input>
        <br />
        <br />

        <label>Enter the description or additional notes of the task</label>
          <br />
          <br />
        <input type = "text" name = "desc" value = {form.desc} onChange = {handleChange}></input>
          <br />
          <br />
          <button type = "submit">Add task</button>
      </form>
      <div> 
        {
          task.map((item , index) =>(
            <ol key = {index}>
              <li>Name : {item.name}</li>
              <li>Desc : {item.desc}</li>
            </ol>
          ))
        }
      </div>
      </>
    )
  
}