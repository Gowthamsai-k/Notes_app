import {useState , useEffect , createContext, useContext} from 'react'
import {medContext} from '../App.jsx'

export default function Inventory()
{
   const {med , setMed} = useContext(medContext)
    const [form , setForm] = useState({
        id:Date.now(),
        name : "" ,
        desc : "",
    })

    const handleChange = (e) =>{
        setForm({...form , [e.target.name]: e.target.value})
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        setMed([...med , form]);
        setForm({
            id:Date.now(),
            name :"",
            desc: ""
        })
    }
 

   

    return(
        <medContext.Provider value = {{med , setMed}}>
            
        <h1>Medicine Inventory</h1>
        <form onSubmit = {handleSubmit}>
            <label>Enter the name of the medicine</label>
            <input 
            type = "text"
            name = "name"
            value = {form.name}
            onChange = {handleChange} required = {true}></input>

            <br />
            <br />
            <label>Enter the Description of medicine</label>
            <input 
            type = "text"
            name = "desc"
            value = {form.desc}
            onChange = {handleChange} required = {true} ></input>

            <br />
            <br />

            <button type = "submit">Add Medicine</button>

        </form>
        {/* <div>
            {
                med.map((item , index) => (
                    <ol key = {index}>
                        <li>Name : {item.name}</li>
                        <li>Description : {item.desc}</li>
                        <li>Created at {item.id}</li>
                        <button onClick = {() =>{handleDelete(item.id)}}>Delete Medicine</button>
                    </ol>
                ))
            }
        </div> */}

        </medContext.Provider>
    )
}