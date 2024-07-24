import { useState } from "react"
import './Groceries.css'
const List =[{
    id: 1,
    name: "Palvu",
    usn: "ODR057",
    orderStauts : true,
},
{
    id: 2,
    name: "Puvith",
    usn: "ODR058",
    orderStauts : false,
},{
    id: 3,
    name: "Divya shree ",
    usn: "ODR032",
    orderStauts : true,
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
            
           
            <h1>{items.usn}</h1>
            
            

            <button style={{backgroundColor:items.DeliverStatus}}  onClick={()=>{setnewObject([...newObject,{id:items.id,name:items.name,price:items.price,quantity:items.quantity}])}}>View</button>
          </div>
      )})}
    </div>
  </>)

}
