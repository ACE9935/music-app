import AppBar, { AppBarTypeMap } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';
import { useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AudiotrackIcon from '@mui/icons-material/Audiotrack';
import { Theme,IconButton,Box } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';

interface Props {
    children?:  any
    handleOpenDrawer?:()=>void
  }

function HideOnScroll(props: Props) {
    const { children} = props;
    const trigger = useScrollTrigger();
  
    return (
      <Slide appear={false} direction="down" in={!trigger}>{children}</Slide>
    );
  }

function NavBar({handleOpenDrawer}:Props) {
    const theme=useTheme()
    
    return ( 
        <>
        <HideOnScroll>
        <AppBar>
          <Toolbar>
            <Logo themex={theme} sx={{display:'flex',alignItems:'center',flexGrow:1}}/>
            <IconButton 
            onClick={handleOpenDrawer}
             sx={{
              display:{xs:'block',sm:'none'}
            }} disableRipple><MenuIcon fontSize='large' color='secondary'/></IconButton>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
      </>
     );
}
interface LogoProps {
    themex:Theme
    sx:React.CSSProperties
}
const Logo=({themex,sx}:LogoProps)=><Box sx={sx}>
<AudiotrackIcon fontSize='large'/>
            <Typography sx={{
                color:themex.palette.secondary.main,
                '&:hover:after':{
                    width:'95%'
                 },
                '&:after':{
                 content:'""',
                 transition: themex.transitions.create(['width'], {
                    duration: themex.transitions.duration.standard,
                  }),
                 display:'block',
                 position:'absolute',
                 bottom:'6%',
                 width:'40%',
                 height:'4px',
                 background:'white'
                }
                }} variant="h6" component="div" className='relative cursor-pointer !text-[2rem] !font-bold'>
              Misc
            </Typography>
</Box>

export default NavBar;