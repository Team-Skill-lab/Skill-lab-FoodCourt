import { useState } from "react"
import './Groceries.css'
const List =[{
    id: 1,
    name: "N JEEVAN KUMAR",
    usn: "4SF22CI057"
},
{
    id: 2,
    name: "Puvith",
    usn: "4SF22CI058",
},{
    id: 3,
    name: "Divya shree ",
    usn: "4SF22CI058",
},
{
    id: 4,
    name: "Deekshitha ",
    usn: "4SF22CI041", 
},
{
    id: 4,
    name: "Annika  ",
    usn: "4SF22CI011", 
}

]


export default () => {
  const [newObject ,setnewObject] = useState(List)
  return (<>
    <div className="main-Groceries">
 
      {List.map((items , index )=>{
        return(
          <div className="Groceries" key={index} style={{backgroundColor:"white"}}>
            <h1>Name :{items.name}</h1>
            
           
            <h1>USN :{items.usn}</h1>
            
           

            <button style={{backgroundColor:items.DeliverStatus}} className="buttons" onClick={()=>{setnewObject([...newObject,{id:items.id,name:items.name,price:items.price,quantity:items.quantity}])}}>View</button>
           <div style={{color:'red'}}>-</div></div>
      )})}
    </div>
  </>)

}
