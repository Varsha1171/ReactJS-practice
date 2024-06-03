import './List.css'
const List=(props)=>{
    const mappingOfList=props.list.map((member,index)=>
         <h4 key={index}>{member.task}</h4>
    );
    return(
        <div className="displayOfMembers">
            {mappingOfList}
            
        </div>
    );
}
export default List;