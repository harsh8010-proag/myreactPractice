import Button from "./Button";
import Profile from "./Profile";
import List from "./List";
import Student from "./Student";
import Counter from "./Counter";
import  Input  from "./Input";
import Colorpicker from "./colorpicker";
import MyComponent from "./Company";
import Flist from "./frutList";
import MyCcomponent from "./Cars";
import ToDoList from "./ToDoList";


function App() {
  const ArambhGroup=[{id:1,name:"harish",weigth:50},
                     {id:2,name:"karan",weigth:78},
                     {id:3,name:"Vaishnavi",weigth:90},
                     {id:4,name:"riyan",weigth:60},
                     {id:5,name:"bman",weigth:85},
                     {id:6,name:"mohan",weigth:53},
                     {id:7,name:"pavan",weigth:80},
                     {id:8,name:"Atharv",weigth:60}]
  const ArambhClub= [ ]                     
  

  return (
    
    <div className="bg-gradient-to-br from-purple-950  to-blue-700 p-4">
      <ToDoList/>
      <MyCcomponent/>
      <Flist/>
      <MyComponent/>
      <Colorpicker/>
      <Counter/>
      <Input/>
      <Profile/>
      <Button/>
    {  ArambhGroup.length > 0 && <List   items={ArambhGroup} category="Arambh Group" />}
    
    { ArambhClub>0 &&<List items={ArambhClub} category="Arambh Club" />}
    <Student name="harish" age={16}  isStudent={false}/>
    <Student name="karan" age={18}  isStudent={true}/>
    <Student name="harish" age={19}  isStudent={false}/>
    <Student/>
   </div> 

    
  )
}

export default App;
