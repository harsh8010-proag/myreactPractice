import React from 'react'
import ComponantD from './ComponantD';

function ComponantC( ){


  return (
    <div className='h-[250px] flex w-full border-red-500 border-2 m-2'>
            <h1>Componant C</h1>
            <ComponantD  />
             

    </div>
  )
}

export default ComponantC;