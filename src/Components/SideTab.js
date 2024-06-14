import React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Grid from "@mui/material/Grid";
import ChatInfo from "./ChatInfo";

function SideTab() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ typography: "body1" }}>
      <TabContext value={value}>
        <Grid container>
          <Grid item xs={2} sx={{ borderRight: 1, borderColor: "divider" }}>
            <TabList
              onChange={handleChange}
              aria-label="lab API tabs example"
              sx={{ display: "flex", flexDirection: "column", height: "100vh" }}
            >
         
              <Tab label="Item One" value="1" />
              <Tab label="Item Two" value="2" />
              <Tab label="Item Three" value="3" />
            </TabList>
          </Grid>
          <Grid item xs={10}>
            <TabPanel value="1" sx={{padding:'10px 0px', margin:'3px', width:'250px'}}><ChatInfo/></TabPanel>
            <TabPanel value="2" sx={{padding:'10px 0px', margin:'3px', width:'250px'}}><ChatInfo/></TabPanel>
            <TabPanel value="3" sx={{padding:'10px 0px', margin:'3px', width:'250px'}}><ChatInfo/></TabPanel>
           
          </Grid>
        </Grid>
      </TabContext>
    </Box>
  );
}

export default SideTab;
