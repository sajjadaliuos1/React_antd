import { useState } from 'react'


function App() {
 const [colours,setColours]= useState("olive");

  return (
   <div className='w-full h-screen duration-200'
   style={{backgroundColor : colours}}>
<div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
<div className='fixed flex  flex-wrap justify-center bg-white gap-3 shadow-lg px-3 py-2 rounded-3xl' >
  <button  onClick={()=>setColours("Red")}className='outline-none px-4 py-1 rounded-full shadow-lg
   text-white'style={{backgroundColor:"red"}}>Red</button>
    <button onClick={()=>setColours("Green")} className='outline-none px-4 py-1 rounded-full shadow-lg
   text-white'style={{backgroundColor:"green"}}>Green</button>
    <button  onClick={()=>setColours("Blue")} className='outline-none px-4 py-1 rounded-full shadow-lg
   text-white'style={{backgroundColor:"blue"}}>Blue</button>
    <button  onClick={()=>setColours("Gray")}className='outline-none px-4 py-1 rounded-full shadow-lg
   text-white'style={{backgroundColor:"Gray"}}>Gray</button>
    <button onClick={()=>setColours("Yellow")} className='outline-none px-4 py-1 rounded-full shadow-lg
   text-white'style={{backgroundColor:"yellow"}}>Yellow</button>
    <button  onClick={()=>setColours("pink")} className='outline-none px-4 py-1 rounded-full shadow-lg
   text-white'style={{backgroundColor:"pink"}}>Pink</button>
</div>
</div>

   </div>
  )
}

export default App
