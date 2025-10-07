import { useState } from "react";

const Button = () => {
  let [val,setval]=useState(0);
  let [text,settext]=useState("Click me😊")

let handlerClick=(e,name)=>{
  //  console.log("OUCH!");
   e.currentTarget.blur();

 
   if(val%2===0){
        setval(val+1);
        console.log(name,`you click me ${val+1} time`);
        settext("Click me😊")
   }else{
      setval(val+1);
    console.log(name,"stop clicking me");
    settext("OUCH!🤕")
   }
 
}
  return (
    <button    
    className='p-2 m-2 rounded-[5px] bg-gradient-to-bl from-cyan-400 to-blue-700 transition-colors duration-1500 ease-in-out hover:from-blue-700  hover:to-purple-400 focus:scale-95 focus:bg-blue-700 focus:shadow-inner
    active:scale-90'
    onClick={(e)=>handlerClick(e,"Vaishnavi")} 
    >{text}</button>
  );
}

export default Button;