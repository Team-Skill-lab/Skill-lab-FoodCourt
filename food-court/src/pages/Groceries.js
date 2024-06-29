import { useState } from "react"
import './Groceries.css'
const List =[{
    id: 1,
    name: "Rice",
    price: 100,
    quantity: 1,
    DeliverStatus : 'green'
},
{
    id: 2,
    name: "Wheat",
    price: 200,
    quantity: 2,
    DeliverStatus : 'yellow'
},{
  id: 3,
  name: "Oil",
  price: 100,
  quantity: 3,
  DeliverStatus : 'red'
}


]


export default () => {
  const [newObject ,setnewObject] = useState(List)
  return (<>
    <div className="main-Groceries">
 
      {List.map((items , index )=>{
        return(
          <div className="Groceries" key={index} style={{backgroundColor:items.DeliverStatus}}>
            <h1>Items name :{items.name}</h1>
            <h1>Items price :{items.price}₹</h1>
            <h1>Items quantity : {items.quantity}</h1>
            <h1>Total Price : {items.price*items.quantity}</h1>
            {
              items.DeliverStatus === 'green' ? <h1>Delivered</h1> : items.DeliverStatus==='red'? <h1>Not Delivered</h1> :<button className="buttoms">Track Order</button>

            }


            <button className="buttons" onClick={()=>{setnewObject([...newObject,{id:items.id,name:items.name,price:items.price,quantity:items.quantity}])}}>View</button>
          </div>
      )})}
    </div>
  </>)

}
