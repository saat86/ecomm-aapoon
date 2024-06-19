import React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Grid from "@mui/material/Grid";
import ChatInfo from "./ChatInfo";
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import SettingsIcon from '@mui/icons-material/Settings';
import RemoveRoadIcon from '@mui/icons-material/RemoveRoad';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

function SideTab() {
  const [value, setValue] = React.useState("1");
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const tabs = [
    { icon: <PowerSettingsNewIcon />, value: "1" },
    { icon: <SettingsIcon />, value: "2" },
    { icon: <RemoveRoadIcon />, value: "3" },
    { icon: <AccountBalanceIcon />, value: "4" },
  ];

  const chatData = [
    { names: ["Saatvik", "Aria", "Aaron", "Hello", "Travis", "Scott"] },
    { names: ["Bro", "Bella", "Bryan", "Travis", "Scott"] },
    { names: ["Charlie", "Cathy", "Chris", "Hello", "Scott"] },
    { names: ["Dave", "Dana", "Derek", "Hello", "Travis"] },
  ];

  return (
    <Box sx={{ typography: "body1" }}>
      <TabContext value={value}>
        {isMobile ? (
          <Box>
            <TabList
              onChange={handleChange}
              aria-label="Mobile tab list"
              sx={{ borderBottom: 1, borderColor: "divider",  display: 'flex', 
              flexDirection: 'row', 
              justifyContent: 'center',   }}
              variant="scrollable"
              scrollButtons="auto"
            >
              {tabs.map((tab) => (
                <Tab
                  key={tab.value}
                  icon={tab.icon}
                  value={tab.value}
                  sx={{
                    minWidth: "auto", // Adjusted for mobile view
                   // Adjusted padding for mobile view
                  }}
                />
              ))}
            </TabList>
            {chatData.map((chat, index) => (
              <TabPanel key={index} value={(index + 1).toString()} sx={{ width:'100vh',padding:'0px' }}>
                <ChatInfo names={chat.names} />
              </TabPanel>
            ))}
          </Box>
        ) : (
          <Grid container>
            <Grid item xs={2} sx={{ borderRight: 1, borderColor: "divider" }}>
              <TabList
                onChange={handleChange}
                aria-label="Desktop tab list"
                sx={{ display: "flex", flexDirection: "column", height: "100%", alignItems: "center",color:'red' }}
                className="flex-col"
              >
                {tabs.map((tab) => (
                  <Tab
                    key={tab.value}
                    icon={tab.icon}
                    value={tab.value}
                    sx={{
                      minWidth: "60px", // Ensures a minimum width for better centering
                      padding: '10px', // Original padding for desktop view
                    }}
                  />
                ))}
              </TabList>
            </Grid>
            <Grid item xs={10}>
              {chatData.map((chat, index) => (
                <TabPanel key={index} value={(index + 1).toString()} sx={{ padding: '10px', margin: '3px',width:'250px' }}>
                  <ChatInfo names={chat.names} />
                </TabPanel>
              ))}
            </Grid>
          </Grid>
        )}
      </TabContext>
    </Box>
  );
}

export default SideTab;
