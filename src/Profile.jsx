 import imagurl from "./assets/coder.jpg";

  const Profile = () => {
    
    const handelClics =(e)=>e.target.style.display='none'
  return (
<img onClick={(e)=>handelClics(e)} src={imagurl}></img>
  )
}

export default Profile;

