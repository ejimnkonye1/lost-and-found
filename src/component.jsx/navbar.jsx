import { useState, } from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineCancel } from "react-icons/md";
import { FaUnlockAlt } from "react-icons/fa";
import { BsPersonPlusFill } from "react-icons/bs";
import { NavLink } from 'react-router-dom';
import {  LoginModal } from '../Modal/Loginmodal';
import { RegitserModal } from '../Modal/regitsermodal';
export const Navbar = () => {
      const [menuOpen, setMenuOpen] = useState(false);
      const [loginOpen, setLoginOpen] = useState(false);
      const [registerOpen, setRegiserOpen] = useState(false)
 
        const toggleMenu = () => {
         setMenuOpen(prevState => !prevState);
          console.log('Menu is open:', menuOpen);
        };
    const toggleLogin = () => {
        setLoginOpen(prevState => !prevState)
        console.log(loginOpen, 'login')
        
    }
    const toggleRegister = () => {
        setRegiserOpen(prevState => !prevState)

    }
    return(
<header className={`flex justify-between items-center fixed top-0 p-4 lg:pl-20 lg:pr-20 z-10 w-full font-poppins border-b`}>
    {/* Logo/Brand Link */}
    <a className="text-3xl  text-gray-500 p-2" href="/">
        <span>Lost and Found</span>
    </a>

    {/* Navigation Container */}
    <nav className="flex-grow flex justify-end lg:justify-center relative">
        <button 
            className="block lg:hidden bg-transparent border-none cursor-pointer z-30" 
            onClick={toggleMenu}
        >
            {menuOpen ? (
                <MdOutlineCancel className="text-black text-2xl" /> // Change color if needed
            ) : (
                <RxHamburgerMenu className="text-black text-2xl" /> // Change color if needed
            )}
        </button>

        <ul 
            className={`flex-col lg:flex-row items-center m-2 p-2 transition-all duration-300 flex justify-center 
                ${menuOpen ? 'flex absolute top-0 left-0 w-full bg-[#457AD4] p-4 flex-col items-center z-20 shadow-lg rounded-lg' : 'hidden lg:flex flex justify-center '} 
                lg:static lg:bg-transparent lg:shadow-none`}
        >
            <li className={`${menuOpen ? 'mb-2' : ''}`}>
                <NavLink to="/" className={`text-[#615c61] text-sm  px-3 py-2 transition-colors duration-200 hover:bg-gray-300 `}>Home</NavLink>
            </li>
            <li className={`${menuOpen ? 'mb-2' : ''}`}>
                <NavLink to="/reports" className={`text-[#615c61] text-sm text-base  px-3 py-2 transition-colors duration-200 hover:bg-gray-300  `}>Reports</NavLink>
            </li>
            <li className={`${menuOpen ? 'mb-3' : ''}`}>
                <NavLink to="/dashboard" className={`text-[#615c61] text-sm text-base  px-3 py-2 transition-colors duration-200 hover:bg-gray-300  `}>Dashboard</NavLink>
            </li>
            <li className={`${menuOpen ? 'mb-3' : ''}`}>
                <NavLink to=".about" className={`text-[#615c61] text-sm text-base  px-3 py-2 transition-colors duration-200 hover:bg-gray-300  `}>About Us</NavLink>
            </li>
            <li className={`${menuOpen ? 'mb-3' : ''}`}>
                <NavLink to="/contact" className={`text-[#615c61] text-sm text-base  px-3 py-2 transition-colors duration-200 hover:bg-gray-300  `} >Contact Us</NavLink>
            </li>
        </ul>
    </nav>

    {/* Buttons Container */}
    <ul className={`flex ml-auto lg:mr-20 ${menuOpen ? 'hidden' : 'hidden lg:flex'}`}>
        <li className={`${menuOpen ? 'mb-3' : ''}`}>
            <a 
                // href='/#'
                onClick={toggleLogin}
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-[#615c61] inline-flex items-center text-sm  font-poppins   font-semibold px-8 py-3  transition-colors duration-200 hover:bg-gray-300 border border-1 bg-white hover:text-white cursor-pointer"
            >
              <span className='pb-[5px] mr-1'><FaUnlockAlt size={'15px'} /></span>  <span className=''>Login</span>
            </a>
 <>
 {loginOpen && ( 
    <LoginModal
    loginOpen={loginOpen}
    setLoginOpen={setLoginOpen}
    />

 )}
     {registerOpen && (
        <RegitserModal
        registerOpen={registerOpen}
        setRegiserOpen={setRegiserOpen} 
        
        />
    )}
 
 </>

        </li>
        <li className={` px-3${menuOpen ? 'mb-3' : ''}`}>
            <a 
                // href='/#'
                onClick={toggleRegister}
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-[#615c61] p-5 inline-flex items-center text-sm  font-poppins   font-semibold px-8 py-3  transition-colors duration-200 hover:bg-gray-300 border border-1 bg-white hover:text-white cursor-pointer"
            >
              <span className='pb-[3px] mr-1'><BsPersonPlusFill  size={'16px'} /></span>  <span className=''>Register</span>
            </a>
        </li>
    </ul>
</header>
    )
}