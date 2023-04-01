import React from "react";
import Header from "../Header/header";

import Home from "../../../pages/Home/home";
// import routes from "../../../routes";
// import MainRoute from "../../../routes";
import Product from "../../../pages/Products/product";
import Banner from "../VideoBanner/banner";
import { Stack } from "@mui/system";
import { Grid } from "@mui/material";
import { Route, Routes ,Outlet} from "react-router-dom"
import Service from "../../../pages/Services/service";
import Banner1 from "../VideoBanner/banner1";
const Layout=()=>{
    const pathname = window.location.pathname;
    return(
        <Stack >
            <Routes>
            {/* <Grid container>
                <Grid lg={12}>
            <Banner/>
            </Grid>
            <Grid lg={12}> */}
            <Route path="/" element={<Home />} />
            <Route path="/" element={<Layoutss />}>
                    {/* <div></div> */}
                <Route path="/product" element={<Product />} />
      <Route path="/service" element={<Service />} />

                {/* <Route path="/books" element={<Product />} /> */}
              
            </Route>
           {/* </Grid>
           </Grid> */}
           </Routes>
        </Stack>
    )
}

const Layoutss =()=>{
    return(
        <div>
            <Grid container>
                <Header/>
                <Grid lg={12}>
            <Banner1/>
            </Grid>
            </Grid>
            <Outlet />
        </div>
    )
}


export default Layout;