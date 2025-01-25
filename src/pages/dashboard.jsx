import { Box, Typography, TextField, Button, Card, CardContent, List, ListItem, ListItemText, Divider, FormGroup, FormControlLabel, Checkbox, FormHelperText } from "@mui/material";


export const Dashboard = () => {
    return(
        <>
        <div className='pt-20 z-10'>
           
           <div className="flex flex-col justify-center items-center lg:pt-[45px] pr-[100px] pl-[180px] py-5 p-5">
           {/* <section className="flex   w-[100%]">
        <section className="lg:w-[20%] h-auto">
        <div className="bg-white p-4 flex flex-col gap-4 shadow-xl rounded-xl h-auto ">
        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200 pt-10" >
      <li>
        <a href="/dashboard/my-reports/" className="block px-4 py-2 text-[#615c61] text-[18px] font-poppins text-nowrap p-20  transition-colors  mb-8 ">My Reports</a>
      </li>
      <li>
        <a href="dashboard/submit-report/" className="block px-4 py-2 text-[18px] font-poppins text-nowrap text-[#615c61] transition-colors mb-8">Submit Reports</a>
      </li>
      <li>
        <a href="/dashboard/edit-report/" className="block px-4 py-2 text-[#615c61] text-[18px] font-poppins text-nowrap transition-colors ">Edit Report</a>
      </li>
   
    </ul>
    </div>
        </section>


        <section className="flex-grow lg:w-[75%]">

       
    <div className="flex-grow bg-gray-400 rounded-xl p-4 w-full">
        <div className="mb-4">
            <label htmlFor="reportTitle" className="block text-gray-700 font-bold mb-2">Report Title*</label>
            <input type="text" id="reportTitle" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter Report Title" />
            <p className="text-gray-500 text-sm">This should contain the title of the property you're reporting.</p>
        </div>
        <div className="mb-4">
            <label htmlFor="image" className="block text-gray-700 font-bold mb-2">Image*</label>
            <input type="file" id="image" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Upload an image" />
            <p className="text-gray-500 text-sm">Please upload a relevant image for your report.</p>
        </div>
        <div className="mb-4">
            <label htmlFor="description" className="block text-gray-700 font-bold mb-2">Description*</label>
            <textarea id="description" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" rows="4" placeholder="Enter a detailed description of the report"></textarea>
            <p className="text-gray-500 text-sm">Provide as much detail as possible.</p>
        </div>
        <div className="flex justify-end">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Save Report</button>
        </div>
    </div>
    </section>
</section> */}

    <Box display="flex" width="100%" p={2} bgcolor="#" minHeight="100vh">
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

      {/* Main Content */}
      <Box flexGrow={1} bgcolor="#3F384A0D" borderRadius={2} p={3} boxShadow={3}>
        <Typography variant="h5" fontWeight="bold" mb={3} className="lg:text-3xl font-poppins font-bold text-2xl text-start   text-gray-500 ">
          Create or Edit a Report
        </Typography>
        <Card variant="outlined" bgcolor='#3F384A0D' sx={{ mb: 3 }}>
          <CardContent className="bg-[#3F384A0D]">
            {/* Report Title */}
            <Box mb={3}>
              <Typography variant="body1" fontWeight="bold" className="text-[#615c61] font-poppins" mb={1}>
                Report Title <span className="text-red-900">*</span>
              </Typography>
              <TextField
                fullWidth
                variant="outlined"
                placeholder="Enter Report Title"
                helperText="This should contain the title of the property you're reporting."
              />
            </Box>

            {/* Image Upload */}
            <Box mb={3}>
              <Typography variant="body1" fontWeight="bold" mb={1} className="text-[#615c61] font-poppins">
                Image*
              </Typography>
              <TextField
                type="file"
                fullWidth
                variant="outlined"
                InputLabelProps={{ shrink: true }}
                helperText="Please upload a relevant image for your report."
              />
            </Box>

            {/* Description */}
            <Box mb={3}>
              <Typography variant="body1" fontWeight="bold" mb={1} className="text-[#615c61] font-poppins" >
                Description*
              </Typography>
              <TextField
                fullWidth
                multiline
                rows={4}
                variant="outlined"
                placeholder="Enter a detailed description of the report"
                helperText="Provide as much detail as possible."
              />
            </Box>
{/* Report Type */}
<Box mb={3}>
  <Typography variant="body1" fontWeight="bold" mb={1} className="text-[#615c61] font-poppins">
    Report Type*
  </Typography>
  <FormGroup>
    <FormControlLabel
      control={<Checkbox />}
      label="Found"
    />
  </FormGroup>

</Box>

{/* Location */}
<Box mb={3}>
  <Typography variant="body1" fontWeight="bold" mb={1} className="text-[#615c61] font-poppins">
    Location*
  </Typography>
  <TextField
    fullWidth
    variant="outlined"
    placeholder="Enter Location"
    helperText="Provide the location of the property."
  />
</Box>

{/* The Date the Property Was Found */}
<Box mb={3}>
  <Typography variant="body1" fontWeight="bold" mb={1} className="text-[#615c61] font-poppins">
    The Date the Property Was Found*
  </Typography>
  <TextField
    fullWidth
    type="date"
    variant="outlined"
    helperText="Select the date the property was found."
  />
</Box>

{/* Phone Number */}
<Box mb={3}>
  <Typography variant="body1" fontWeight="bold" mb={1} className="text-[#615c61] font-poppins">
    Phone Number*
  </Typography>
  <TextField
    fullWidth
    variant="outlined"
    placeholder="Enter Phone Number"
    helperText="Provide a contact phone number."
  />
</Box>

{/* WhatsApp Number */}
<Box mb={3}>
  <Typography variant="body1" fontWeight="bold" mb={1} className="text-[#615c61] font-poppins">
    WhatsApp Number*
  </Typography>
  <TextField
    fullWidth
    variant="outlined"
    placeholder="Enter WhatsApp Number"
    helperText="Provide a contact WhatsApp number."
  />
</Box>

{/* Email */}
<Box mb={3}>
  <Typography variant="body1" fontWeight="bold" mb={1} className="text-[#615c61] font-poppins">
    Email*
  </Typography>
  <TextField
    fullWidth
    variant="outlined"
    placeholder="Enter Email"
    helperText="Provide a contact email address."
  />
</Box>


            {/* Save Button */}
            <Box display="flex" justifyContent="flex-end">
              <Button variant="contained"  color="#3F384A0D" size="large">
                Save Report
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Box>


            </div>
            </div>
        </>
    )
}