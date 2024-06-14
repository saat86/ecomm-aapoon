import React from 'react'
import Box from '@mui/material/Box';
import SideTab from './SideTab';
import Chat from '../Chat';


function Body() {
    return (
        <>
            <Box  sx={{ display: 'flex', p: 1, bgcolor: 'background.paper', borderRadius: 1, width: '100%' }}>
            <Box  >
            <SideTab />
        
            </Box>
            <Box sx={{  flexGrow: 1 }}>
               <Chat />
            </Box>
                
            </Box>
        </>
        
    )
}

export default Body
