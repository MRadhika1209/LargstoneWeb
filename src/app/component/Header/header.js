import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useScrollTrigger } from '@mui/material';
import Logo from '../../../assets/images/logo.png';
import Logo1 from '../../../assets/images/Logo_Navy.png';

export default function Header(props) {
    const { threshold,window, ...other } = {
        threshold: 100,
        ...props
      };
     
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 100,
        target: props.window ? window() : undefined
      });
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{backgroundColor:"transparent !important", backgroundColor: (trigger?"white":"transparent"), color: (trigger?"black":"white"),boxShadow: (trigger?"":"none")}} >
        <Toolbar>
         
      

          
        <Typography variant="h6" component="div" sx={{ flexGrow: 1,     display:(trigger?"none":"block"), }}>
<img src={Logo} style={{}}></img>

</Typography>
<Typography variant="h6" component="div" sx={{ flexGrow: 1,     display:(trigger?"block":"none"), }}>
            <img src={Logo1}  style={{width:"13%"}} />
            {/* LOGO */}
          </Typography>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
