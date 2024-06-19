import React from "react";
import { Box } from "@mui/material";
import ChatName from "./ChatName";

function ChatInfo(props) {
  return (
    <Box sx={{borderRight: 1, borderColor: "divider",height:'100vh',width:'100%'}}>
      <Box sx={{borderBottom: 1, borderColor: "divider" ,padding:"0px 0px 20px 10px" }}>Heading</Box>
      <Box >
        {props.names.map((name,index)=>(
          <ChatName name={name}/>
        ))}
     
      </Box>
    </Box>
  );
}

export default ChatInfo;
