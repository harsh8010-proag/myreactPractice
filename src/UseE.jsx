import { useState,useEffect } from "react";

function UseE(){

    const [width,setWidth] = useState(window.innerWidth)
    const [height,setHeight]= useState(window.innerHeight);


    window.addEventListener('resize',handleResize);
    function handleResize(){

        setWidth( window.innerWidth);
        setHeight(window.innerHeight); }

  return(
            <>
          <>Window width : {width}px </>
          <>Window Height :{height}px</>
          </>
        )
}

export default UseE;