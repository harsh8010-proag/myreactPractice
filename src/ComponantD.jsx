 import { useContext } from "react";
 import { UserContext } from "./ComponantA";
 

function ComponantD( ) {

 const user = useContext(UserContext);

  return (
    <div className='h-[250px]   w-full border-red-500 border-2 m-2'>
            <h1>Componant D</h1>
            <h2>{`Bay ${user}`}</h2>
             

    </div>
  )
}

export default ComponantD;