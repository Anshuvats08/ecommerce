

import React, { useState,useEffect } from 'react'
import { useParams,useNavigate } from 'react-router-dom';

function Updatepro() {
 
    const [name, setname] = useState("");
    const [price, setprice] = useState("");
    const [catagory, setcatagory] = useState("");
    const[company,setcompany]=useState("");
    const navigate = useNavigate();
    const params=useParams();
  
    useEffect(()=>{
      getdata();
    },[])

    const getdata=async()=>{
      let result=await fetch(`http://localhost:5000/products/${params.id}`);
      result=await result.json();
      setname(result.name);
      setprice(result.price);
      setcatagory(result.catagory);
      setcompany(result.company);
    }
    
    const submitdata = async () => {
      if (!name || !price || !catagory || !company  ){
        return false;
      }
      const userid=JSON.parse(localStorage.getItem('user'))._id;
  
      let result = await fetch("http://localhost:5000/addproduct", {
        method: "post",
        body: JSON.stringify({ name, price,catagory,company,userid }),
        headers: { "Content-Type": "application/json" },
      });
  
      result = await result.json();
      if (result) {
  
        navigate("/");
      }
    };
    return (
      <div className="signup">
        <h1 className="side">Update Product</h1>
  
        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(event) => setname(event.target.value)}
        />
  
        <input
          type="text"
          placeholder="price"
          value={price}
          onChange={(event) => setprice(event.target.value)}
        />
  
  
        <input
        type="text"
        placeholder="Enter catagory"
        value={catagory}
        onChange={(event) => setcatagory(event.target.value)}
        />
  
  
        <input
        type="text"
        placeholder="Enter company"
        value={company}
        onChange={(event) => setcompany(event.target.value)}
        />
  
  
        <button className="side"type="button" onClick={submitdata}> Update Product </button>
      </div>
    )
}

export default Updatepro
