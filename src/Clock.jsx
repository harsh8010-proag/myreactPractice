import { useState,useEffect } from "react";
import img from './assets/coder.jpg'

function Digitalclock(){

const [time,setTime] =useState(new Date());

useEffect(()=>{
    const intervalid = setInterval(()=>{
        setTime(new Date());        
    }, 1000);

    return ()=>{
        clearInterval(intervalid);
    }
},[]);

function formation(){
    let hours = time.getHours();
    const minutes =time.getMinutes();
    const seconds =time.getSeconds();
    const maridiem =hours >= 12 ?"PM" :"AM";

    hours = hours % 12 || 12 ;

    return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${maridiem}` ;
}

function padZero(number){
    return (number < 10 ? "" :"")+number;
}
    return(
        
    <div 
    style={{ backgroundImage:`url(${img})`,
    height: "200px",
    backgroundSize: "cover",
}}
    className="h-[100px] w-[500px] flex justify-start items-center">
    <div>
    <span className="ml-10 text-[30px]">{formation()}</span> 
    </div>       
    </div>
        
    )
}

export default Digitalclock;