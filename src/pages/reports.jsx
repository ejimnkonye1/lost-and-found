import {  FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material"

import { IoIosSearch } from "react-icons/io";
import { useEffect, useState } from "react";
import { Report } from "../component/reportarray";
import { Link } from "react-router-dom";
export const Reports = () => {
const [filterLocation, setFilterLocation] = useState(null)
const [filterReport, setFilterReport] = useState([])
const [query , setQuery] = useState()
const [searchError, setSearchError] = useState()


const handleLocation = (location) => {
    setFilterLocation(location)
    FilterReport(query, location)
}
const handleSearch = (query) => {
    setQuery(query)
    FilterReport(query, filterLocation)
}

const FilterReport = (query, location) => {
   
        const filter = Report.filter((report) =>{
         const searchResult =   report.name?.toLowerCase().includes(query.toLowerCase()) ||
           report.description?.toLowerCase().includes(query.toLowerCase()) ||
           report.location?.toLowerCase().includes(query.toLowerCase()) 
         const locationResult = location ? report.location?.toLocaleLowerCase() === location?.toLocaleLowerCase(): true;
           return searchResult && locationResult
    })
   
         setFilterReport(filter)
         setSearchError(filter.length === 0)


}


// make the component mount intially
useEffect(() => {
setFilterReport(Report)
},[])

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
        <>
   <div className='pt-20 z-10'>
             
        <div className="flex flex-col justify-center items-center lg:pt-[45px] py-5">
        <h3 className="lg:text-3xl font-poppins font-bold text-md lg:text-start text-center   text-gray-500 p-2" >
          <span>Search our database for your missing property</span>
      </h3>

        </div>
             <div className=" flex items-center justify-center">
              <form className="lg:w-[1100px] w-full p-4" >

                  <div className="relative">
  
                  
              <TextField 
              fullWidth
              label='Search..'
              className=""
              value={query}
              onChange={(e)=> handleSearch(e.target.value)}
              
              />
              <div className="relative flex pr-5 justify-end top-[-40px] down-20">
             <span><IoIosSearch  size={'25'}/> </span> 
              </div>
              </div>
              </form>
            </div>
              
            <div className="p-5 lg:pr-[120px] lg:pl-[120px]">
        <div className="flex flex-col lg:flex-row justify-between items-center w-full p-4  rounded-lg">
            <h3 className="mb-4 lg:mb-0 lg:text-xl text-nowrap font-poppins mr-3  text-gray-500">
                Filter Location?
            </h3>
         
         <FormControl fullWidth variant="outlined">
                <InputLabel id="filter-label">Select Location</InputLabel>
                <Select
                    labelId="filter-label"
                    displayEmpty
                    value={filterLocation}
                    onChange={(e) => handleLocation(e.target.value)}
                    label="Select Location"
                >
                    <MenuItem value="" disabled>Select</MenuItem>
                    <MenuItem value='Mtn Stand' >Mtn Stand</MenuItem>
                    <MenuItem value='Fans Faculty'>Fans Faculty</MenuItem>
                    <MenuItem value='Hall C' >Hall C</MenuItem>
                    <MenuItem value="Cafeteria">Cafeteria</MenuItem>
                </Select>
            </FormControl>
         
        </div>

       
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-10 gap-[70px] "> 
    {searchError ? (
    <p>no result found</p>    
    ):(
        <>
           {filterReport.map((report, id) => (
          <div key={id} className="flex justify-center items-center">     
              <div className="relative flex w-80 h-[350px] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                  <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl  bg-clip-border text-white shadow-lg " >
                    <Link to={`/details/${report.id}`}>
                      <img src={report.image} className="w-full h-full object-cover" /> 
                     </Link>
                  </div>
                  <div className="p-6">
                      <h5 className="text-[#615c61] lg:text-lg text-[15px] block font-sans font-semibold leading-snug tracking-normal mb-2 font-semibold antialiased">
                          {report.name}
                      </h5>
                      <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
          {Formatstring(report.description)}
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
              
       


<nav aria-label="Page navigation example">
  <ul className="flex items-center -space-x-px h-10 text-base">
    <li>
      <a href="#" className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-[#615c61] hover:bg-gray-300 rounded-s-lg  hover:text-gray-700 ">
        <span className="sr-only">Previous</span>
        <svg className="w-3 h-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
        </svg>
      </a>
    </li>
    <li>
      <a href="#" className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-[#615c61] hover:bg-gray-300 hover:text-gray-700 ">1</a>
    </li>
    <li>
      <a href="#" className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-[#615c61] hover:bg-gray-300 hover:text-gray-700 ">2</a>
    </li>
    <li>
      <a href="#" aria-current="page" className="z-10 flex items-center justify-center px-4 h-10 leading-tight  border   text-[#FEA116] border-gray-700 bg-gray-700 ">3</a>
    </li>
    <li>
      <a href="#" className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-[#615c61] hover:bg-gray-300  hover:text-gray-700 ">4</a>
    </li>
    <li>
      <a href="#" className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-[#615c61] hover:bg-gray-300 hover:text-gray-700 ">5</a>
    </li>
    <li>
      <a href="#" className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-[#615c61] rounded-e-lg hover:bg-gray-300 hover:text-gray-700 ">
        <span className="sr-only">Next</span>
        <svg className="w-3 h-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
        </svg>
      </a>
    </li>
  </ul>
</nav>

              
                           </div>
               </div>
       
          
             </div>
        </>
    )
}