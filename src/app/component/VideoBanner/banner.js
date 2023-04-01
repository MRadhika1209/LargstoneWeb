import React from "react";
import VideoPlayer from "react-background-video-player";
import {Grid,Button,MenuItem, Card} from "@mui/material";
import '../../../styles/style.css';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import {
    Menu,
    MenuDropdown,
    ProductMenu,
    OurSolutionMenu,
  
  } from "./Menu";
  import Video from '../../../assets/video/Largstone_vdo (1).mp4'
  const ProductData=[{
    name:"Infratail",
    path:"/product"
},{
    name:"Autostone",
    path:"/product"
},{
    name:"Flip it",
    path:"/product"
},{
    name:"Stel",
    path:"/product"
}
]
const ITindusties=[{
    name:"Manufacturing",
    path:"/product"
},{
    name:"Government",
    path:"/product"
},{
    name:"Capital Infrastructure",
    path:"/product"
},{
    name:"Utilities",
    path:"/product"
},
{
    name:"Public Infrastructure",
    path:"/product"
},{
    name:"Politics",
    path:"/product"
},{
    name:"Transportation & Logistic",
    path:"/product"
},{
    name:"Fintech & Insurance",
    path:"/product"
},{
    name:"Hospitality",
    path:"/product"
},{
    name:"Healthcare & Life science",
    path:"/product"
},{
    name:"Print & Visual Media",
    path:"/product"
},{
    name:"Retail & e-Commerce",
    path:"/product"
},{
    name:"Realty",
    path:"/product"
},
]
const ITServices=[{
    name:"Product engineering",path:"/product"
},{
    name:"Legacy application Modernization",path:"/product"
},
{
    name:"Web application development",path:"/product"
},
{
    name:"Mobile application development",path:"/product"
},
{
    name:"Data Analytics ",path:"/product"
},
{
    name:"Artificial Intelligence ",path:"/product"
},
]
const Banner=()=>{
    
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
      sercurhover("")
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    const [curthover,sercurhover] = React.useState("")
    const [anchorEl1, setAnchorEl1] = React.useState(null);
    const open1 = Boolean(anchorEl1);
    const handleClick1 = (event) => {
      setAnchorEl1(event.currentTarget);
    };
    const handleClose1 = () => {
      setAnchorEl1(null);
    };
    return(
        <div style={{position:"",width:"100%",height:"80vh !important"}}>
  
            <Card sx={{width:"100% !important"}}>
        <VideoPlayer
          className="video"
          src={Video} type="video/mp4"
          autoPlay={true}
          muted={true}
          style={{height:"90vh",width:"100% !important"}}
        />
        </Card>
        <Menu  >
<MenuDropdown name="Products" render={() => <OurSolutionMenu />} />

<MenuDropdown
  name="IT Services"
  megaMenu
  render={() => <ProductMenu />}
  anchorOrigin={{
    vertical: 'top',
    horizontal: 'left',
  }}
/>

</Menu>
        {/* <Grid container   className="mainInput" style={{backgroundColor:"#f2f2f2", display:"flex",justifyContent:"space-evenly"}}>
            <Grid lg={6} align="right" >
            <div align="right">
            <Button
        id="basic-button"
className="bannermenu"
align="right"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        onMouseOver={handleClick}
        sx={{width:"100%",textAlign:"right !important",padding:"15px",borderRadius:"0px !important",backgroundColor:anchorEl?"#1f4e79":"#f2f2f2",color:anchorEl?"#ffff":"#59595b",}}
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
        {ProductData.map((item,ins)=>(
<div style={{display:"flex"}}>

        <MenuItem 
       sx={{width:"100px",}}
        className="menu_itemdata"
        onClick={handleClose} onMouseOver={(e)=>{sercurhover("menu_1"+ins)}}>{item.name}</MenuItem>
      <ArrowLeftIcon className={"arrowicon "} sx={{color:"#A682C1",paddingBottom:"10px !important",
          fontSize:"3rem !important",display:((curthover?curthover==("menu_1"+ins):"")?"":"none !important"),}}/>
        </div>
    ))}


      
      </Menu>
    </div>
            </Grid>
            <Grid lg={6} align="left"  sx={{borderLeft:"2px solid gray"}}>
            <div>   
                 <Button
className="bannermenu"
id="basic-button"
        aria-controls={open1 ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open1 ? 'true' : undefined}
        onClick={handleClick1}
        onMouseOver={handleClick1}
        sx={{width:"100%",textAlign:"left",padding:"15px",borderRadius:"0px !important",backgroundColor:anchorEl1?"#1f4e79":"#f2f2f2",color:anchorEl1?"#ffff":"#59595b"}}
      >
        IT Services
      </Button>
      
      <Menu
        id="basic-menu"
        anchorEl={anchorEl1}
        open={open1}
        onClose={handleClose1}
        megaMenu
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
      <Grid container>
        <Grid lg={6}>
        {ITindusties.map((item)=>(

<MenuItem 
sx={{width:"500px"}}

onClick={handleClose}>{item.name}</MenuItem>
))}

        </Grid>
        <Grid lg={6}>
        {ITServices.map((item)=>(

<MenuItem 
sx={{width:"500px"}}

onClick={handleClose}>{item.name}</MenuItem>
))}

        </Grid>
      </Grid>
      </Menu></div>
             </Grid>
        </Grid> */}
      </div>
    );
    
}
export default Banner;  