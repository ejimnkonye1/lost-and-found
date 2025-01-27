

export const About = () => {
    return(
        <>
     <div className='pt-20 z-10'>
              
         <div className="flex flex-col justify-center items-center lg:pt-[45px] py-5 p-5">
         <h3 className="lg:text-3xl font-poppins font-normal text-2xl text-start   text-gray-500 p-2" >
           <span>About Us</span>
       </h3>

         </div>
            <div className="flex flex-col items-center justify-center pt-10 p-4">
   
       <h3 className="lg:text-3xl font-poppins font-normal text-2xl lg:text-start text-center text-gray-500 p-2 leading-tight">
    <span className="block">Our Primary Goal Is To Help Find</span>
    <span className="block text-center"> Misplaced Properties.</span>
</h3>

  
       <p className="font-poppins w-full  max-w-4xl mt-5 text-md text-center text-[#615c61] leading-loose">The Lost and Found is an initiative created by Billie to initially help students in higher institutions find and claim any kind of valuable item they misplaced. Our service is now available to the general public.</p>
       <p className="w-full max-w-4xl font-poppins mt-5 text-md text-center text-[#615c61] leading-loose ">We allow users post found items on our website and promote the report on all our platforms until we find and return the item to the rightful owner. We are poised to solved any problem related to missing properties the best way we can, our service is also free.</p>
       <h3 className="lg:text-3xl mt-5 font-poppins font-normal text-2xl lg:text-start text-center  text-gray-500 p-2 " >

       Become Our Partner and Push The Platform
       </h3>

       <p className="w-full max-w-4xl mt-3 font-poppins text-md text-center text-[#615c61] leading-loose ">

       We are happy to accept anyone willing to represent us in various institutions. If you are interested, contact us for more details.
       </p>
            </div>
            <div className="flex justify-center pt-10">
            
            <button className="button">
               Contact Us
             
            </button>
            
                         </div>


           
              </div>
        </>
    )
}