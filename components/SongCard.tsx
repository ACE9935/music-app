import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import { useState } from 'react';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { CardActionArea,Stack,Slide,Tooltip,ImageListItemBar } from '@mui/material';
import Image from 'next/image';
import { styled } from '@mui/material/styles';
import { useTheme } from '@emotion/react';
import { PlaylistAdd } from '@mui/icons-material';
import { play } from '../app-state/app-state';
import { useAppDispatch,useAppSelector } from '../app-state/app-hooks';
import { SongState } from '../app-state/app-state';

export type OtherSongState = Omit<SongState, 'playing'>;

export const StyledCard = styled(Card)(({ theme }) => ({
    [theme.breakpoints.down('sm')]: {
      flexDirection:'column'
    },
    display:'flex',height:'20rem',
            maxHeight:'auto',
           '& >div':{
            width:'100%',
            height:'100%',
            flexBasis:'50%',
            position:'relative'
           }
    }))

function SongCard(props:OtherSongState) {
    const [checked,setChecked]=useState(false)
    const appUrl=useAppSelector(state=>state.song.url)
    const isPlaying=props.url==appUrl?true:false
    const theme=useTheme()
    const dispatch=useAppDispatch()
    return ( 
        <CardActionArea
         component='div'>
        <StyledCard onClick={()=>dispatch(play({...props}))} elevation={4} onMouseEnter={()=>setChecked(true)} onMouseLeave={()=>setChecked(false)}
        >
        <CardMedia className='overflow-hidden outline outline-offset-4 outline-3' component='div'>
        <Image src={props.background} layout='fill' objectFit='cover' objectPosition=''/>
        <Slide direction="up" in={checked} mountOnEnter unmountOnExit>
        <ImageListItemBar
            sx={{
                '.MuiImageListItemBar-title':{
                    paddingBottom:'7px'
                }
            }}
            title={props.title}
            subtitle={props.duration}
          />
        </Slide>
        </CardMedia>
        <CardContent className='flex flex-col justify-center space-y-2 items-center'>
            <Box>
          <Typography textAlign='center' gutterBottom variant="h5" component="div">
            {props.title}
          </Typography>
          <Typography textAlign='center' variant="body2" color="text.secondary">
            {props.artist}
          </Typography>
          </Box>
          <Stack direction='row'>
            {isPlaying?<Typography className='text-slate-400 flex items-center'>Now playing...</Typography>:
            <Tooltip title='Play'>
            <IconButton aria-label="play-song" color='secondary' size='large'>
              <PlayArrowIcon fontSize='large'/>
            </IconButton>
            </Tooltip>
            }
          <Tooltip title='Add to playlist'>
          <IconButton aria-label="play-song" color='secondary' size='large'>
            <PlaylistAdd fontSize='large'/>
          </IconButton>
          </Tooltip>
          </Stack>
          <Typography component='p' className='text-slate-400 absolute bottom-0 right-0 p-1 pr-2 text-xs'>Published: 2019/02/12</Typography>
        </CardContent>
    </StyledCard>
    </CardActionArea>
     );
}

export default SongCard;