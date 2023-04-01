import React, { useState } from "react";
import { Link } from "react-router-dom";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MenuIcon from '@mui/icons-material/Menu';
import { Grid, Typography } from "@mui/material";
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { display } from "@mui/system";
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
export function Menu(props) {



  const [selectedMenu, setSelectedMenu] = useState({});
  const children = React.Children.toArray(props.children);
  return (
    <nav className="menu">
      <div className="menu-mobile">
        <MenuIcon/>
      </div>
      <Grid container sx={{}}>
      <ul className="menu-list">
        {children.map((item, index) => {
          return (
            <Grid lg={6} md={6} sm={6} xs={6} align={item.props.name=="Products"?"right":"left"} sx={{berderRight:"2px solid red !important" }}className="menudiv">
            <MenuItem
              name={item.props.name}
              key={index}
              onClick={() => console.log("heys there")}
            >
              <Typography>{item}</Typography>
            </MenuItem>
            </Grid>
          );
        })}
      </ul>
      </Grid>
    </nav>
  );
}

function MenuItem(props) {
  const { name } = props;
  return (
    <li className="menu-item">
      <h3 className="linkh3"  style={{fontWeight:"500 !important"}}>
        {name}{" "}
        {/* <KeyboardArrowDownIcon color="#14a3f9" size="xs" /> */}
      </h3>
      {props.children}
    </li>
  );
}

MenuItem.defaultProps = {
  children: () => {}
};

export function MenuDropdown(props) {
  const classNames = ["menu-dropdown"];
  
  if (props.megaMenu) {
    classNames.push("menu-menu");
  }

  return <div
//    className={classNames.join(" ")}

className={props.megaMenu?"menu-dropdown1 mega-menu":"menu-dropdown"}
  >{props.render()}</div>;
}

MenuDropdown.defaultProps = {
    
  render: (  ) => {}
};

export function ProductMenu() {
    const [curthover,sercurhover] = useState("")

  return (
    <section className="menu-products">
      <div className="product-info1" style={{padding:"0em 2em  !important"}}>
        <h3>Industries</h3>
        {ITindusties.map((value,ins)=>(
            
        <ul style={{borderRight:"2px solid lightgray",padding:"0 1%" ,display:'flex'}} onMouseOver={(e)=>{sercurhover("menu_1"+ins)}}>
          <li>
            <Link to={value.path}>
                <Typography className="servicemenu_data" sx={{paddingTop:"5px !important"}}>{value.name}</Typography>
                </Link>
          </li>
          <div style={{width:"50px",height:"35px"}}>
          <ArrowLeftIcon className={"arrowicon "} sx={{color:"#A682C1",paddingBottom:"10px !important",
          fontSize:"3rem !important",display:((curthover?curthover==("menu_1"+ins):"")?"":"none !important")}}/>
          </div>
       </ul>
        ))}
      </div>
      <div className="product-info" >
      <h3> Services</h3>
      {ITServices.map((value,ins)=>(
      <ul style={{display:"flex"}} onMouseOver={()=>{sercurhover("menu_0"+ins)}}>
           <div style={{width:"40px",height:"30px"}}>
 <ArrowRightIcon className={"arrowicon "} sx={{color:"#A682C1",paddingBottom:"15px !important",
          fontSize:"3rem !important",display:((curthover?curthover==("menu_0"+ins):"")?"":"none")}}/>
</div>
          <li  style={{width:"100%"}}>
            {/* <Grid container>
                <Grid lg={11} > */}
            {/* <Link to={value.path}> */}
                <Typography className="servicemenu_data" sx={{paddingTop:"5px !important"}}>{value.name}</Typography>

               {/* </Link> */}
               {/* </Grid>
               <Grid lg={1} > */}
                {/* </Grid>

               </Grid> */}


          </li>
         
      
   

    
        </ul>
      ))}

      </div>
    </section>
  );
}

export function OurSolutionMenu() {
    const [curthover,sercurhover] = useState("")
  return (
    <div className="menu-solutions">
        {ProductData.map((value,ins)=>(

      <section>

        <ul style={{display:"flex"}}className="productmenulist"onMouseOver={()=>{sercurhover("menu_0"+ins)}} >
          <li>
            <Link to={value.path}>
                <Typography className="productmenu_data">{value.name}</Typography>
                </Link>
          </li>
          <div style={{width:"50px",height:"40px"}}>
          <ArrowLeftIcon className={"arrowicon "} sx={{color:"#A682C1",paddingBottom:"0px !important",
          fontSize:"3rem !important",display:((curthover==("menu_0"+ins))?"":"none")}}/>
          </div>
        </ul>
      </section>
      ))}
    </div>
  );
}

export function CompanyMenu() {
  return (
    <div className="menu-company">
      <section>
        <ul>
          <li>Item one</li>
          <li>Item two</li>
          <li>Item three</li>
        </ul>
      </section>
    </div>
  );
}

export function Banner() {
  return (
    <article className="menu-ads">
      <section>
        <img alt="sample" src="https://picsum.photos/200/100?random=1" />
        <p>
          Mauris dui nulla, tristique in porta et, convallis blandit libero. Nam
          tempus, diam et sodales posuere, justo lorem maximus quam.
        </p>
      </section>
      <section>
        <img alt="sample" src="https://picsum.photos/200/100?random=2" />
        <p>
          Mauris dui nulla, tristique in porta et, convallis blandit libero. Nam
          tempus, diam et sodales posuere, justo lorem maximus quam.
        </p>
      </section>
      <section>
        <img alt="sample" src="https://picsum.photos/200/100?random=3" />
        <p>
          Mauris dui nulla, tristique in porta et, convallis blandit libero. Nam
          tempus, diam et sodales posuere, justo lorem maximus quam.
        </p>
      </section>
      <section>
        <img alt="sample" src="https://picsum.photos/200/100?random=4" />
        <p>
          Mauris dui nulla, tristique in porta et, convallis blandit libero. Nam
          tempus, diam et sodales posuere, justo lorem maximus quam.
        </p>
      </section>
    </article>
  );
}
