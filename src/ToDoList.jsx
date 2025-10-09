 import { useState } from "react";

  const ToDoList = () => {

    const[tasks,setTasks]=useState(["Eate BreakFast","take a shower","walk the dog"]);
    const[newTask,setNewTask] = useState("");

   function handleInputChange(e){
                       
   setNewTask(e.target.value);
   
   }
function handleKeyDown(e) {
    if (e.key === "Enter") {
      addTasks(e);
    }
  }
   function addTasks(e){
       e.currentTarget.blur();
       if(newTask.trim() !==""){
       setTasks([...tasks,newTask]);
       setNewTask("");}
   }

   function deleteTask(e,idx){
     e.currentTarget.blur();
     const updatedTasks=tasks.filter( (_,i) => i !== idx);
     setTasks(updatedTasks);
   }

   function moveTaskUp(e,idx){
    e.currentTarget.blur();
    if(idx > 0){
      const updatedTasks=[...tasks];
      [updatedTasks[idx],updatedTasks[idx-1]]=[updatedTasks[idx-1],updatedTasks[idx]]

    setTasks(updatedTasks)
    } 
   } 

   function moveTaskDown(e,idx){
    e.currentTarget.blur();
    if(idx < tasks.length-1){ 
      const updatedTasks=[...tasks];
      [updatedTasks[idx],updatedTasks[idx+1]] 
       =  
      [updatedTasks[idx+1],updatedTasks[idx]]

      setTasks(updatedTasks)
    }
   }
   return(
     <div className="w-[500px] bg-cyan-500 p-5 flex flex-col items-center">
        <h1 className="font text-[24px] leading-relaxed">To-Do-List</h1>
        <div>
        <input 
        type="text"  
        className="border-2 p-1 m-4 outline-none"
        value={newTask}
        onChange={(e)=>handleInputChange(e)}
        onKeyDown={handleKeyDown}
        /> 
        <button 
        onClick={(e)=>addTasks(e)}
        className="px-6 py-2 rounded-[5px] bg-gradient-to-bl from-blue-500 to-purple-500 focus:scale-92">Add</button>
        </div>
        <ol>
          {tasks.map((task,idx)=><li key={idx}
          className=" bg-gradient-to-l from-blue-900/90 to-purple-900  p-4 rounded-[5px] m-2">
            <span className="text-[17px]">
              {task}
            </span>
            <button
             className="p-2 px-4 m-2 rounded-[4px] bg-gradient-to-tr from-red-400 to-red-600 hover:bg-none bg-red-600 focus:scale-92"
             onClick={(e)=>deleteTask(e,idx)}
             >delete</button>
             <button className="m-2 text-[20px] bg-gradient-to-br from-green-400 to-green-600 p-1 px-2 rounded-[5px] shadow-2xl shadow-green-500 hover:bg-none bg-green-600 focus:bg-green-700 focus:outline-none focus:scale-92"
             
               onClick={(e) => moveTaskUp(e,idx)}>👆</button>
               <button className="text-[20px] bg-gradient-to-tr from-red-600 to-yellow-500  p-1 px-2 rounded-[5px] shadow-lg shadow-yellow-500 hover:bg-none bg-orange-600 focus:bg-red-500 focus:outline-none focus:scale-92"
               onClick={(e) => moveTaskDown(e,idx)}>👇</button>
            
          </li>)}
        </ol>
     </div>
   )
 }

 export default ToDoList;
 
