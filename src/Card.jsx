import img from "./assets/coder.jpg"
import img2 from "./assets/computerB.jpg"
import img3 from "./assets/pythonAI.jpg"
import img4 from "./assets/full-stack-devloper.jpg"

function Profile(){
    
    const users=[ 
        {
    name:"harish wavare",
    imgUrl:img,
    group:"Arambh Group",
    imgSize:180,
    id:1
   },{
    name:"Atharv",
    imgUrl:img2,
    group:"Arambh Group",
    imgSize:180,
    id:2
   },{
    name:"Karan",
    imgUrl:img3,
    group:"Arambh Group",
    imgSize:180,
    id:3
   },{
    name:"Pawan",
    imgUrl:img4,
    group:"Arambh Group",
    imgSize:180,
    id:4
   }

]

return(
    <div className="flex flex-wrap">

        {users.map((user,index)=>(

              
    <div 
    key={Profile.id}
    className="w-[200px] flex flex-col items-center p-2 bg-radial-[at_85%_10%]  from-cyan-500 via-cyan-800  to-purple-950 text-black text-[16px] text-white rounded-[15px] m-5">
    
    <img 
    className="rounded-[10px] bg-cover"
    src={user.imgUrl}
    alt={'photo of '+user.name}
    style={{
        width:user.imgSize,
        height:user.imgSize,
        objectFit:"cover"
        }}
    ></img>
    <h1>{user.name}</h1>
    <p className="text-cyan-100 ">{user.group}</p>
    </div>))}
    </div>
);
}

export default Profile;