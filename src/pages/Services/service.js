import React from "react";
import Breadcrumb from "../../app/component/Breadcrumb/Breadcrumb";
import Dropdowns from "../../app/component/Dropdowns/dropdown";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { Grid, Select, Typography,InputLabel,Card } from "@mui/material";
import { Checkbox } from "@mui/material";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Frontoffice from '../../assets/images/frontoffice.jpg'


const options=[
    {
      name: "option1",
      option_id: 1,
      group_id: 1
    },
    {
      name: "option2",
      option_id: 2,
      group_id: 1
    },
    {
      name: "option3",
      option_id: 3,
      group_id: 1
    },
    {
      name: "option4",
      option_id: 4,
      group_id: 2
    },
    {
      name: "option5",
      option_id: 5,
      group_id: 2
    },
    {
      name: "option6",
      option_id: 6,
      group_id: 2
    },
    {
      name: "option7",
      option_id: 7,
      group_id: 3
    },
    {
      name: "option8",
      option_id: 8,
      group_id: 3
    },
    {
      name: "option9",
      option_id: 9,
      group_id: 3
    }
  ];
  const Lables=[{
      name:"Hospitality",
      group_id: 1
  
  },{
      name:"Front office ",
      group_id: 2
  },{
      name:"Front office & Booking",
      group_id: 3
  }]

  const Carddata=[{
    image:Frontoffice,
    span:"Stel",
    title:"Front office & Booking", 
    content:"A front-office module allows a front-desk manager to view and update  room reservation status, check guests in and out, and process payments.  When a guest arrives at the hotel, they want to check in as fast as possible.   Support from a receptionist is very important in this case, so front-desk staff should be able to efficiently help the guest.",
},{
    image:Frontoffice,
    span:"Stel",
    title:"Channel Management",
    content:"Channel management software is a single interface to control and   distribute inventories across different channels such  as GDSs, OTAs, wholesalers, direct booking platforms, etc. A channel   manager connects directly to a central reservation",
},
{    image:Frontoffice,
  span:"Stel",
    title:"Revenue Management", 
    content:"A PMS in and of itself is a big step towards improving hotel revenue    management indicators, such as Occupancy, RevPAR (Revenue per Available  Room), and ADR (Average Daily Rate), which mean a lot in evaluating a  hotel’s financial success.",
},{    image:Frontoffice,
  span:"Stel",
    title:"Housekeeping Management",
    content:"Channel management software is a single interface to control and  distribute inventories across different channels such as GDSs, OTAs, wholesalers, direct booking platforms, etc. A channel  manager connects directly to a central reservation",
},
{    image:Frontoffice,
  span:"Stel",
    title:"CRM & CDM", 
    content:"A PMS in and of itself is a big step towards improving hotel revenue    management indicators, such as Occupancy, RevPAR (Revenue per Available   Room), and ADR (Average Daily Rate), which mean a lot in evaluating a  hotel’s financial success.",
},{    image:Frontoffice,
  span:"Stel",
    title:"Analytics",
    content:"Channel management software is a single interface to control and  distribute inventories across different channels such   as GDSs, OTAs, wholesalers, direct booking platforms, etc. A channel   manager connects directly to a central reservation  ",
},
{    image:Frontoffice,
  span:"Stel",
    title:"Point-of-Sale ", 
    content:"A PMS in and of itself is a big step towards improving hotel revenue  management indicators, such as Occupancy, RevPAR (Revenue per Available  Room), and ADR (Average Daily Rate), which mean a lot in evaluating a   hotel’s financial success.",
},
]

const Service=()=>{
    const [optionvalue, setOption] = React.useState([...options]);
    const [optionlable, setLable] = React.useState([...Lables]);
    return(
        <div>
                         {/* <Dropdowns Options={optionvalue} Lables={optionlable}></Dropdowns> */}
                         <BasicMenu/>
                      <Breadcrumb breadcrumdata={[{ name: "Hospitality" },{active:"Front Office & Booking"} ]} />

                        <Grid container sx={{padding:"2% 7%"}}>
                        {Carddata.map((item)=>(
                            <>
                            <Grid lg={3} md={6} sm={12}  sx={{py:2}}>
                           
                                    <Card className="cardcontent1" sx={{height:"100%"}}>
                                  <img src={item.image} style={{width:"100%",height:"100%"}}></img>
                                    </Card>
                                    </Grid>
                                    <Grid lg={9} sx={{py:2}}>
                                    <Card className="cardcontent1" sx={{padding:"2% 5% 0 0",margin:"1% 3%",height:"100%"}}>
                                    <Typography className="content1_title2" variant="h5" sx={{padding:"1% 5%",color:"#7f7f7f",}}>   
                                    <Typography className="content1_title" variant="span" sx={{padding:"1% 2%",color:"#7f7f7f",fontStyle:"italic"}}>{item.span}</Typography>
                                    
                                    {item.title}</Typography>
                                    <Typography sx={{padding:"2% 7%",fontSize:"1.3rem",}}>{item.content}</Typography>

                                    </Card>
                            </Grid>
                            </>

                                    ))}

                        </Grid>
       
        </div>
    )
}
export default Service;

export  function BasicMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    return (
      <div style={{border:"1.5px solid #1f4e79"}}>
           <Grid container style={{display:"flex"}}>
              <Grid md={4} sm={12} xs={12} sx={{px:3,my:1}}>
        <Button
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
          sx={{width:'100%',display:"flex",justifyContent:"space-evenly",color:"#988bad"}}
        >
          <span >Hospitality</span> 
          <div>
        <ExpandMoreIcon />
        </div>
           
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
        </Grid>
        <Grid md={4} sm={12} xs={12} sx={{px:2,my:1}}>
        <Button
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
          sx={{width:'100%',display:"flex",justifyContent:"space-evenly",color:"#988bad"}}
        >
          <span >Front office </span> 
          <div>
        <ExpandMoreIcon />
        </div>
           
        </Button>
        </Grid> <Grid md={4} sm={12} xs={12} sx={{px:2,my:1}}>
        <Button
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
          sx={{width:'100%',display:"flex",justifyContent:"space-evenly",color:"#988bad"}}
        >
          <span >Front office & Booking</span> 
          <div>
        <ExpandMoreIcon />
        </div>
           
        </Button>
        </Grid>
      
        </Grid>
      </div>
    );
  }