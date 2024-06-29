import { useState } from "react"
const List =[{
    id: 1,
    name: "Rice",
    price: 100,
    quantity: 1,
    DeliverStatus : 'green'
},
{
    id: 2,
    name: "wheat",
    price: 200,
    quantity: 2,
    DeliverStatus : 'yellow'
}]


export default () => {
  const [newObject ,setnewObject] = useState(List)
  return (<>
   
  </>)

}
