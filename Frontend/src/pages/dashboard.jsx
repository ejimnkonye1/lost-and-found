import { Box, Typography,  Card, CardContent, List, ListItem, ListItemText, Divider,  } from "@mui/material";
import { SmallBox } from "../reuseables/box";
import { Report } from "../component/reportarray";

export const Dashboard = () => {
    return(
        <>
        <div className='pt-20 z-10'>
           
           <div className="flex flex-col justify-center items-center lg:pt-[45px] lg:pr-[100px] lg:pl-[180px] py-5 lg:p-5">
         
             <Box display="flex" flexDirection={{ xs: "column", lg: "row" }} width="100%" p={2} bgcolor="#" minHeight="100vh">
               {/* Sidebar */}
               <Box
                 sx={{
                   width: { xs: "100%", lg: "20%" },
                   bgcolor: "white",
                   p: 2,
                   borderRadius: 2,
                   boxShadow: 3,
                   mr: { lg: 2 },
                   mb: { xs: 2, lg: 0 },
                   display: { xs: "none", lg: "block" },
                 }}
                 
               >
                 <Typography variant="h6" mb={2} fontWeight="bold" textAlign="center" className="font-poppins text-md text-[#615c61] ">
                   Dashboard
                 </Typography>
                 <List>
                   <ListItem className="font-bold text-2xl" button component="a" href="/dashboard/my-reports/">
                     <ListItemText className=" text-gray-500 font-poppins lg:text-4xl font-bold" primary="My Reports" />
                   </ListItem>
                   <Divider />
                   <ListItem className="font-bold" button component="a" href="/dashboard/submit-report/">
                     <ListItemText className=" text-[#615c61] font-poppins" primary="Submit Reports" />
                   </ListItem>
                   <Divider />
                   <ListItem button component="a" href="/dashboard/edit-report/">
                     <ListItemText className=" text-[#615c61]" primary="Edit Reports" />
                   </ListItem>
                 </List>
               </Box>
         
               {/* //small screens // */}
             <SmallBox />
               {/* Main Content */}
               <Box flexGrow={1}
                bgcolor="#3F384A0D"
                 borderRadius={2} p={3}
                  boxShadow={3}
                  width={{ xs: "100%", lg: "auto" }}
                  >
                 <Typography variant="h5" fontWeight="bold" mb={3} className="lg:text-3xl font-poppins font-bold text-2xl text-start   text-gray-500 ">
                    My Reports
                 </Typography>
                 <Card variant="outlined" bgcolor='#3F384A0D' sx={{ mb: 3 }}>
                   <CardContent className="bg-[#3F384A0D]">
            
                   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-4">
           {Report.map((report, id) => (
             <div key={id} className="flex flex-col bg-white border border-slate-200 rounded-lg shadow-md overflow-hidden">
               <img src={report.image} className="w-full h-48 object-cover" alt={report.name} />
               <div className="p-6 flex flex-col flex-grow">
                 <h3 className="text-md font-semibold text-gray-800">{report.name}</h3>
                 <div className="flex items-center justify-between mt-2">
                   <p className="text-sm text-gray-600">Status:</p>
                   <span className="text-sm font-medium text-yellow-500">Pending</span>
                 </div>
               </div>
               <div className="flex justify-between border-t p-4">
                 <button className="text-blue-500 hover:text-blue-700 font-semibold">Edit</button>
                 <button className="text-red-500 hover:text-red-700 font-semibold">Delete</button>
               </div>
             </div>
           ))}
         </div>
         
         
         
                   </CardContent>
                 </Card>
               </Box>
             </Box>
         
         
                     </div>
            </div>
        </>
    )
}