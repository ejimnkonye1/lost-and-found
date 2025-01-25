import { useState, } from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineCancel } from "react-icons/md";
import { FaUnlockAlt } from "react-icons/fa";
import { BsPersonPlusFill } from "react-icons/bs";
import { NavLink } from 'react-router-dom';
import {  LoginModal } from '../Modal/Loginmodal';
import { RegitserModal } from '../Modal/regitsermodal';
import { IoIosLogIn } from "react-icons/io";
import { IoPersonAddOutline } from "react-icons/io5";
export const Navbar = () => {
      const [menuOpen, setMenuOpen] = useState(false);
      const [loginOpen, setLoginOpen] = useState(false);
      const [registerOpen, setRegiserOpen] = useState(false)
      const [openDropDown , setOpenDropDown] = useState(false)
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
    const toggleDropDown = () => {
        setOpenDropDown(prevState => !prevState)
    }
    const removeDropdown = () => {
        setOpenDropDown(false)
    }
    return(
<header className={`flex justify-between z-50 items-center fixed top-0 p-4 lg:pl-20 lg:pr-20 z-10 w-full font-poppins border-b bg-white `}>
    {/* Logo/Brand Link */}
    <a className="lg:text-3xl text-2xl text-start   text-gray-500 p-2" href="/">
        <span>Lost and Found</span>
    </a>

    {/* Navigation Container */}
    <nav className="flex-grow flex justify-end lg:justify-center relative">
<>
<button 
            className="block lg:hidden pr-5 bg-transparent border-none cursor-pointer z-30" 
        >
     <IoIosLogIn size={20} />
      
        </button>
        <button 
            className="block lg:hidden pr-5 bg-transparent border-none cursor-pointer z-30" 
        >
            < IoPersonAddOutline size={20} />
      
        </button>
</>

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
                <NavLink to="/" className={ ({isActive}) => ` ${isActive ? 'text-[#FEA116] ':'hover:bg-gray-300'}   text-[#615c61] text-sm  px-3 py-2 transition-colors duration-200  `}>Home</NavLink>
            </li>
            
            <li className={`${menuOpen ? 'mb-2' : ''}`}>
                <NavLink to="/reports"  className={ ({isActive}) => ` ${isActive ? 'text-[#FEA116] ':'hover:bg-gray-300'}   text-[#615c61] text-sm  px-3 py-2 transition-colors duration-200  `}>Reports</NavLink>
            </li>
            <li className={`${menuOpen ? 'mb-3' : ''}`}  onMouseEnter={toggleDropDown} onMouseLeave={removeDropdown}>
<NavLink to="/dashboard" className={({isActive}) => `${isActive? 'text-[#FEA116]':'hover:bg-gray-300'} text-[#615c61] text-sm text-base  px-3 py-2 transition-colors duration-200 text-center inline-flex items-center transition  duration-300  `}>Dashboard
<svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
</svg>
</NavLink>

<div id="dropdownDelay" className={`absolute left-25 mt-0 w-48 bg-white divide-y divide-gray-100 rounded-lg shadow ${openDropDown ? 'block' : 'hidden'}`}>
    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDelayButton">
      <li>
        <a href="/dashboard/my-reports" className="block px-4 py-2 text-[#615c61] text-sm  transition-colors duration-200 hover:bg-gray-300 ">My Reports</a>
      </li>
      <li>
        <a href="/dashboard/submit-report" className="block px-4 py-2 text-[#615c61] text-sm transition-colors duration-200 hover:bg-gray-300 ">Submit Reports</a>
      </li>
      <li>
        <a href="/dashboard/edit-report" className="block px-4 py-2 text-[#615c61] text-sm transition-colors duration-200 hover:bg-gray-300 ">Edit Report</a>
      </li>
      <li>
        <a href="#" className="block px-4 py-2 text-[#615c61] text-sm transition-colors duration-200 hover:bg-gray-300 ">Sign out</a>
      </li>
    </ul>
</div>


            </li>
            <li className={`${menuOpen ? 'mb-3' : ''}`}>
                <NavLink to="/about" className={({isActive}) =>` ${isActive ? 'text-[#FEA116]' :'hover:bg-gray-300'} text-[#615c61] text-sm text-base  px-3 py-2 transition-colors duration-200  `}>About Us</NavLink>
            </li>
            <li className={`${menuOpen ? 'mb-3' : ''}`}>
                <NavLink to="/contact" className={({isActive}) => ` ${isActive ?'text-[#FEA116]':'hover:bg-gray-300'} text-[#615c61] text-sm text-base  px-3 py-2 transition-colors duration-200  `} >Contact Us</NavLink>
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