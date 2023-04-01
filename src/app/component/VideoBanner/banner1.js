import React from "react";
import VideoPlayer from "react-background-video-player";
import { MenuItem,IconButton,Typography,Tooltip,Box,Button,Avatar,AppBar,Container,Toolbar, Grid, Card, } from "@mui/material";
import '../../../styles/style.css'
import {
    Menu,
    MenuDropdown,
    ProductMenu,
    OurSolutionMenu,
  
  } from "./Menu";
  import video from'../../../assets/video/Largstone_vdo (1).mp4';
const Banner1=()=>{
    
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    return(
        <div style={{position:"",width:"100%",height:"80vh !important"}}>
  
        <Card sx={{width:"100% !important"}}>
    <VideoPlayer
      className="video"
      src={video} type="video/mp4"
      autoPlay={true}
      muted={true}
      style={{height:"90vh",width:"100% !important",visibility:"visible"}}
    />
    </Card>
        {/* <Menu >
<MenuDropdown name="Products" render={() => <OurSolutionMenu />} />

<MenuDropdown
  name="Services"
  megaMenu
  render={() => <ProductMenu />}
/>

</Menu> */}
        {/* <Grid container   className="mainInput" style={{backgroundColor:"#f2f2f2",padding:"1.4%",marginBottom:"1%", display:"flex",justifyContent:"space-evenly"}}>
            <Grid lg={6} align="right" sx={{px:3}}>
            <div>
            <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        onMouseOver={handleClick}
      >
        Products
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        megaMenu
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
            </Grid>
            <Grid lg={6} align="left"  sx={{px:3,borderLeft:"2px solid gray"}}>
            <div>IT Services</div>
             </Grid>
        </Grid> */}
      </div>
    );
    
}
export default Banner1;  