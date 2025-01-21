/* eslint-disable react/prop-types */



export const  Regitser = () => {


    return(
        <>
        






    <div tabIndex={-1}  className={`overflow-y-auto overflow-x-hidden  pr-[100px] pt-[100px]  flex  justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full  `} >
    <div className="relative p-4 w-full max-w-md max-h-full">
   
        <div className="relative bg-gray-300 rounded-lg shadow lg:w-[550px] ">
     
            <div className="flex items-center justify-between p-4 md:p-5 border-b  rounded-t border-[#615c61] ">
                <h3 className="text-xl   font-semibold text-black ">
                Register
                </h3>
               
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
                    Already have an account? <a href="/login" className="text-[#fe8116] hover:underline ">Login</a>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div> 


        </>
    )
}