import { useContext } from 'react';
import ComponantD from './ComponantD';
import { UserContext } from './ComponantA';

function ComponantC( ){

const user =useContext(UserContext);
  return (
<div className='h-[250px] flex w-full border-red-500 border-2 m-2'>
            <h1>Componant C</h1>
            <h2>{`Hellow again ${user}`}</h2>
            <ComponantD  />
             

    </div>
  )
}

export default ComponantC;