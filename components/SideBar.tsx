import { Drawer, ListProps, useTheme,useMediaQuery } from '@mui/material';
import React from 'react';
import { MyDrawer,Props } from './MyDrawer';
import { darken } from '@mui/material';
import { Album, Favorite, Info, QueueMusic } from '@mui/icons-material';
import {styled} from '@mui/material/styles';
import { Box, Divider,List, ListItemButton,ListItemText,ListItemIcon, Typography} from '@mui/material'
import { ElementType } from 'react';
import { useQueryClient,QueryClient } from '@tanstack/react-query';

const StyledSideBar=styled(List)<ListProps & { component: ElementType }>(({theme})=>({
 flexBasis:'16.4rem',
 width:'16.4rem',
 flexShrink:0,
 background:theme.palette.secondary.main,
 '.MuiListItemButton-root':{
  borderRadius:12,
  margin:'0.8rem',
  color:'white',
  ':hover':{
    backgroundColor:theme.palette.secondary.dark,
  },
  '.MuiListItemText-primary':{
    fontWeight:600,
    fontSize:'1.1rem',
  },
  '.MuiListItemIcon-root':{
    color:'white'
  }
 }
}))

function SideBar(props:Props) {
  const queryClient=new QueryClient()
  const theme=useTheme()
  const matches = useMediaQuery(theme.breakpoints.up('sm'));
  const Sz=matches?React.Fragment:MyDrawer
    return ( 
    <Sz {...props}>
    <StyledSideBar component='nav' disablePadding>
      <Box className='sticky top-0'>
       <Box px={1} py={1} sx={{backgroundColor:darken(theme.palette.secondary.main,0.22)}}><Typography className='select-none text-white !font-bold' variant='h5' component='h2' textAlign='center'><span className='text-black'>MISC</span> <span className='text-[2rem]'>X</span> <span className='text-lime-400'>SPOTIFY</span></Typography></Box>
       <Divider/>
        <ListItemButton><ListItemIcon>
            <QueueMusic/>
          </ListItemIcon><ListItemText primary="Playlist" /></ListItemButton>
        <ListItemButton>
        <ListItemIcon>
        <Favorite/>
          </ListItemIcon><ListItemText primary="Favorites" /></ListItemButton>
        <ListItemButton>
        <ListItemIcon>
            <Album/>
          </ListItemIcon><ListItemText primary="Artists" /></ListItemButton>
        <ListItemButton>
        <ListItemIcon onClick={()=>queryClient.fetchInfiniteQuery(['songs'])}>
            <Info/>
          </ListItemIcon><ListItemText primary="Info & Help" /></ListItemButton>
          </Box>
      </StyledSideBar></Sz> );
}

export default SideBar;