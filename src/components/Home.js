import React,{useState,useEffect} from 'react'
 import axios from './axios' 

const Home = () => {
  const [data,setData]=useState(null);

  useEffect(()=>{
async function fetchData(){
  const req = await axios.get('/api/getAll');
  setData(req.data)
}
fetchData();



  },[])
  

 
     return (
    
    <div>
      
      

       </div>
       
  )
}

export default Home