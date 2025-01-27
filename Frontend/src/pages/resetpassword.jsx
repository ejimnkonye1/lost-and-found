/* eslint-disable react/prop-types */



export const  ResetPassword = () => {

    return(
        <>
        
    <div id="authentication-modal" tabIndex={-1}  className={`  pr-[100px]   pt-[130px]  flex z-50 justify-center items-center w-full  `} >
    <div className="relative p-4 w-full max-w-md max-h-full">
   
        <div className="relative bg-gray-300 rounded-lg shadow lg:w-[550px] ">
     
            <div className="flex flex-col  p-4 md:p-5 border-b rounded-t border-[#615c61]">
                <h3 className="text-xl  text-center  font-semibold text-black ">
                Reset Password
                </h3>
                <p className="pt-4 text-center block mb-2 text-lg font-medium text-[#615c61]">Please enter your email address. You will receive a link to create a new password via email.</p>
             
            </div>

            <div className="p-4 md:p-5">
                <form className="space-y-4" action="#">
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-[#615c61]">Email Address</label>
                        <input type="email" name="email" id="email" className=" border border-[#F384A0D]  text-sm rounded-lg  block w-full p-2.5 bg-[#615c61]  dark:placeholder-gray-400 " placeholder="name@gmail.com" required />
                    </div>
                   
                   
                   <div className="flex justify-center pt-2">
                   <button type="submit" className=" text-gray-400 bg-[#615c61] font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Reset Password</button>
                   </div>
                   
                </form>
            </div>
        </div>
    </div>
</div> 


        </>
    )
}