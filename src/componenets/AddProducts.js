import React, { useState } from 'react'

export default function AddProducts() {
    const [name, setname] = useState(" ");
    const [price, setprice] = useState(" ");
    const [category, setcat] = useState(" ");
    const [company, setcom] = useState(" ");
      
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

    const addproduct = async () => {
       


        console.warn(name, price, category, company);
        const userid = JSON.parse(localStorage.getItem('user'))._id;
        let result = await fetch("http://localhost:5000/add-product", {
            method: "post",
            body: JSON.stringify({ name, price, category, company, userid }),
            headers: {
                'Content-Type': 'application/json'
            },
        })

        result = await result.json();
        console.warn(result)
    }

  



    return (
        <>
        
            <div className='container '>
                <h4 className='my-3'>Enter new Product details</h4>

                <form className="row g-3 needs-validaton" noValidate>
                    <div className="mb-3">
                        <label htmlFor="validationCustom01" className="form-label">Enter Product Name</label>
                            <input type="text" className="form-control" value={name} onChange={(e) => { setname(e.target.value) }} id="validationCustom01"  required />
                            {!name && <span style={{color:'red'}} >
                                Please Enter valid Product name.
                            </span>}
                    </div>

                    <div className="mb-3">
                        <label htmlFor="validationCustom02" className="form-label">Enter Product Price</label>
                            <input type="text" className="form-control" value={price} onChange={(e) => { setprice(e.target.value) }} id="validationCustom02" required/>
                            {!price && <span style={{color:'red'}} >
                                Please Enter valid Product price.
                            </span>}
                    </div>

                    <div className="mb-3">
                        <label htmlFor="validationCustom03" className="form-label">Enter Product Category</label>
                            <input type="text" className="form-control" value={category} onChange={(e) => { setcat(e.target.value) }} id="validationCustom03"  required />
                            {!category && <span style={{color:'red'}} >
                                Please Enter valid Product category.
                            </span>}
                    </div>

                    <div className="mb-3">
                        <label htmlFor="validationCustom04" className="form-label">Enter Product Company</label>
                            <input type="text" className="form-control" value={company} onChange={(e) => { setcom(e.target.value) }} id="validationCustom04"  required />
                            {!company && <span style={{color:'red'}} >
                                Please Enter valid Product company.
                            </span>}
                    </div>

                        <button className="btn btn-primary" onClick={addproduct} type="submit">Add Product</button>

                </form>
            </div>
        </>

    )
}


