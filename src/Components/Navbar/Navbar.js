import React from 'react';
import logo from "../../Assets/Shoes/Logo.jpg";
import { useState } from 'react';
import Cart from '../Cart/Cart';
import { useSelector,useDispatch } from 'react-redux';
import { Avatar } from "@material-tailwind/react";



const Navbar = () => {

  const totalAmount = useSelector((state)=>state.cart.totalAmount);
  const user = useSelector((state)=>state.user.user);
  const {name,image} = user;
  const [open, setOpen] = useState(false);
  const handleOpen = () => {setOpen(true);
  };
  const dispatch = useDispatch();

  return (
    <>
      <div className="bg-black p-2 w-full">
        <h3 className="text-white font-inter text-2xl font-bold tracking-normal leading-none text-center">Welcome all</h3>
      </div>
      <div className="flex justify-around items-center">
        <div>
          <img src={logo} alt="store" className="h-28 w-full" />
        </div>
        <div className="flex flex-row items-center">
          <button className="font-inter text-base font-medium tracking-normal leading-none text-center mr-4">
            Logout
          </button>
          <div className="flex flex-row items-center ">
            <svg xmlns="http://www.w3.org/2000/svg"
              fill="none" viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="#000"
              className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
            </svg>
            <p className="font-inter text-base font-medium tracking-normal leading-none text-center mr-2">
            Watchlist
            </p>
          </div>
          <div className="flex flex-row items-center cursor-pointer" 
          onClick={handleOpen}>
          {totalAmount>0 ? <span className='rounded-full bg-gray-300px-2 font-inter text-sm mr-1'>{totalAmount}</span> : 
          <svg xmlns="http://www.w3.org/2000/svg"
              fill="none" viewBox="0 0 24 24"
              strokeWidth="2" stroke="#000"
              className="w-6 h-6">
              <path strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
            </svg>
            }
           
            <p className="font-inter text-base font-medium tracking-normal leading-none text-center mr-2">
            Cart
            </p>
            <div>
              {open && <Cart openModal={open} setOpen={setOpen}></Cart>}
            </div>
          </div>
          <div className="flex flex-row items-center cursor-pointer pl-4">
            {image && (
              <Avatar 
              src={image}
              alt="avatar"
              size="sm"
              className='mr-2'
              ></Avatar>
            )}
            <div >
              <p className='font-inter text-sm font-medium tracking-normal leading-none'>
                Hi {name.charAt("0").toUpperCase() + name.slice(1)}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black p-4 w-full flex justify-around">
        <div className=" text-white font-inter text-base font-medium tracking-normal leading-none text-center mr-2">50% Off</div>
        <div className=" text-white font-inter text-base font-medium tracking-normal leading-none text-center mr-2">Free Shipping and returns</div>
        <div className=" text-white font-inter text-base font-medium tracking-normal leading-none text-center mr-2">Different Payment Methods</div>
      </div>
      </>
  )
}

export default Navbar;