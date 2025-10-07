import { useState } from "react"

const Counter = () => {

let [count,setCount]=useState(0);

   const incHandlerClic=(e)=>{
    setCount(c=>c+1);
    setCount(d=>d+2);
    // setCount(count=>count+1);
    }

  const dicHandlerClic=(e)=>{
    setCount(c=>c-1);
    setCount(d=>d-1);

  }

    const resHandlerClic=(e)=>{
    setCount(0)

  }



  return (

     <div className="h-[200px] flex items-center justify-center flex-col">
        <h1 className="text-[60px] ">{count}</h1>
        <div className="flex gap-5">

            <button onClick={dicHandlerClic} className="px-3 py-2  bg-gradient-to-bl from-blue-500 to-purple-500 rounded-[5px]">decrese</button>
            <button onClick={resHandlerClic} className="px-3 py-2  bg-gradient-to-bl from-blue-500 to-purple-500 rounded-[5px]">reset</button>
            <button onClick={incHandlerClic} className="px-3 py-2  bg-gradient-to-bl from-blue-500 to-purple-500 rounded-[5px]">increse</button>
        </div>
</div>
  )
}

export default Counter