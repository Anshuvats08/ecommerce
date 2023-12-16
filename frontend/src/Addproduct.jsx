import React, { useState,useEffect } from 'react'
import { useNavigate } from 'react-router';

function Addproduct() {
  const [name, setname] = useState("");
  const [price, setprice] = useState("");
  const [catagory, setcatagory] = useState("");
  const[company,setcompany]=useState("");
  const[error,seterror]=useState("");
  const navigate = useNavigate();

//   useEffect(()=>{
//     const auth=localStorage.getItem('user');
//     if(auth)
//     {
//       navigate('/')
//     }
//   })
  const submitdata = async () => {
    if (!name || !price || !catagory || !company  ){
      seterror(true);
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
      <h1 className="side">Addproduct</h1>

      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(event) => setname(event.target.value)}
      />
      {error && !name && <span> enter name </span>}

      <input
        type="text"
        placeholder="price"
        value={price}
        onChange={(event) => setprice(event.target.value)}
      />
      {error && !price && <span> enter price </span>}


      <input
      type="text"
      placeholder="Enter catagory"
      value={catagory}
      onChange={(event) => setcatagory(event.target.value)}
      />
      {error && !catagory && <span> enter catagory </span>}


      <input
      type="text"
      placeholder="Enter company"
      value={company}
      onChange={(event) => setcompany(event.target.value)}
      />
      {error && !company && <span> enter company </span>}


      <button className="side"type="button" onClick={submitdata}> Add product </button>
    </div>
  );
}
 export default Addproduct
