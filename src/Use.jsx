import { useState,useEffect} from "react";

function MyUse(){
    const [count,setCount] =useState(0);
    const [color,setColor] =useState('green');

    useEffect(()=>{
        document.title=`Count: ${count} ${color}`;

        return()=>{
            //sume clenup code
        }

    },[count,color ])

    const addCount=()=>{
        setCount(c=>c+1);
    }

      const subtractCount=()=>{
        setCount(c=>c-1);
    }
function changeColor(){
    setColor(c => c === "green"? "red" : "green");
}


    return(
        <>

        <p style={{color:color}}>Count :{count}</p>
        <button onClick={addCount} className="bg-green-700 p-2 px-4 m-2 rounded-[5px]">add</button>
         <button onClick={subtractCount} className="bg-red-700 p-2 px-4 m-2 rounded-[5px]">subtract</button><br />
         <button onClick={changeColor} style={{backgroundColor:color}}className=" p-2 px-4 m-2 rounded-[5px]">Change Color</button>
          
        </>
    )
}

export default MyUse;