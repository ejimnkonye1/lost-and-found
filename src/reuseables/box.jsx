import { Box,  List, ListItem, ListItemText,  } from "@mui/material";
export const SmallBox = () => {
    return(
        <>
          <Box
    sx={{
      display: { xs: "block", lg: "none" }, // Show only on small screens
      bgcolor: "white",
    
      borderRadius: 2,
      boxShadow: 3,
      width: "100%", // Full width on small screens
      textAlign: "center", // Center text
      mb: 2,
      overflow: "hidden",
    }}
  >
    
  <List className="inline-flex flex lg:flex-row items-center justify-center space-x-[-10px]">
  <ListItem className="text-sm" button component="a" href="/dashboard/my-reports/">
    <ListItemText className="text-[#615c61] text-nowrap" primary="My Reports" />
  </ListItem>
  <ListItem className="text-sm mr-4" button component="a" href="/dashboard/submit-report/">
    <ListItemText className="text-[#615c61] text-sm text-nowrap" primary="Submit Reports" />
  </ListItem>
  <ListItem className="text-sm mr-4" button component="a" href="/dashboard/edit-report/">
    <ListItemText className="text-[#615c61] text-sm text-nowrap" primary="Edit Reports" />
  </ListItem>
</List>
  </Box>
        </>
    )
}