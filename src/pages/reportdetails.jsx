import { useParams } from "react-router-dom"
import { Report } from "../component/reportarray"

export const ReportDetails = () => {
// use params
    const {id} = useParams()
    //find product by id
    const report = Report[Number(id)]
    if(!report){
        return 'No report Found'
    }
const formatDate = (dateString) => {
    const [day, month, year] = dateString.split('/').map(Number)
    const date = new Date(year, month -1, day)

    const option ={year: 'numeric', month:'long', day:'numeric'}
    return date.toLocaleDateString('en-Us', option)
}
    return(
<>
<div className='pt-20 z-10'>
             
             <div className="flex flex-col justify-center items-center lg:pt-[45px] py-5 p-4 ">
             <h3 className="lg:text-3xl font-poppins  text-md text-start   text-gray-500 pt-4 " >
               <span>{report.name } ({report.location})</span>
           </h3>
           <div className="pt-7">
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 pt-2 gap-6 border-t pl-[100px] p-10"> 
          <div className="flex flex-col pt-5">
           <p className="font-poppins lg:text-md text-sm text-[#615c61] mb-4">Reported on {formatDate(report.date)} By Lost and Found
           </p>
           <div className="inline-flex w-full flex-col items-start justify-start border-b border border-slate-100 bg-white "> 
                    <img src={report.image} className="w-full max-w-md max-w-4xl rounded-[15px]" />
                    </div>
          </div>

          <div className="flex flex-col pt-3">
           <h3 className="font-poppins lg:text-2xl text-2xl text-[#615c61] mb-4 text-center">Report Details
           </h3>
           <div className="inline-flex w-full flex-col items-start justify-start  mb-5">
            <p><span className="font-poppins font-bold  text-[14px] text-[#615c61] mb-4">Item Was Found On:</span>
             <span className="text-[#615c61] ml-1  font-poppins">{report.date}</span>
            </p>
            <p className="pt-8"><span className="font-poppins font-bold text-[#615c61] text-[14px]  pt-8">Item Description:
            </span>
          
            </p>
            <p className="font-poppins text-[14px] text-[#615c61] mb-2 max-w-md max-w-4xl leading-loose">
                {report.description}
            </p>
            <p className="font-poppins text-[14px]  text-[#615c61] mb-1 max-w-md max-w-4xl leading-loose">
            Kindly contact the finder with proof of ownership to claim. Lost and Found advises that you meet whoever found this in a secure and open place.
            </p>
            <p className="font-poppins text-[14px]  text-[#615c61] mb-1 max-w-md max-w-4xl leading-loose">
            Feel free to contact Lost and Found to report your missing, found, or stolen items.<a className="text-[#FEA116]" href="#">Send a message on WhatsApp </a> 
            </p>
           </div>

           <div className="border-t pt-5">
           <h3 className="font-poppins lg:text-2xl text-2xl text-[#615c61] mb-4 text-center">Finder Contact Info.
           </h3>
           <p className="mb-5"><span className="font-poppins font-bold text-[#615c61] text-sm mb-4">Phone Number:</span>
             <span className="font-poppins ml-1 text-[#615c61] text-sm">+2348093750938</span>
            </p>
            <p className="mb-3 mt-3"><span className="font-poppins font-bold text-[#615c61] text-sm mb-4">Email:</span>
             <span className="font-poppins ml-1 text-[#615c61] text-sm">  ejimnkonyeonyedika@gmail.com</span>
            </p>
           </div>
           <p className="mb-3 mt-3"><span className="font-poppins font-bold text-[#615c61] text-sm mb-4">Whatsapp:</span>
             <span className="font-poppins text-[#615c61] ml-1 text-sm"> <a className="text-[#FEA116]" href="#">Send a message on WhatsApp</a> </span>
            </p>
           </div>
           </div>
           </div>
        
           </div>
           </div>
</>
    )

}