import React from "react";
import "./enhancementpage.css";
function Footer(){
    return(
       <div
            className="container-fluid "
            style={{  fontSize: "14px", color: "#464747" }}
          >
              <hr style={{width:"90%"}}/>
            <div className="row mx-5 mx-md-2 mx-lg-3 mx-xl-3 mb-3">
              
                
                <p  style={{fontFamily:"'Roboto', sans-serif"}}>2008-2021 © 123PassportPhoto</p>
               
                
        <div className="row mx-1 mx-md-3 mx-lg-3 mx-xl-3 " style={{paddingLeft:"40%",justifyContent:"end"}} >
            
        
        <a className="px-2" href="#" style={{ fontSize: "14px",fontFamily:"'Roboto', sans-serif" }}>
          About
        </a>
        <h6>|</h6>
        <a className="px-2" href="#" style={{ fontSize: "14px", fontFamily:"'Roboto', sans-serif" }}>
          Contact Us
        </a>
        <h6>|</h6>
        <a className="px-2" href="#" style={{ fontSize: "14px", fontFamily:"'Roboto', sans-serif" }}>
          Other Languages
        </a>
        <h6>|</h6>
        <a className="px-2" href="#" style={{ fontSize: "14px", fontFamily:"'Roboto', sans-serif" }}>
          Blog
        </a>
        <h6>|</h6>
        <a className="px-2" href="#" style={{ fontSize: "14px", fontFamily:"'Roboto', sans-serif" }}>
          Terms
        </a>
        <h6>|</h6>
        <a className="px-2" href="#" style={{ fontSize: "14px", fontFamily:"'Roboto', sans-serif" }}>
          Privacy
        </a>
        
        
      </div>
              </div>
              </div>
    );
              
}

export default Footer;