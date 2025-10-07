import { list } from "postcss";
import { useState } from "react";

function MyCcomponent(){
    const [cars,setCars]=useState([]);
    const [carYear,setCarYear]=useState(new Date().getFullYear());
    const [carMake,setCarsMake]=useState("");
    const [carModel,setCarModel]=useState("");

    function handleAddCar(){
        const newCar ={
            year:carYear,
            make:carMake,
            model:carModel
        };

        setCars(c => [...c,newCar])
    }
    function handleRemoveCar(idx){
        {cars.filter((element,i)=> i!==idx )}
    }
    function handleYearChange(e){
        setCarYear(e.target.value);
    }
     function handleMakeChange(e){
        setCarsMake(e.target.value);
    }
     function handleModelChange(e){
        setCarModel(e.target.value);
    }
return(
    <div>
        <h2>List of Car Object</h2>
        <ul >
        {cars.map((car,idx)=><li key={idx} onClick={handleRemoveCar(idx)}>{car.year} {car.make} {car.model} </li>)}
        </ul>
    <input className="mx-4 p-2 bg-cyan-400 border-none outline-none text-[16px] text-purple-800 rounded-[5px] hover:bg-cyan-300" 
           value={carYear}
           type="number"
           onChange={handleYearChange}
        />
        <br />
    <input className="m-4 p-2 bg-cyan-400 border-none outline-none text-[16px] text-purple-800 rounded-[5px] hover:bg-cyan-300"
           value={carMake}
           type="text"
           placeholder="enter car make"
           onChange={handleMakeChange}/>
        <br />
    <input className="m-4 p-2 bg-cyan-400 border-none outline-none text-[16px] text-purple-800 rounded-[5px] hover:bg-cyan-300"
           value={carModel}
           type="text"
           placeholder="enter car model"
           onChange={handleModelChange}/>
           <br />
    <button
    onClick={handleAddCar}
    className='p-2 mx-4 rounded-[5px] bg-gradient-to-bl from-cyan-400 to-blue-700 transition-colors duration-1500 ease-in-out hover:from-blue-700  hover:to-purple-400 focus:scale-95 focus:bg-blue-700 focus:shadow-inner
    active:scale-90'>add car</button>     
    </div>
)


}

export default MyCcomponent;