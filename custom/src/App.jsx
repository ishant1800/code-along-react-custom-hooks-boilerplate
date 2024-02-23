import { useState } from 'react'
import './App.css'
import useStorage from './UseStorage'

function App() {
  const [inputValue,setInputValue]=useState('')
  const [storageValue,setStorageValue]=useStorage(inputValue)
  const passInputValue=(e)=>{
    setInputValue(e.target.value)
    setStorageValue(e.target.value)
  }
  return (
    <>
    <input type="text"defaultValue={sessionStorage.getItem('InputValue')} onChange={passInputValue}/>
    {/* {inputValue}{storageValue}{sessionStorage.getItem("InputValue")}{localStorage.getItem("InputValue")} */}
    </>
  )
}

export default App