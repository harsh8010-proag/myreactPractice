 import React, { useEffect, useRef, useState } from 'react'
 
 const Stop = () => {

const [isRunning, setIsRunning]=useState(false);
const [elapsedTime,setElapsedTime]=useState(0);
const intervalidRef=useRef(null);
const startTimeRef =useRef(0);

useEffect(() =>{

  if(isRunning){
     intervalidRef.current = setInterval(()=>{
      setElapsedTime(Date.now() - startTimeRef.current);
    },10);
  }
  return () =>{
    clearInterval(intervalidRef.current);
  }
},[isRunning]);

  function start(){
    setIsRunning(true);
   
    startTimeRef.current=Date.now() - elapsedTime;
    console.log(startTimeRef.current);
}

  function stop(){
    setIsRunning(false);  

  }

  function reset(){
  setElapsedTime(0);
  setIsRunning(false);
  }

  function formatTime(){
  let houers =Math.floor(elapsedTime/(1000 * 60 * 60))
  let minutes =Math.floor(elapsedTime/(1000 * 60) % 60)
  let seconds =Math.floor(elapsedTime /(1000) % 60);
  let millisecond= Math.floor( (elapsedTime % 1000)/10)

  houers=String(houers).padStart(2,'0');
  minutes=String(minutes).padStart(2,'0');
  seconds=String(seconds).padStart(2,"0");
   millisecond=String(millisecond).padStart(2,"0");
  


  // let milliseconds=Math.floor((elapsedTime % 1000)/10);
  return `${minutes} : ${seconds} :${millisecond}` 

    }
   return (
     <div className='w-[300px] p-2 border-2 border-purple rounded-[5px]'>
      <p className='text-4xl text-center'>{formatTime()}</p>
      <div className='flex gap-2 justify-center my-2'>
        <button
        onClick={start}
        className='bg-green-500 p-2 rounded-[5px]'>Start</button>
        <button 
        onClick={stop}
        className='bg-red-500 p-2 rounded-[5px]'>Stop</button>
        <button
        onClick={reset}
        className='bg-blue-500 p-2 rounded-[5px]'>Reset</button>
      </div>

     </div>
   )
 }
 
 export default Stop;