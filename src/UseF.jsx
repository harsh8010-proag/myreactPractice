import { useEffect, useRef, useState } from "react";

 
 
 const UseF = () => {
   
const inputRef1= useRef();
const inputRef2= useRef();
const inputRef3= useRef();
 
 useEffect(()=>{
    console.log("COMPONRENT RENDERD");
    // console.log(inputRef);
 })

 const handleClick=()=>{
//  inputRef.current.focus();
 inputRef1.current.style.backgroundColor ="yellow"; 
 inputRef1.current.style.color ="red";
  inputRef2.current.style.backgroundColor =""; 
 inputRef2.current.style.color ="";
 
  inputRef3.current.style.backgroundColor =""; 
 inputRef3.current.style.color ="";
  }
  const handleClick2=()=>{
//  inputRef.current.focus();
  inputRef2.current.style.backgroundColor ="yellow"; 
 inputRef2.current.style.color ="red";
  inputRef1.current.style.backgroundColor =""; 
 inputRef1.current.style.color ="";
  inputRef3.current.style.backgroundColor =""; 
 inputRef3.current.style.color ="";
  }
   const handleClick3=()=>{
//  inputRef.current.focus();
  inputRef3.current.style.backgroundColor ="yellow"; 
 inputRef3.current.style.color ="red";
  inputRef2.current.style.backgroundColor =""; 
 inputRef2.current.style.color ="";
   
  inputRef1.current.style.backgroundColor =""; 
 inputRef1.current.style.color ="";
  }
   
    return (
        <div>     
     <button 
     onClick={handleClick}
     className="p-2 bg-blue-600 rounded-[5px]"> Click me!
     </button>
     <input
      ref={inputRef1}
      className="p-2 bg-cyan-500 m-2 rounded-[5px] outline-none"/>

           <button 
     onClick={handleClick2}
     className="p-2 bg-blue-600 rounded-[5px]"> Click me!
     </button>
     
     <input
      ref={inputRef2}
      className="p-2 bg-cyan-500 m-2 rounded-[5px] outline-none"/>

           <button 
     onClick={handleClick3}
     className="p-2 bg-blue-600 rounded-[5px]"> Click me!
     </button>
     <input
      ref={inputRef3}
      className="p-2 bg-cyan-500 m-2 rounded-[5px] outline-none"/>

     </div>

   ); 
 }
 
export default UseF; 