import React from 'react'
import { Box } from '@mui/material'
import Typography from '@mui/material/Typography';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function ChatName() {
    return (
        <Box sx={{borderBottom: 1, borderColor: "divider",margin:'10px 3px', display:'flex',}  }>
        <AccountCircleIcon />
        <Typography>
            Name
        </Typography>
        </Box>
    )
}

export default ChatName
