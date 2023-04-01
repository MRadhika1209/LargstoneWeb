import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { Grid, Select, Typography,InputLabel } from "@mui/material";
import { Checkbox } from "@mui/material";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
const groups = [
  {
    name: "group1",
    group_id: 1
  },
  {
    name: "group2",
    group_id: 2
  },
  {
    name: "group3",
    group_id: 3
  }
];



export default function Dropdowns(props) {
    const options = props.Options;
    const lables = props.Lables;

  const [selectedElements, setSelectedElements] = React.useState(groups);

  const onSelectionChange = (event, group) => {
    //const {target: { value },} = event;
    const value = event.target.value;

    selectedElements.map((item) => {
      if (item.group_id === group.group_id) {
        item.value = typeof value === "string" ? value.split(",") : value;
      }
    });
    setSelectedElements([...selectedElements]);
  };

  return (
    <div>
            <Grid container>

        {selectedElements.map(function (group) {
          return (
            <Grid lg={4} md={4} sm={12} xs={12} sx={{px:2,my:1}}>
      <FormControl sx={{width:"100%",}}>
      {lables.map((option) =>{
                if (option.group_id === group.group_id) {
                    return(
      <InputLabel id="demo-simple-select-helper-label" >{option.name}</InputLabel>
                    )}})}
            <Select
                  style={{ width:"100%" }}
            //   style={{ marginBottom: "10px" }}
            //   multiple
              value={group?.value || []}
              onChange={(e) => onSelectionChange(e, group)}
              id={group.group_id}
              renderValue={(selected) => selected.join(", ")}
              size="small"
              
              
            //   sx={{
            //     "& legend": { display: "none" },
            //     "& fieldset": { top: 0 }
            //   }}
            >
              {options.map(function (option) {
                if (option.group_id === group.group_id) {
                  return (
                    <MenuItem key={option.option_id} value={option.name}>
                      <Typography>{option.name}</Typography> 
                      {/* <Checkbox
                        checked={selectedElements.indexOf(option.name) > -1}
                      /> */}
                    </MenuItem>
                  );
                }
              })}
            </Select>
          
            
       
      </FormControl>
            </Grid>
       );
    })}
      </Grid>

    </div>
  );
}


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
        <span >Airports</span> 
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
        <span >Ground operations </span> 
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
        <span >Boarding Solutions</span> 
        <div>
      <ExpandMoreIcon />
      </div>
         
      </Button>
      </Grid>
    
      </Grid>
    </div>
  );
}