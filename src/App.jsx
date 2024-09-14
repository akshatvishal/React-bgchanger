import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
  const [color, setcolor] = useState("black")
  const [molor, metcolor] = useState("white")
  const [dolor, retcolor] = useState("white")
  const [glow, setGlow] = useState(true); 
  return (
    <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
      <div style={{color: molor}} className=" text-center flex justify-center items-center h-screen text-5xl font-normal">
        <span style={{color : dolor}} className={`mr-2 ${glow ? 'text-glow' : ''}`}>"Click"</span> to change backround</div>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-4 py-2 rounded-3xl">
          <button onClick={()=>{setcolor("Red")
            metcolor("#2E294E")
            retcolor("#F0BCD4")
          }} style={{backgroundColor:"red"}} className="outline-none px-4 py-1 rounded-full text-white shadow-lg">Red</button>
          <button onClick={()=>{setcolor("#3C896D")
             metcolor("#BEB0A7")
             retcolor("#BDC667")
          }} style={{backgroundColor:"#3C896D"}} className="outline-none px-4 py-1 rounded-full text-white shadow-lg">Green</button>
          <button onClick={()=>{setcolor("#51BBFE")
             metcolor("#006E90")
             retcolor("#102E4A")
          }} style={{backgroundColor:"#51BBFE"}} className="outline-none px-4 py-1 rounded-full text-white shadow-lg">Blue</button>
          <button onClick={()=>{setcolor("#7C238C")
             metcolor("#ECFEE8")
             retcolor("#2E382E")
          }} style={{backgroundColor:"#7C238C"}} className="outline-none px-4 py-1 rounded-full text-white shadow-lg">purple</button>
        </div>
      </div>
    </div>
  )
}

export default App
