import { Box } from '@mui/material';
import SideBar from '../components/SideBar';
import NavBar from '../components/NavBar';
import { useState } from 'react';

function PageWrapper({children}:{children:React.ReactNode}) {
    const [openDrawer,setOpenDrawer]=useState(false)
    return ( 
        <>
        <NavBar handleOpenDrawer={()=>setOpenDrawer(prev=>!prev)}/>
    <Box display='flex' minHeight='95vh'>
      <SideBar openDrawer={openDrawer} handleCloseDrawer={()=>setOpenDrawer(false)}/>
      {children}
      </Box>
      </>
     );
}

export default PageWrapper;