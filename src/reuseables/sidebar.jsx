import { useState } from "react"
import { NavLink } from "react-router-dom"

 export  const Sidebar = ({menuOpen,setMenuOpen }) => {
      const [openDropDown , setOpenDropDown] = useState(false)
    const handleCloseSidebar = () => {
        setMenuOpen(false)
    }
    const toggleDropDown = () => {
        setOpenDropDown(prevState => !prevState)
    }
    const removeDropdown = () => {
        setOpenDropDown(false)
    }
    return(
        <>
{menuOpen && (
    <div id="drawer-navigation"
                    className={`fixed top-0 left-0 z-40 w-64 h-screen p-4 overflow-y-auto transition-transform  ${menuOpen ? 'translate-x-0 flex lg:hidden' : '-translate-x-full'} bg-white dark:bg-gray-800`}>

    <button type="button" onClick={handleCloseSidebar} data-drawer-hide="drawer-navigation" aria-controls="drawer-navigation" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 end-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white">
        <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
        <span className="sr-only">Close menu</span>
    </button>
  <div className="py-4 overflow-y-auto">
      <ul className="space-y-2 font-medium flex flex-col justify-start flex-start">
         <li className={`${menuOpen ? 'mb-2' : ''}`}>
                <NavLink to="/" className={ ({isActive}) => ` ${isActive ? 'text-[#FEA116] ':'hover:bg-gray-300'}  text-start text-[#615c61] text-sm  px-3 py-2 transition-colors duration-200  `}>Home</NavLink>
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

<div id="dropdownDelay" className={` ${openDropDown ? 'block' : 'hidden'}`}>
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
   </div>
</div> 
)}



        </>

    )
}