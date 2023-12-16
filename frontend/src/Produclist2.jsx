import React from 'react'
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
function Produclist2() {
    const[products,setProducts]= useState([]);

    useEffect(() => {getProducts();}, [])
        
     const getProducts=async () => {
        let result = await fetch('http://localhost:5000/products')
        result = await result.json();
        setProducts(result);
    }

    const searchbox= async (event) =>{
      let key = event.target.value;
      if (key)
      {
      let result = await fetch(`http://localhost:5000/search/${key}`);
      result = await result.json();
      if(result)
      {
        setProducts(result)
      }
    }
      else
      {
        getProducts()
      }
    }

    const deleteProduct = async (item)=>{
    let result = await fetch(`http://localhost:5000/product/${item}`,
      {method:"Delete" });
    result = await result.json();
    if(result)
    {
      getProducts();
    }
  }


  
    
    return (
      <>
    <h2 style={{"textAlign":"center"}}>PRODUCT LIST</h2>

    <div className='search-container'>
      <input
      type="text"
      className='search-input'
      placeholder='enter for search'
      onChange={searchbox}/>
      </div>      

    <div className="productlist">
          
          <table border="1" height ="200px" width="400px">
            <tr>
              <th>S.NO</th>
              <th>NAME</th>
              <th>PRICE</th>
              <th>CATEGORY</th>
              <th>COMPANY</th>
              <th>OPERATION</th>
            </tr>

            {products.length>0?products.map((item,index)=> {
         return (
          <tr>
            <td>{index+1}</td>
            <td>{item.name}</td>
            <td>{item.price}</td>
            <td>{item.catagory}</td>
            <td>{item.company}</td>
            
            <td><button onClick={()=> deleteProduct(item._id)}>Delete</button>
            <button><Link style={{textDecoration:"none"}} 
            to={`/updateproduct/${item._id}`}>update</Link>
            </button>
            </td>
          </tr>
         );
            }):<td colSpan="6">NO RESULT</td>
          }
          </table>
      </div>
    </>
     
    );
  } 
    
 

export default Produclist2;
