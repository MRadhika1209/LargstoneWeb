// import { BrowserRouter, Link, Outlet, useRoutes } from 'react-router-dom';
import { Route, Routes } from "react-router-dom"
import App from './App';
import Banner from './app/component/VideoBanner/banner';

import Home from './pages/Home/home';
import Product from './pages/Products/product';
const MainRoute=()=>{


    return (
         <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/books" element={<Product />} />
      
    </Routes>
    )
}
export default MainRoute;


