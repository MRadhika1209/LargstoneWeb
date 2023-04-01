import { Breadcrumbs, Hidden, Icon, styled, useTheme, Grid, Button, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import * as React from 'react';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Link, useLocation } from "react-router-dom";

import { useEffect } from 'react';




const BreadcrumbActive = styled('span')(({ theme }) => ({
  textTransform: 'capitalize',
  color: theme.palette.text.secondary,
}));



const data = [{}];

const Breadcrumb = ({ breadcrumdata }) => {
  const params = useLocation()

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const theme = useTheme();
  const hint = theme.palette.text.hint;

 
  useEffect(() => {
  }, [])

  return (
    <Grid container sx={{padding:"0.1% 2%",border:"1.5px solid #1f4e79"}}>
      <Grid item container direction="row">
        <Grid item xs={12} sm={12}>
          <div style={{  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',}}>
            {breadcrumdata ? (
              <Hidden xsDown>
           <Typography variant='h4' sx={{  margin: 0,
  fontSize: '16px',
  paddingBottom: '1px',
  verticalAlign: 'middle',
  textTransform: 'capitalize',}}>
                  <Button sx={{my:2,mr:3,px:2,backgroundColor:"#7030a0",textTransform:"capitalize",fontSize:"1.1rem"}} size="small" primary variant='contained' >Products</Button>
                 </Typography>
              </Hidden>
            ) : null}

            <Breadcrumbs
              separator={<NavigateNextIcon/>}
              sx={{ display: 'flex', alignItems: 'center', position: 'relative' ,fontSize:'20px'}}
            >
      
              {breadcrumdata
                ? breadcrumdata.map((item, index) => {
                  return index !== breadcrumdata.length - 1 ? (
                    item.path ? (
                      <NavLink key={index} to={item.path ? item.path : "/dashboard/default"}>
                        <BreadcrumbActive>{item.name}</BreadcrumbActive>
                      </NavLink>) : (<BreadcrumbActive key={index}>{item.name}</BreadcrumbActive>)
                  ) : (
                    <BreadcrumbActive sx={{  fontWeight: 700 }} key={index}>{item.active}</BreadcrumbActive>
                  );
                })
                : null}
            </Breadcrumbs>
          </div>
        </Grid>
        

      </Grid>
    </Grid >
  );
};

export default Breadcrumb;
