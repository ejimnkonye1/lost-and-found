import {  TextField } from "@mui/material"
import { IoIosSearch } from "react-icons/io";
import { Report } from "../component/reportarray";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export const Home = () => {
const navigate = useNavigate()
const [filterReport, setFilterReport] = useState([])
const [query , setQuery] = useState()
const [searchError, setSearchError] = useState()
const handleSearch = (query) => {
    setQuery(query)
    if(query){
        const filter = Report.filter((report) =>
            report.name?.toLowerCase().includes(query.toLowerCase()) ||
           report.description?.toLowerCase().includes(query.toLowerCase()) ||
           report.location?.toLowerCase().includes(query.toLowerCase()) 
        )
         setFilterReport(filter)
         setSearchError(filter.length === 0)
    } else{
       setFilterReport(Report)
       setSearchError(false)
    }

}
// make the component mount intially
useEffect(() => {
setFilterReport(Report)
},[])
const allreportbtn = () => {
    navigate('/reports')
}
const Formatstring = (input) => {
    if (typeof input !== 'string') {
        console.warn('Input is not a valid string:', input);
        return ''; 
    }
    // Check if the input length exceeds 100 characters
    if (input.length > 100) {
       
        const letter = input.slice(0, 90);
        return `${letter}...`;
    } else {
        return input; // Return the original input if it's 100 characters or less
    }
};
    return(
        <div className='pt-20 z-10'>
           
      <div className="flex flex-col justify-center items-center lg:pt-[45px] py-5">
      <h3 className="lg:text-3xl font-poppins font-bold text-2xl text-start   text-gray-500 p-2" >
        <span>Lost and Found</span>
    </h3>
    <p className="font-poppins text-md text-[#615c61] ">We Help You Find Missing Items Fast</p>
      </div>
           <div className=" flex items-center justify-center">
            <form className="lg:w-[1100px] w-full p-4" >
                <div className="relative">

                
            <TextField 
            fullWidth
            label='Search..'
            className=""
            value={query}
            onChange={(e) => handleSearch(e.target.value)}
            />
            <div className="relative flex pr-5 justify-end top-[-40px] down-20">
           <span><IoIosSearch  size={'25'}/> </span> 
            </div>
            </div>
            </form>
          </div>
            
          <div className="p-5 lg:pr-[120px] lg:pl-[120px]">
          <h3 className="mb-5 lg:text-2xl font-poppins font-bold text-1xl text-start   text-gray-500 p-2">Browse Our Latest Reports..</h3>
          

     
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-10 gap-[70px]"> 
    {searchError ?(
    <p className="text-center "> No results found</p>
    ): (
        <>
          {filterReport.map((report, id) => (
        <div key={id} className="flex justify-center items-center">     
            <div className="relative flex w-80 h-[350px] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl  bg-clip-border text-white shadow-lg ">
                <Link to={`/details/${report.id}`}>
                    <img src={report.image} className="w-full h-full object-cover" /> 
                    </Link>
                </div>
                <div className="p-6">
                    <h5 className="text-[#615c61] lg:text-lg text-[15px] block font-sans font-semibold leading-snug tracking-normal mb-2 font-semibold antialiased">
                        {report.name}
                    </h5>
                    <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
            { Formatstring (report.description)}
    </p>
                 
                </div>
                <div className="p-6 pt-0">
    <button data-ripple-light="true" type="button" className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
      Read More
    </button>
  </div>
            </div>
        </div>
    ))}
        </>
)}
  
</div>



<div className="flex justify-center pt-10">
            
            <button className="button" onClick={allreportbtn}>
               All Reports
              <svg className="icon" viewBox="0 0 24 24" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
            
                         </div>
             </div>
     
        
           </div>
        
    )
}