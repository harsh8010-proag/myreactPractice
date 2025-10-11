import React from 'react'
import ComponantC from './ComponantC';

function ComponantB( ) {


  return (
    <div className='h-[250px] flex w-full border-red-500 border-2 m-2'>
            <h1>Componant B</h1>
            <ComponantC   />
             

    </div>
  )
}

export default ComponantB;