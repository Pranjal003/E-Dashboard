import React, { useEffect, useState } from 'react'
import { useParams,useNavigate } from 'react-router-dom';

export default function UpdateProduct() {
    const [name, setname] = useState(" ");
    const [price, setprice] = useState(" ");
    const [category, setcat] = useState(" ");
    const [company, setcom] = useState(" ");
    const params = useParams();
    const navigate = useNavigate();
    
    useEffect(()=>{
        getProductDetails();
    },[])

    const getProductDetails = async ()=>{ 
        let result = await fetch(`http://localhost:5000/product/${params.id}`)
        result = await result.json();
        setname(result.name);
        setprice(result.price);
        setcat(result.category);
        setcom(result.company);
    }

    
        const updateProduct = async (e) => {
            e.preventDefault();
           let result = await fetch(`http://localhost:5000/product/${params.id}`,{
            method:'Put',
            body:JSON.stringify({name,price,category,company}),
            headers:{
                'Content-Type' : " application/json"
            }
           });
           result = await result.json()
           navigate('/');
        }


      // Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()


    return (
        <>
        
            <div className='container '>
                <h4 className='my-3'>Update Product details</h4>

                <form className="row g-3 needs-validaton" noValidate>
                    <div className="mb-3">
                        <label htmlFor="validationCustom01" className="form-label">Enter Product Name</label>
                            <input type="text" className="form-control" value={name} onChange={(e) => { setname(e.target.value) }} id="validationCustom01"  required />
                            
                    </div>

                    <div className="mb-3">
                        <label htmlFor="validationCustom02" className="form-label">Enter Product Price</label>
                            <input type="text" className="form-control" value={price} onChange={(e) => { setprice(e.target.value) }} id="validationCustom02" required/>
                            
                    </div>

                    <div className="mb-3">
                        <label htmlFor="validationCustom03" className="form-label">Enter Product Category</label>
                            <input type="text" className="form-control" value={category} onChange={(e) => { setcat(e.target.value) }} id="validationCustom03"  required />
                            
                    </div>

                    <div className="mb-3">
                        <label htmlFor="validationCustom04" className="form-label">Enter Product Company</label>
                            <input type="text" className="form-control" value={company} onChange={(e) => { setcom(e.target.value) }} id="validationCustom04"  required />
                            
                    </div>

                        <button className="btn btn-primary" onClick={updateProduct} type="submit">Update Product</button>

                </form>
            </div>
        </>

    )
}


