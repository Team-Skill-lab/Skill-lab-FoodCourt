import { useState ,useEffect } from "react"
import './Groceries.css'
import axios from "axios";


export default () => {
  const [UserData, setItems] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);
useEffect(() => {
  const fetchData = async () => {
    try {
      const Data = await axios.get('http://localhost:8080/api/users');
      console.log(Data.data)
      setItems(Data.data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  fetchData();
  
}, []);

  return (<>
    <div className="main-Groceries">
 
      {UserData.map((items , index )=>{
        return(
          <div className="Groceries" key={index} style={{backgroundColor:"white"}}>
            <h1>Name :{items.name}</h1>
            
           
            <h1>USN :{items.USN}</h1>
            
           

            <button style={{backgroundColor:items.DeliverStatus}} className="buttons" >View</button>
           <div style={{color:'red'}}>-</div></div>
      )})}
    </div>
  </>)

}
