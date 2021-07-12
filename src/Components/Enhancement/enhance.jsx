import React from "react";
import MainCard from "./maincard";
import "./enhancementpage.css";
import axios from "axios";
function Enhance(){
  
    return(
        <div className="container-fluid mx-1 mt-4">

      <p className="clicktap ml-5" style={{fontSize:"25px",fontFamily:"'Roboto', sans-serif"}}>Click or tap to select the best photo</p>
      <p className="genpic ml-5 " style={{fontSize:"15px",fontFamily:"'Roboto', sans-serif"}}>We will generate the photo based on your selection.</p>
      <div className="row ml-5 ">
        <MainCard
          heading="Original"
          url="#"
          
          src="https://www.123passportphoto.com/upload/2021_07_06_386905423747163412_thumbnail_1.jpg" 
        />
        <MainCard
          url="#"
          src="https://www.123passportphoto.com/upload/2021_07_06_386905423747163412_thumbnail_1.jpg"
          heading="Enhancement 1"
          
        />
        <MainCard
          url="#"
          src="https://www.123passportphoto.com/upload/2021_07_06_386905423747163412_thumbnail_1.jpg"
          heading="Enhancement 2"
          
        />
        <MainCard
          url=""
          src="https://www.123passportphoto.com/upload/2021_07_06_386905423747163412_thumbnail_1.jpg"
          heading="Enhancement 3"
          
        />
        <MainCard
          url="#"
          src="https://www.123passportphoto.com/upload/2021_07_06_386905423747163412_thumbnail_1.jpg"
          heading="Enhancement 4"
          
        />
        <MainCard
          url="#"
          src="https://www.123passportphoto.com/upload/2021_07_06_386905423747163412_thumbnail_1.jpg"
          heading="Enhancement 5"
          
        />
      </div>
      <button href="#" type="button" class="btn btn-light ml-5" style={{border:"1px solid #DDDDDD"}}>Back</button>
    </div>
    );
}

export default Enhance;