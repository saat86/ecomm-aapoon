import React from 'react';
import Box from '@mui/material/Box';
import SideTab from './SideTab';
import Chat from '../Chat';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

function Body() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
      <Box sx={{ display: 'flex', p: 1, bgcolor: 'background.paper', borderRadius: 1}}>
        <Box>
          <SideTab />
        </Box>
        {!isMobile && (
          <Box sx={{ flexGrow: 1 }}>
            <Chat />
          </Box>
        )}
      </Box>
    </>
  );
}

export default Body;
