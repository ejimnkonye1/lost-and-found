import {  InputLabel, MenuItem, Select, TextField } from "@mui/material"
import img1 from '../assets/img.webp'
import { IoIosSearch } from "react-icons/io";
import { useState } from "react";
const Report= [
    {
        name: 'Lost Wallet – Sarah Johnson',
        image: img1,
        date: '15/10/2024',
        location: 'Lagos, Victoria Island'
    },
    {
        name: 'Lost Wallet – Sarah Johnson',
        image: img1,
        date: '15/10/2024',
        location: 'Lagos, Victoria Island'
    },
    {
        name: 'Found Keys – John Doe',
        image: img1,
        date: '14/10/2024',
        location: 'Abuja, Central Area'
    },
    {
        name: 'Lost Phone – Mary Smith',
        image: img1,
        date: '13/10/2024',
        location: 'Kano, Sabon Gari'
    },
    {
        name: 'Found Glasses – David Brown',
        image: img1,
        date: '12/10/2024',
        location: 'Port Harcourt, GRA'
    },
    {
        name: 'Lost Backpack – Emily Davis',
        image: img1,
        date: '11/10/2024',
        location: 'Ibadan, Bodija'
    },
    // {
    //     name: 'Found Watch – Michael Wilson',
    //     image: img1,
    //     date: '10/10/2024',
    //     location: 'Enugu, New Haven'
    // },
    // {
    //     name: 'Lost Ring – Jessica Taylor',
    //     image: img1,
    //     date: '09/10/2024',
    //     location: 'Owerri, Wetheral Road'
    // },
    // {
    //     name: 'Found Book – Daniel Anderson',
    //     image: img1,
    //     date: '08/10/2024',
    //     location: 'Benin City, Ring Road'
    // },
    // {
    //     name: 'Lost Jacket – Laura Martinez',
    //     image: img1,
    //     date: '07/10/2024',
    //     location: 'Abuja, Wuse'
    // },
];
export const Reports = () => {
    const [filter, setfilter] = useState(null)
    return(
        <>
   <div className='pt-20 z-10'>
             
        <div className="flex flex-col justify-center items-center lg:pt-[45px] py-5">
        <h3 className="lg:text-3xl font-poppins font-bold text-2xl text-start   text-gray-500 p-2" >
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
              
              />
              <div className="relative flex pr-5 justify-end top-[-40px] down-20">
             <span><IoIosSearch  size={'25'}/> </span> 
              </div>
              </div>
              </form>
            </div>
              
            <div className="p-5 lg:pr-[120px] lg:pl-[120px]">
          <div className="flex justify-between w-[30%]">
          <h3 className="mb-5 lg:text-2xl font-poppins font-normal text-1xl text-start   text-gray-500 p-2">Filter Location?</h3>
          <div>
          <InputLabel id="filter-label">Select</InputLabel>
            <Select
              labelId="filter-label"
                displayEmpty
            fullWidth
            aria-placeholder="select"
           value={filter}
             onChange={(e) => setfilter(e.target.value)}
            >  
                     <MenuItem value='' disabled >Select</MenuItem>
                <MenuItem value='Mtn stand' >Mtn Stand</MenuItem>
                <MenuItem value='Fans Faculty' >Fans Faculty</MenuItem>
            </Select>
          </div>

          </div>
  
       
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-10 gap-[70px]"> 
      {Report.map((report, index) => (
          <div key={index} className="">     
              <div className="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                  <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl  bg-clip-border text-white shadow-lg ">
                      <img src={report.image} className="w-full h-full object-cover" /> {/* Ensure uniformity */}
                  </div>
                  <div className="p-6">
                      <h5 className="text-[#615c61] lg:text-lg text-[15px] block font-sans font-semibold leading-snug tracking-normal mb-2 font-semibold antialiased">
                          {report.name}
                      </h5>
                      <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                      A file holder/bag was found along Pharmacy works road this morning by a student
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