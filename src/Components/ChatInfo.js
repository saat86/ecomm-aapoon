import React from "react";
import { Box } from "@mui/material";
import ChatName from "./ChatName";

function ChatInfo() {
  return (
    <Box>
      <Box sx={{borderBottom: 1, borderColor: "divider" }}>Heading</Box>
      <Box>
        <ChatName />
        <ChatName />
        <ChatName />
      </Box>
    </Box>
  );
}

export default ChatInfo;
