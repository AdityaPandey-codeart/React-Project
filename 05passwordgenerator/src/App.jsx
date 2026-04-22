import { useCallback, useState, useEffect, useRef } from 'react'

import './App.css'
import { useEffect } from 'react';

function App() {
  const [Length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("")
  const paswordRef = useRef(null)
  const passwordGenerator = useCallback (() => { 
    let pass =""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*()-_+={}[]|\;:"

    
    for (let i = 0; i < Length; i++) {
      let char = Math.floor(Math.random() * str.length)
      pass += str.charAt(char)
      
    }
    setPassword(pass)
  } ,[Length,numberAllowed,charAllowed,setPassword])
   useEffect(() => {passwordGenerator()

   },[Length,numberAllowed,charAllowed,passwordGenerator])




  return (
   <div className = "w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-500 text-white-900">
    <h1 className='text-white text-center'> Password Generator</h1>
    <div className="flex shadow rounded-lg overflow-hidden mb-4 bg-white-200">
      <input
      type="text"
      value={password}
      className='outline-none w-full py-1 px-3 bg-white text-black'
      placeholder="Password"
      readOnly
      ref={passwordRef}
      />
      <button onClick={copyPasswordToClipboard}className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>
      
    </div>
    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input
        type="range"
        min={6}
        max={100}
        value={Length}
        className='cursor-pointer'
        onChange={(e) => {setLength(e.target.value)}}
        />
        <label>Length:{Length}</label>

      </div>
      <div className="flex items-center gap-x-1">
        <input
        type="checkbox"
        checked={numberAllowed}
        id="numberAllowed"
        onChange={() =>{
                  setNumberAllowed((prev) =>!prev);
        }}
        />
        <label htmlFor="numberInput">Numbers</label>
      </div>
       <div className="flex items-center gap-x-1">
        <input
        type="checkbox"
        checked={charAllowed}
        id="charAllowed"
        onChange={() =>{
                  setCharAllowed((prev) =>!prev);
        }}
        />
        <label htmlFor="charInput">Characters</label>
      </div>
    </div>
   </div>
  )
}

export default App
