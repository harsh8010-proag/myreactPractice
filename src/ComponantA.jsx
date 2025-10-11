import {   useState ,createContext } from "react" ;
import ComponantB from "./ComponantB";


export const UserContext=createContext();

function ComponantA() {

  const[user,setUser] =useState("BroCode");

  return (
    <div className='h-[250px] flex w-full border-red-500 border-2 m-2'>
            <h1>Componant A</h1>
            <h2>{`Hello ${user}`}</h2>

            <UserContext.Provider value={user}>
            <ComponantB user={user}/>
            </UserContext.Provider>
             

    </div>
  )
}

export default ComponantA;