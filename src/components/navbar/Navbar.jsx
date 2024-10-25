import { NavLink } from "react-router-dom";
import { SearchBar } from "../searchBar/SearchBar";
import { Button } from "@material-tailwind/react";


export const Navbar = () => {

  return (
    <nav className="bg-primary sticky top-0">
      <div className="lg:flex lg:justify-between items-center py-3 lg:px-3 ">
        {/* left  */}
        <div className="left py-3 lg:py-0">
          <NavLink to={'/'}>
            <h2 className=" font-bold text-white text-2xl text-center">Frozen Food</h2>
          </NavLink>
        </div>
        {/* Search Bar  */}
        {/* <SearchBar /> */}
        {/* right  */}
        <div className="right flex justify-center mb-4 lg:mb-0">
          <ul className="flex space-x-3 text-white font-medium text-md px-5 items-center">
            <li>
              <NavLink to={'/'} className={({ isActive }) => {
                return isActive ? "text-light text-pretty" : "text-white"
              }}>Home</NavLink>
            </li>
            <li>
              <NavLink to={'/allproduct'} className={({ isActive }) => {
                return isActive ? "text-light" : "text-white"
              }}>All Product</NavLink>
            </li>
            <li>
              <NavLink to={'/signup'} className={({ isActive }) => {
                return isActive ? "text-light" : "text-white"
              }}>Signup</NavLink>
            </li>
            
            <li>
              <NavLink to={'/'} className={({ isActive }) => {
                return isActive ? "text-gray-100" : "text-white"
              }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                  <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" clipRule="evenodd" />
                </svg>

              </NavLink>
            </li>
            {/* Admin */}
            {/* <li>
                <NavLink to={'/'}>Admin</NavLink>
            </li> */}

            {/* logout */}
            {/* <li>
                logout
            </li> */}

            {/* Cart */}
            <NavLink to={'/cart'}>
              <Button size="sm" variant="outlined" className="rounded-full text-white border-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                </svg>
              </Button>
              <sup>0</sup>
            </NavLink>
          </ul>
        </div>
      </div >
    </nav >
  );
}
