/* eslint-disable react/prop-types */

import { useState } from "react"


export const  RegitserModal = ({registerOpen, setRegiserOpen}) => {
    const [ismodalClosing, setIsModalClosing] = useState(false)
    
    const handleCloseModal = () =>{
        setIsModalClosing(true)
        setTimeout(() => {
            setRegiserOpen(false)
            setIsModalClosing(false)
           
        }, 300);

    }

    return(
        <>
        





{registerOpen && (
    <div id="authentication-modal" tabIndex={-1}  className={`overflow-y-auto overflow-x-hidden fixed pr-[100px] pt-10  flex z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full   ${ismodalClosing ? 'animate-fadeOut'  :'animate-fadeDown'}`} >
    <div className="relative p-4 w-full max-w-md max-h-full">
   
        <div className="relative bg-gray-300 rounded-lg shadow lg:w-[550px] ">
     
            <div className="flex items-center justify-between p-4 md:p-5 border-b  rounded-t border-[#615c61] ">
                <h3 className="text-xl   font-semibold text-black ">
                Register
                </h3>
                <button type="button" onClick={handleCloseModal} className="end-2.5 text-[#fe8116] bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="authentication-modal">
                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor"  strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                    <span className="sr-only" >Close modal</span>
                </button>
            </div>
    
            <div className="p-4 md:p-5">
                <form className="space-y-4 p-2" action="#">
                <div>
                        <label htmlFor="username" className="block mb-2 text-sm font-medium text-[#615c61]">Username</label>
                        <input type="text" name="username" id="username" className=" border border-[#F384A0D]  text-sm rounded-lg  block w-full p-2.5 bg-[#615c61]  dark:placeholder-gray-400 " placeholder="name@gmail.com" required />
                    </div>
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-[#615c61]">Email</label>
                        <input type="email" name="email" id="email" className=" border border-[#F384A0D]  text-sm rounded-lg  block w-full p-2.5 bg-[#615c61]  dark:placeholder-gray-400 " placeholder="name@gmail.com" required />
                    </div>
                    <div>
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-[#615c61]">Password</label>
                        <input type="password" name="password" id="password" placeholder="••••••••" className=" border border-[#F384A0D]  text-sm rounded-lg  block w-full p-2.5 bg-[#615c61]  dark:placeholder-gray-400 " required />
                    </div>
                    <div className="flex ">
                        <div className="flex items-start">
                            <div className="flex items-center h-5">
                                <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                            </div>
                            <label htmlFor="remember" className="ms-2 text-sm font-medium text-[#615c61]">
                            I agree with the terms and conditions and the privacy policy</label>
                        </div>

                    </div>
                  <div className="flex justify-end">
                  <button type="submit" className=" text-gray-400 bg-[#615c61] font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Register</button>
                  </div>
                    <div className="text-sm text-center font-medium text-[#615c61]">
                    Already have an account? <a href="#" className="text-[#fe8116] hover:underline ">Login</a>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div> 
)}

        </>
    )
}