import React from 'react';
import "./App.css";
import Main from './Components/Main/Main';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FilteredProducts from './Components/FilteredProducts/FilteredProducts';
import SingleProduct from './Components/FilteredProducts/SingleProduct';
import { useSelector } from 'react-redux';
import Login from './Components/Login/Login';


function App() {
  const user = useSelector((state)=>state.user.user);
  const {authUser}= user;
  console.log("user",user);
  console.log("authuser",authUser);
  const cart = useSelector((state)=>state.cart.cart);
  const totalAmount = useSelector((state)=>state.cart.totalAmount);
  const totalPrice = useSelector((state)=>state.cart.totalPrice);

  console.log("cart",cart);
  console.log("totalAmount",totalAmount);
  console.log("totalPrice " ,totalPrice);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={authUser ? <Main/> : <Login/>}></Route>
          <Route path="/filteredProducts/:type" element={<FilteredProducts />}></Route>
          <Route path="/filteredProducts/:type/:id" element={<SingleProduct />}></Route>
        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
