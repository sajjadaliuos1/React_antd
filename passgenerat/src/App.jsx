import { useCallback, useEffect, useState,useRef } from 'react'


function App() {
  const [length,  setLength] = useState(8);
  const [namberallow,  setnamberAllow] = useState(false);
  const [chartallow,  setChartAllow] = useState(false);
  const [password,setPassword] =useState("");
  const passwordRef =useRef(null);
  const PasswordGenerater =useCallback(()=>{
let pass= ""
let str = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz";
 if (namberallow) str += "0123456789"
 if (chartallow) str += "!@#$%^&*()_+~`"
 for (let index = 1; index <= length; index++) {
  const char =Math.floor(Math.random()*str.length +1)
  pass += str.charAt(char);   

 } 
setPassword(pass)
} ,[length,chartallow,namberallow,setPassword]);

const passwordCopyClipb = useCallback(()=>{
  
  passwordRef.current.select(); 
  window.navigator.clipboard.writeText(password)
},[password])

useEffect(() => {
  PasswordGenerater(); // Correct function name
}, [length, namberallow, chartallow, PasswordGenerater]); // Corrected dependencies

  return (
    <>

    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700'>
      <h1 className='text-white text-center my-3'>Password Generater</h1>
<div className='flex shadow rounded-lg overflow-hidden md-4'>
<input type="text" value={password}  
className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 "
classNam e='outline-none w-full px-1 py-3'
placeholder='
password' readOnly
ref={passwordRef}/>
<button onClick={passwordCopyClipb} className='bg-blue-700 outline-none text-white py-0.5 px-3 shrink-0'>Copy</button>
</div>
<div className='flex text-sm gap-2'>
  <div className='flex items-center gap-x-1'>
<input type="range"
min={6}
max={100}
value={length}
className='cursor-pointerrs'
onChange={(e)=>{setLength(e.target.value)}}
/>
<label>Length:{length}</label>
  </div>
  <div className='flex items-center gap-x-1'>
    <input type='checkbox' defaultValue={namberallow} id='namberinput'
    onChange={()=> {setnamberAllow((prev)=> !prev); }}></input>
<label htmlFor='Inputnamber'>Nambers</label>

  </div>
  <div className='flex items-center gap-x-1'>
    <input type='checkbox' defaultValue={chartallow} id=''
    onChange={()=> {setChartAllow((prev)=> !prev); }}></input>
<label htmlFor='InputChart'>Characters</label>

  </div>
</div>
    </div>
    </>
  )
}

export default App
