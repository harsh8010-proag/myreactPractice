import { useState } from "react";

function Colorpicker(){

    const [color,setcolor]=useState("#FFFFFF");

    function handleColorchange(e){
        setcolor(e.target.value)
    }

const textColor=color.toLocaleLowerCase() === "#ffffff" ?"black" :"white";
 return(
        <div className="flex flex-col items-center gap-8">
              <h1>Color Picker</h1>
        <div style={{backgroundColor:color,
                     color:textColor,
                   }}
                    className="h-[150px] w-[150px] rounded-[5px] p-4 text-center flex items-center border-4 border-blue-400 ">
            <p> Color : {color}</p>
            
        </div>
        <div className="flex items-center gap-5">
        <leble> 
          select a color :
        </leble>
        <input type="color" value={color} onChange={handleColorchange} className="border-2 border-cyan-500 rounded-[5px]"/>
        </div>
        </div>

    )
}


export default Colorpicker;