import './App.css';
import Navbar from './componenets/Navbar'; 
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Footer from './componenets/Footer';
import SignUp from './componenets/SignUp';
import PrivateComponent from './componenets/PrivateComponent'; 
import Login from './componenets/Login';
import AddProducts from './componenets/AddProducts';
import ProductList from './componenets/ProductList'; 
import UpdateProduct from './componenets/UpdateProduct'; 

function App() {
  return ( 
    <>  
    <Router>    
    <Navbar />
      <Routes> 

        <Route element={<PrivateComponent />}>    
        {/* // used for protected routes. */}
        <Route path="/" element={<ProductList />} />
        <Route path="/add" element={<AddProducts />} />
        <Route path="/update/:id" element={<UpdateProduct />} />
        <Route path="/profile" element={<h1>profile</h1>} />
        <Route path="/logout" element={<h1>Thanks for shopping with us</h1>} />
        </Route>
        <Route path="/signUp" element={<SignUp/>} />
        <Route path='/login' element={<Login/>} />
      </Routes>
      <Footer />
    </Router>
    
    </>
  );
}

export default App;
