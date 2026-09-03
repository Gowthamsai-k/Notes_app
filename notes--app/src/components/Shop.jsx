import {useContext , useEffect } from 'react'
import {medContext} from '../App.jsx'

export default function Shop()
{
    const {med } = useContext(medContext);
       
    return(
        <>
        <div>
            {
                med.map((item , index) => (
                    <ol key = {index}>
                        
                        <li>Name : {item.name}</li>
                        <li>Description : {item.desc}</li>
                        <li>Created at {item.id}</li>
                    
                    </ol>
                ))
            }
        </div>
        </>
    )
}