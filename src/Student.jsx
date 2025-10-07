
const Student=(props)=>{


    return(
        <div  className="w-[150px] m-5 bg-gradient-to-tr  from-purple-700 to-blue-700 p-4 rounded-[25px]">
            <p>Name:{props.name}</p>
            <p>Age :{props.age}</p>
            <p>Student :{props.isStudent? "yes":"no"}</p>
        </div>
        )

}

Student.defaultProps={
    name:"Guest",
    age:0,
    isStudent:false
}

export default Student;




