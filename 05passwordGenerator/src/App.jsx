import { useState,useCallback,useEffect,useRef } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numbers, setNumbers] = useState(false)
  const [characters, setCharacters] = useState(false)
  const [password, setPassword] = useState("")


  //useCallback hook (for optimisation in react)
  const passwordGenerator = useCallback(()=>{
    let pass =""
    let str ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numbers) str += "0123456789"
    if(characters) str += "!@#$%^&*()~`_-+="

    for (let i = 0; i < length; i++) {
      const char = str[Math.floor(Math.random() * str.length)]
      pass += char
    }
    setPassword(pass)
  },[length,numbers,characters,setPassword])


  const copyPasswordToClipboard =useCallback (()=>{
    passwordRef.current?.select()
    // passwordRef.current?.setSelectionRange(0,3)
    window.navigator.clipboard.writeText(password)
  },[password])


  // useEffect hook (actual running of function on any change in state)(it is also used when the page is first loaded)
  useEffect(()=>{
    passwordGenerator()
  },[length,numbers,characters,passwordGenerator])


  // useRef hook (used to give reference)(here used for copying the give length of text in clipboard)
  const passwordRef = useRef(null)


  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700'>
        <h1 className='text-white text-center my-3'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input className='outline-none w-full py-1 px-3' type="text" placeholder='password' value={password} readOnly ref={passwordRef} />
        <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0' onClick={copyPasswordToClipboard}>Copy</button>
      </div>

      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input type="range" min={4} max={20} value={length} className='cursor-pointer' onChange={(e)=>{setLength(e.target.value)}} />
          <label >Length :{length}</label>
        </div>

        <div className='flex items-center gap-x-1'>
          <input type="checkbox" id="numberInput" defaultChecked={numbers} onChange={()=>{
            setNumbers((prev)=> !prev);
          }} />
          <label htmlFor="numberInput">Numbers</label>
        </div>

        <div className='flex items-center gap-x-1'>
          <input type="checkbox" id="charInput" defaultChecked={characters} onChange={()=>{
            setCharacters((prev)=> !prev);
          }} />
          <label htmlFor="charInput">Characters</label>
        </div>
      </div>
      </div>
      
    </>
  )
}

export default App
