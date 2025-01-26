import { Box, Typography, TextField,  Card, CardContent, List, ListItem, ListItemText, Divider, FormGroup, FormControlLabel, Checkbox, } from "@mui/material";


export const EditReports = () => {
    return(
        <>
        <div className='pt-20 z-10'>
           
           <div className="flex flex-col justify-center items-center lg:pt-[45px] lg:pr-[100px] lg:pl-[180px] py-5 p-5">

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

      {/* Main Content */}
      <Box flexGrow={1} bgcolor="#3F384A0D"
           width={{ xs: "100%", lg: "auto" }}
      borderRadius={2} p={3} boxShadow={3} >
        <Typography variant="h5" fontWeight="bold" mb={3} className="lg:text-3xl font-poppins font-bold text-2xl text-start   text-gray-500 ">
           Edit a Report
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
            <Box display="flex" justifyContent="center">
              <button 
               
              className="border border-[#000] font-poppins px-2 py-2 text-md rounded-lg bg-[#3F384A0D] transition-colors duration-200 hover:text-[#FEA116] hover:border-[#FEA116] " >
                Update Report
              </button>
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