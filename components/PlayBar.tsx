
import { Close, CloseFullscreen } from "@mui/icons-material";
import { Snackbar,Stack,Avatar, Typography, IconButton } from "@mui/material";
import { useState } from "react";
import Draggable from "react-draggable";
import { useAppSelector,useAppDispatch } from "../app-state/app-hooks";
import { selectSong } from "../app-state/app-state";
import {stop} from '../app-state/app-state'
import SongPlayer from "./SongPlayer";

function PlayBar() {
  const {song}=useAppSelector(selectSong=>selectSong)
  const dispatch=useAppDispatch()
  
    return ( 
       <Draggable onDrag={(e:any)=>{e.target.style.cursor='pointer'}} onStop={(e:any)=>{e.target.style.cursor='initial'}}>
        <Snackbar
         open={song.playing}
         sx={{'*':{color:'white !important'}}}        
        >
        <Stack component='div' sx={{background:`url('${song.background}')`}} flexDirection='column' className='!bg-[rgba(0,0,0,0.5)] !bg-blend-multiply !bg-cover !bg-center p-3 shadow-lg rounded-md items-center space-y-3'>
            <Stack flexDirection='row' alignItems='center' width='100%' className='space-x-4'>
            <Avatar src={song.background}></Avatar>
            <Typography flexGrow={1} fontWeight={700} variant="h6" component="div">
            {song.title}<Typography fontSize='0.75rem'>
            {song.artist}
          </Typography>
          </Typography>
          <IconButton onClick={()=>dispatch(stop())}>
            <Close/>
          </IconButton>
          </Stack>
          <SongPlayer/>
            </Stack>
        </Snackbar>
        </Draggable>
     );
}

export default PlayBar;