import React from 'react'
import { Box } from '@mui/material'
import Typography from '@mui/material/Typography';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function ChatName(props) {
    return (
        <Box sx={{borderBottom: 1, borderColor: "divider",margin:'10px 3px', display:'flex',padding:'7px'}  }>
        <AccountCircleIcon />
        <Typography sx={{marginLeft:'5px',fontWeight:'bold'}}>
            {props.name}
        </Typography>
        </Box>
    )
}

export default ChatName
