import { useState,useEffect } from "react";

function UseE(){

    const [width,setWidth] = useState(window.innerWidth);
    const [height,setHeight]= useState(window.innerHeight);

    useEffect(() => {
        window.addEventListener('resize',handleResize);
    console.log('Event listener added');


    return()=>{
    
      window.removeEventListener('resize',handleResize);
      console.log('remove event Listener')

    }
    },[])
    
    
    function handleResize(){
        setWidth( window.innerWidth);
        setHeight(window.innerHeight);
        }


        useEffect(()=>{
          document.title = `Size : ${width} x ${height}`
        },[])

  return(
            <>
          <>Window width  : {width} px </>
          <>Window Height :{height} px </>
          </>
        )
}

export default UseE;