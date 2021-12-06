import Nav from "../components/Nav";
import {  Typography, } from "@mui/material";
export default function Home() {




  const classes= {
    StudentReview:{
      width: "200px",
      marginRight: "50%",

  },



  };



  return (
    <div>
      <Nav />


      
      
 <div className="aps">

          <Typography sx={classes.StudentReview}>
            Top Students
          </Typography> 
          <br></br><br></br>
          <button className="buttonplus" ></button>

         </div> 
    </div>
  );
}

