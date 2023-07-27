import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


export default function SignUp() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    useEffect(()=>{
        const auth  = localStorage.getItem('user'); 
        if(auth){ 
            navigate('/')
        }
    })

    const CollectData = async (e) => {
        e.preventDefault();
        console.log(name, email, password);
        let result = await fetch('http://localhost:5000/register', {
            method: 'post', 
            body: JSON.stringify({ name, email, password }),
            headers: {
                'Content-Type': 'application/json'
            },
        });
        result = await result.json();
        console.warn(result);
        localStorage.setItem("user",JSON.stringify(result));
        navigate('/')
        

    }

    return (
        <div className='container'>
            <form>
                <div className="mb3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                    <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} id="inputname" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3 ">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} id="exampleInputPassword1" />
                </div>
                
                <button onClick={CollectData} className="btn btn-primary my-3">Submit</button>
            </form>
        </div>
    )
}
