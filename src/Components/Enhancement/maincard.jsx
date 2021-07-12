import React from "react";
import "./enhancementpage.css";
function MainCard(props) {
  return (
    <div className="col-11 col-md-5 col-lg-4 col-xl-3 mx-5 my-3">
        <h6 className="card-title banner-title ml-5 " style={{ color: "black",fontFamily:"'Roboto', sans-serif" }}>
              {props.heading}
            </h6>
      <a href={props.url} style={{ textDecoration: "none" }}>
        <div className="card h-100"  style={{ width: "13rem", border: "none" }}>
          <img src={props.src}  className="card-img-top" alt="..." style={{
              borderRadius: "3px",
              border:"1px solid #DDDDDD",padding:"4px 4px 4px 4px"
              
            }}/>
          
        </div>
      </a>
    </div>
  );
}
export default MainCard;
