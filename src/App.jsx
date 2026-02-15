import { useState, useCallback, useEffect,useRef } from 'react'
import './App.css'

function App() {
  // This will be used for the scrather(the 'seek' bar for the length of the password)
  const [length, setLength] = useState(8)
  // These are for the check boxes
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  // Main part for seeting up the password in the field area.
  const [password, setPassword] = useState('')

const generatePassword = useCallback(() => {
  let pass = ""
  let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

  // Now if the numbers allowed is checked then append the str with numbers
  if(numberAllowed) str += "0123456789"
  // Now if the SP.characters are allowed is checked then append the str with numbers
  if(charAllowed) str += "!@#$%^&*()_+"
  
  
  // A for loop that will be used to run over the Random string "str"
  for(let i = 1; i < length; i++){
    // Basically a formula to generate a random string length..
    const randomNumber = Math.floor(Math.random() * str.length + 1) //floor will round up the deciaml value generated inside the () 
    pass += str.charAt(randomNumber)
  }
  setPassword(pass)
}, [length, numberAllowed, charAllowed])

// The useCallBack takes 2 things -> 1. The function 2. dependencies(Maltab yeh properties is case mein change nai honi chahiye)


// Now the use of useEffect.. Run the code when the following dependencies change..
useEffect(() => {
  generatePassword()
}, [length, numberAllowed, charAllowed])


//Method to copy to users clipboard.

const copyToClipboard = () => {
  window.navigator.clipboard.writeText(password);
  passwordRef.current?.select();
}

// Creating password's reference

const passwordRef = useRef(null);


  return (
    <>

    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-900 '>
       <h1 className='text-white text-center my-3'>Password Generator</h1>

             <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input type="text" value={password} className='bg-white outline-none w-full py-1 px-3' ref={passwordRef} readOnly placeholder='Password' />
        <button onClick={copyToClipboard} className='bg-blue-700 px-3 py-0.5 text-white outline-none shrink-0'>Copy</button>
       </div>
       <div className='flex items-center gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input type="range"
           name=""
           id=""
           min={6}
           max={100}
           value={length}
           className='cursor-pointer'
           onChange={(e) => setLength(e.target.value)} />
           <label htmlFor="length" className='text-white'>Length: {length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox" 
          name=""
          id=""
          defaultChecked={numberAllowed}
          onChange={() => {setNumberAllowed((prev) => !prev)}} />
        <label htmlFor="number" className='text-white'>Numbers</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox" 
          name=""
          id=""
          defaultChecked={charAllowed}
          onChange={() => {setCharAllowed((prev) => !prev)}} />
        <label htmlFor="charInput" className='text-white'>Character</label>
        </div>
       </div>
    </div>
  
    </>
  )
}

export default App
