import { NavLink, Link } from "react-router-dom";
import { SearchBar } from "../searchBar/SearchBar";
import { Button, IconButton } from "@material-tailwind/react";
// import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
// import { useState } from "react";



export const Navbar = () => {
  // navList Data
  const navList = (
    <ul className="flex space-x-3 text-white font-medium text-md px-5 ">
      {/* Home */}
      <li>
        <NavLink to={'/'}>Home</NavLink>
      </li>
      {/* All Product */}
      <li>
        <NavLink to={'/allproduct'}>All Product</NavLink>
      </li>
      {/* Signup */}
      {/* <li>
        <NavLink to={'/signup'}>Signup</NavLink>
      </li> */}
      {/* User */}
      <li>
        <NavLink to={'/userDashboard'}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        </svg>
        </NavLink>
      </li>
      {/* Admin */}
      {/* <li>
            </li> */}
      {/* logout */}
      {/* <li>
            </li> */}
      {/* Cart */}
      <li>
        <NavLink to={'/cart'}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 border-white">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
          </svg>
        </NavLink>
      </li>
    </ul>
  )
  return (
    <nav className="bg-dark sticky top-0 ">
      {/* main  */}
      <div className="lg:flex lg:justify-between items-center py-3 lg:px-3 ">
        {/* left  */}
        <div className="left py-3 lg:py-0">
          <NavLink to={'/'}>
            <h2 className=" font-bold text-white text-2xl text-center">Frozen Food.</h2>
          </NavLink>
        </div>
        {/* right  */}

        {/* Search Bar  */}
        <div className="right flex justify-center mb-4 lg:mb-0">
          {navList}
          <Link to={'/searchBar'}>
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2857142857142858" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-search text-white"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />
            </svg>
          </Link>
        </div>
      </div>
    </nav>
  );
}