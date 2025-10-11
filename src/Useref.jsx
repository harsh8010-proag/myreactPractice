import { useEffect, useRef, useState, } from "react";

 
 function Useref(){
 const inputref =useRef(null);
 console.log(ref)


    useEffect(()=>{
        console.log('COMPONENT RENDRED')
        console.log(inputref)
    });


    function handleClick(){
        ref.current++;
        console.log(ref.current)
    }

    return(
        <>
        <button className="bg-blue-700" onClick={handleClick}>
            Click me!
        </button>
        <br />
        <input ref={inputref} className="bg-blue-700"/>
        </>
    )
 }

 export default Useref;


