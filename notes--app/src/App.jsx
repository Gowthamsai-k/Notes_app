import {useState } from 'react'
import Inventory from './components/Inventory.jsx'
import {createContext} from 'react';
import Shop from './components/Shop'

export const medContext = createContext(); 
export default function App()
{
  const [med , setMed] = useState([])

  return(
    <medContext.Provider value = {{med , setMed}}>
    <Inventory />
    <Shop />
    </ medContext.Provider >
  )
}