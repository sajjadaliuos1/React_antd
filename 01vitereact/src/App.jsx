import { useEffect, useState } from 'react'



import index from './index.css'

function App() {
  let  [counter,setCounter]=useState(15);
//let count=15

// const Addvalue=()=>{
//   console.log("click",counter);
//   //counter=counter + 1;
//   if (counter < 20) {
//     setCounter(counter + 1);
//   }


// }
//  const subValue =()=>{
   
//   console.log("click",counter)
//   if (counter > 10) {
//     setCounter(counter - 1);
//   }
   
//  } 
  return (
   <>
   <h1 className='bg-green-400'>Counter value {counter}</h1>
   

   <button onClick={()=> { if (counter <20 )  { setCounter(counter+1);  } }}>Add Value</button>
   <br></br>
   <button onClick={()=> { if (counter > 0 )  { setCounter(counter-1);  } }}>Remove Value</button>
   </>
)
}
export default App
