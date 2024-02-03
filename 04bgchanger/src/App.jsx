import { useState } from 'react'
import './App.css'

function App() {

  const [color,setColor] = useState("cyan")
  return (
    <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>

      <div className='fixed bottom-6 flex flex-wrap justify-center inset-x-0' >
        <div className='flex flex-wrap justify-center gap-3 rounded-3xl shadow-2xl bg-white px-3 py-2'>
          <button className='outline-none px-4 py-1 text-slate-200 rounded-full shadow-2xl' style={{backgroundColor:"red"}} onClick={()=>setColor("red")}>Red</button>
          <button className='outline-none px-4 py-1 text-slate-200 rounded-full shadow-2xl' style={{backgroundColor:"green"}} onClick={()=>setColor("green")}>Green</button>
          <button className='outline-none px-4 py-1 text-slate-200 rounded-full shadow-2xl' style={{backgroundColor:"blue"}} onClick={()=>setColor("blue")}>Blue</button>
          <button className='outline-none px-4 py-1 rounded-full shadow-2xl' style={{backgroundColor:"yellow"}} onClick={()=>setColor("yellow")}>Yellow</button>
          <button className='outline-none px-4 py-1 text-slate-200 rounded-full shadow-2xl' style={{backgroundColor:"black"}} onClick={()=>setColor("black")}>Black</button>
          <button className='outline-none px-4 py-1 text-slate-200 rounded-full shadow-2xl' style={{backgroundColor:"purple"}} onClick={()=>setColor("purple")}>Purple</button>
          <button className='outline-none px-4 py-1 rounded-full shadow-2xl' style={{backgroundColor:"pink"}} onClick={()=>setColor("pink")}>Pink</button>
          <button className='outline-none px-4 py-1 text-slate-200 rounded-full shadow-2xl' style={{backgroundColor:"grey"}} onClick={()=>setColor("grey")}>Grey</button>
          <button className='outline-none px-4 py-1 text-slate-200 rounded-full shadow-2xl' style={{backgroundColor:"orange"}} onClick={()=>setColor("orange")}>Orange</button>
        </div>
      </div>
    </div>
  )
}

export default App
