function List(props){
    
  const itemList=props.items;
  const category=props.category;
 
     // ArambhGroup.sort((a,b)=> a.name.localeCompare(b.name));
     // ArambhGroup.sort((a,b)=> b.name.localeCompare(a.name));
     // ArambhGroup.sort((a,b)=> a.weigth - b.weigth);
     // ArambhGroup.sort((a,b)=> b.weigth - a.weigth);
     // const lowweightmem=ArambhGroup.filter(mem => mem.weigth >= 60);
const ListItem=itemList.map(member=>(
    <li key={member.id}>{member.name}: &nbsp;
    {member.weigth}😀</li>
));

return(
    <div>
   {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/CgkZ7MvWUAA?si=Vf2FI_Tm7CMGdnN9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}
      <h1 className="text-center ui-sans-serif ui-serif text-red-950 bg-gradient-to-tr from-orange-700 to-yellow-500">{category}</h1>
      <ol className="m-4 list-none text-center list-decimal list-inside">{ListItem}</ol>
    </div>
    )

}

export default List;