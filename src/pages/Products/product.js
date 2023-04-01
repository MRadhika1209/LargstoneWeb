import React from "react";
import { Grid, Typography,Card,MenuItem,FormControl,InputLabel,Select } from "@mui/material";
import Breadcrumb from "../../app/component/Breadcrumb/Breadcrumb";
import { useLocation, Link } from "react-router-dom";
import Dropdown, { BasicMenu } from "../../app/component/Dropdowns/dropdown";
import Dropdowns from "../../app/component/Dropdowns/dropdown";
const data=[{
    title:"Description",
    content:"You may control passenger and baggage processing from any place because we host applications virtually on our centralised server. This eliminates the need for costly infrastructure, local site administration, or maintaining servers. Users use a basic web browser to access the programmes as needed."
}]

const Carddata=[{
    title:"Check-in & Boarding", 
    content:"Contrary to popularbelief, Lorem Ipsum is not simply random text. It has roots in a  piece of classical Latin   literature from 45 BC, making it over 2000 years old. Richard  McClintock, a Latin   professor at ",
},{
    title:"Check-in & Boarding",
    content:"You may control passenger and baggage processing from any place because we host applications virtually on our centralised server. This eliminates the need for costly infrastructure, local site administration, or maintaining servers."
},
{
    title:"Check-in & Boarding", 
    content:"Contrary to popularbelief, Lorem Ipsum is not simply random text. It has roots in a  piece of classical Latin   literature from 45 BC, making it over 2000 years old. Richard  McClintock, a Latin   professor at ",
},{
    title:"Check-in & Boarding",
    content:"You may control passenger and baggage processing from any place because we host applications virtually on our centralised server. This eliminates the need for costly infrastructure, local site administration, or maintaining servers."
},
{
    title:"Check-in & Boarding", 
    content:"Contrary to popularbelief, Lorem Ipsum is not simply random text. It has roots in a  piece of classical Latin   literature from 45 BC, making it over 2000 years old. Richard  McClintock, a Latin   professor at ",
},{
    title:"Check-in & Boarding",
    content:"You may control passenger and baggage processing from any place because we host applications virtually on our centralised server. This eliminates the need for costly infrastructure, local site administration, or maintaining servers."
},
{
    title:"Check-in & Boarding", 
    content:"Contrary to popularbelief, Lorem Ipsum is not simply random text. It has roots in a  piece of classical Latin   literature from 45 BC, making it over 2000 years old. Richard  McClintock, a Latin   professor at ",
},{
    title:"Check-in & Boarding",
    content:"You may control passenger and baggage processing from any place because we host applications virtually on our centralised server. This eliminates the need for costly infrastructure, local site administration, or maintaining servers."
},
{
    title:"Check-in & Boarding", 
    content:"Contrary to popularbelief, Lorem Ipsum is not simply random text. It has roots in a  piece of classical Latin   literature from 45 BC, making it over 2000 years old. Richard  McClintock, a Latin   professor at ",
},
]


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
    name:"Airports",
    group_id: 1

},{
    name:"Ground Opretions",
    group_id: 2
},{
    name:"Boarding solution",
    group_id: 3
}]

const Product=()=>{
    const [optionvalue, setOption] = React.useState([...options]);
    const [optionlable, setLable] = React.useState([...Lables]);


    
    const params = useLocation();
    return(
    <div style={{marginBottom:"2%"}}>
                      <BasicMenu />
                      {/* <Dropdowns Options={optionvalue} Lables={optionlable}></Dropdowns> */}
                      <Breadcrumb breadcrumdata={[{ name: "Infratail" },{active:"Facility Management System"} ]} />
                      
                      <Grid container sx={{padding:"1%",}}>
                           
                      
      
                            <Grid lg={12} md={12} sm={12}>
                                {data.map((item)=>(
                                    <Card className="description" sx={{padding:"2% 5%",margin:"1% ",}}>
                                    <Typography variant="h4"  sx={{padding:"1% 1% 0% 2% "}}>{item.title}</Typography>
                                    <Typography variant="h6" sx={{padding:"1% 4% 1% 2% "}}>{item.content}</Typography>
                                    </Card>
                                    ))}
                                    
                            </Grid>
                            {Carddata.map((item)=>(
                            <Grid lg={4} md={6} sm={12}  sx={{py:2}}>
                           
                                    <Card className="cardcontent" sx={{padding:"2% 5%",margin:"1% 3%",display:"flex",height:"100%"}}>
                                   {/* <div style={{}}> */}
                                    <Typography variant="h5" sx={{margin:"auto !important",padding:"10px 4%",borderRight:"2px solid #cad4e4"}}>{item.title}</Typography>
                                    {/* </div> */}
                                    <Typography sx={{padding:"4% 5%"}}>{item.content}</Typography>
                                    </Card>
                            </Grid>

                                    ))}
                            </Grid>

                        
</div>
)
       }
export default Product;