import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

export default function ProductList() {

    const [products, setproducts] = useState([]);
    useEffect(()=>{
            getproducts();
    },[])

    const getproducts = async ()=>{
        let result =await fetch('http://localhost:5000/products');
        result  = await result.json();
        setproducts(result);
    }

    const deleteitem = async (id)=>{
      let result = await fetch (`http://localhost:5000/product/${id}`,{
        method:"Delete"
      });
      result = await result.json(); 
      if (result) {
        alert("Item is deleted!")
        getproducts();
      }
    }

  return (
    <div className='container'>
      <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Price</th>
      <th scope="col">Company</th>
      <th scope="col">Category</th>
      <th scope="col">Delete Item</th>
      <th scope="col">Update Item</th>
    </tr>
  </thead>

  {
    products.map((item, index)=>
    <tbody key={item._id}>
    <tr>
      <th scope="row">{index+1}</th>
      <td>{item.name}</td>
      <td>{item.price}</td>
      <td>{item.company}</td>
      <td>{item.category}</td>
      <td> <button type="button" onClick={() => deleteitem(item._id)} className="btn btn-danger">Remove product</button> 
      </td>
      <td> 
          <Link to={"/update/" + item._id} >Update Product</Link>
      </td>
    </tr>
  </tbody>
)
}
  
</table>

    </div>
  )
}
