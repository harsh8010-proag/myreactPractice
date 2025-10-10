
import { useState } from "react";

function Flist(){


    const [foods,setFoods]=useState(["apple","Orange","pineapplw","babnana;"])

    function handelAddFood(e){
        const newFood=document.getElementById("foodInput").value;
        document.getElementById("foodInput").value="";

        if(newFood.trim() !==""){
       setFoods(f => [...f,newFood]);}


    //    setFoods(foods.push=newFood)
    }

    function handelRemoveFood(idx){
     setFoods(foods.filter((element,i) => i !== idx))   
    }

    return(
        <div>
            <h2>List of food</h2>
            <ul className="list-disc ml-5">
                {foods.map((food,idx)=>
                <li key={idx} onClick={() => handelRemoveFood(idx)}>{food}</li>)}
            </ul>
            <input 
            id="foodInput"
            placeholder="Enter food name"
            className="mx-4  p-2 bg-cyan-400 border-none outline-none text-[16px] text-purple-800 rounded-[5px] hover:bg-cyan-300" />
            <div className="flex">
                <button
                onClick={handelAddFood}
                 className='p-2 m-2 rounded-[5px] bg-gradient-to-bl from-cyan-400 to-blue-700 transition-colors duration-1500 ease-in-out hover:from-blue-700  hover:to-purple-400 focus:scale-95 focus:bg-blue-700 focus:shadow-inner
    active:scale-90'>add</button>
                <button className='p-2 m-2 rounded-[5px] bg-gradient-to-bl from-cyan-400 to-blue-700 transition-colors duration-1500 ease-in-out hover:from-blue-700  hover:to-purple-400 focus:scale-95 focus:bg-blue-700 focus:shadow-inner
    active:scale-90'>remove</button>
            </div>
        </div>
    )


}

export default Flist;