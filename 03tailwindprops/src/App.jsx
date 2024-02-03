import { useState } from 'react'
import './App.css'
import Card from './Components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className="text-2xl font-bold underline bg-sky-500 shadow-xl text-black p-4 m-2 rounded-xl">
      Tailwind
    </h1>
    <div className=''>
      <div className='w-1/4 flex-row'>
        <div>
          <img src='https://img.freepik.com/free-vector/cute-astronaut-riding-rocket-waving-hand-cartoon-icon-illustration-science-technology-icon-concept_138676-2130.jpg?w=740&t=st=1695906595~exp=1695907195~hmac=9f6edb7843a1f1f44bf218ba156b61f5c28393505232b581884fb05b5d35db50' />
        </div>
        <div>
          <div>
            Fly with me!
            <p>to moon and back </p>
          </div>
        </div>
      </div>
    </div>
    <h1 className="text-2xl text-yellow-950 bg-yellow-500 m-3 rounded-xl p-4 grid place-content-center">Hello Folks</h1>
    <Card username="Harish" btn="join me"/>
    <Card username="Mark" btn="follow me"/>
    </>
  )
}

export default App
