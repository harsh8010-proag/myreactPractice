import React, { useState } from "react";

function MyComponent(){

    const [car,setCar] = useState({year:2024,
                                   make:"food",
                                   model:"Mustang"})
 function handleYearChange(e){
    setCar( car => ({...car,year:e.target.value}));
 
 }

 function handleMakeChange(e){
    setCar(car => ({...car,make:e.target.value}));
 }

function handleModelChange(e){
    setCar(car => ({...car,model:e.target.value}));
 }


return(<div>
    <p>Your favorit car is :{car.year} {car.make} {car.model}</p>
    <input type="number" value={car.year} onChange={handleYearChange} className="mx-4  p-2 bg-cyan-400 border-none outline-none text-[16px] text-purple-800 rounded-[5px] hover:bg-cyan-300 m-2"/>
    <br/>
    <input   value={car.make} onChange={handleMakeChange} className="mx-4  p-2 bg-cyan-400 border-none outline-none text-[16px] text-purple-800 rounded-[5px] hover:bg-cyan-300 m-2"/>
    <br/>
     <input   value={car.model} onChange={handleModelChange} className="mx-4  p-2 bg-cyan-400 border-none outline-none text-[16px] text-purple-800 rounded-[5px] hover:bg-cyan-300 m-2"/>
</div>)}


export default MyComponent;