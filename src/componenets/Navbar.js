import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Navbar() {
    const auth = localStorage.getItem('user');
    const navigate = useNavigate();
    const logout = () => {
        localStorage.clear();
        navigate('/signUp')
  
    }
    return (
        <div> 
            {auth ?
                <nav className="navbar navbar-expand-sm bg-body-tertiary"> 
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/">
                            <img alt="e-dashboard" src="http://w7.pngwing.com/pngs/17/58/png-transparent-web-development-responsive-web-design-e-commerce-business-ecommerce-blue-angle-web-design.png" width="30" height="24"/>
                        </a> 
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/">Products</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/add">Add Products</Link>
                                </li>
                                {/* <li className="nav-item">
                                    <Link className="nav-link active" to="/update">Update Products</Link>
                                </li> */}
                                <li className="nav-item">
                                    <Link className="nav-link mx-3 active" to="/profile">Profile</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link mx-3 active" onClick={logout} to="/logout">Logout</Link>
                                </li>
                                <li className="nav-item" style={{paddingTop: '10px', marginLeft: '15px'}}>
                                    <h6>Hello {JSON.parse(auth).name} </h6>
                                    {/* <p>Hello {JSON.parse(auth).name} </p> */}
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                :
                <>
                    <nav className="navbar navbar-expand-sm bg-body-tertiary">
                        <div className="container-fluid">
                        <a className="navbar-brand" href="/">
                            <img alt="e-dashboard" src="http://w7.pngwing.com/pngs/17/58/png-transparent-web-development-responsive-web-design-e-commerce-business-ecommerce-blue-angle-web-design.png" width="30" height="24"/>
                        </a>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{ textAlign: "right" }}>
                                    <li className="nav-item"><Link className="nav-link mx-3 active" to="/signUp">Sign Up</Link></li>
                                    <li className="nav-item"><Link className="nav-link mx-3 active" to="/login">Login</Link></li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </>
            }
        </div>
    )
}
