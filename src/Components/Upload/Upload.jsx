import React from "react";
import { Alert } from "react-bootstrap";
import "./Upload.css";
import Button from "@material-ui/core/Button";
import Image1 from "../../Images/take-passport-photo.jpg";
import Footer from "../Footer/Footer";
import { useHistory } from "react-router";
// import { storage } from "../../Firebase/Firebase";
import Navbar from "../Navbar/Navbar";
import axios from "axios"

function Upload({ image, setImage,file,setFile }) {
  let history = useHistory();
  let img="";
  const uploadFile = (event) => {
    if (event.target.files[0]) {
       const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.addEventListener("load", () => {
        setImage(reader.result); 
        /*  img=reader.result; */
         localStorage.setItem("imageurl", reader.result);
        history.push("/cropimage");
      }); 
      // setImage(event.target.files[0]);
    }
  };
  /* const uploadFirebase = () => {
    const uploadTask =storage.ref(`images/${img.name}`).put(img);
    uploadTask.on(
      "statechanged",
      snapshot=>{},
      error=>{
        console.log(error);
      },
      ()=>{
        storage
        .ref("imageskjbscnzm")
        .child(image.name)
        .getDownloadURL()
        .then(url=>{
          console.log(url);
        })
      }
    )
  }; */
  const inputRef = React.useRef();
  const triggerFileSelectPopup = () => inputRef.current.click();
  return (
    <div>
     {/*  <div className="Navebar">
        <Navbar />
      </div> */}
      <div className="container">
        <div className="uploadtext">
          Upload photo for India Passport 5.1 x 5.1 cm
        </div>
        <div className="alerts">
          <Alert variant="info">
            <b>Tip:</b> The file size should be smaller that 10MB and the photo
            size should be smaller than 4000 x 3000. The system processes only
            .jpg or .jpeg files.
          </Alert>
        </div>
        <div className="pleasetxt">
          <b>Please select your photo:</b>
        </div>
        <br />
        <input
          type="file"
          accept="images/*"
          ref={inputRef}
          style={{ display: "none" }}
          onChange={uploadFile}
        />
        <div className="button_browse">
          <Button
            variant="contained"
            onClick={triggerFileSelectPopup}
            style={{
              width: "100%",
              backgroundColor: "#337ab7",
              color: "white",
              textTransform: "capitalize",
            }}
          > 
            Browse...
          </Button>
        </div>
       {/*  <div className="upload">
          <Button
            variant="outlined"
            color="primary"
            onClick={uploadFirebase}
            style={{
              textTransform: "capitalize",
            }}
          >
            upload...
          </Button>
        </div> */}
        <div className="alertscontain">
          <Alert variant="info">
            How to take passport photo:
            <ul>
              <li>Take photo in front of a white background.</li>
              <li>
                Neutral facial expression: a. do not open mouth; b. open eyes.
              </li>
              <li>No glasses; No Hat.</li>
              <li>Don't cover eyebrows with hair.</li>
            </ul>
            <div className="image_contain">
              <img
                src={Image1}
                alt="take-passport"
                className="imagecontain"
              ></img>
            </div>
          </Alert>
        </div>
        <h6>
          If you want to make passport/visa photos for other countries, click
          the button below.
        </h6>
        <div className="contir">
          <Button
            variant="contained"
            style={{
              width: "100%",
              backgroundColor: "#5cb85c",
              color: "white",
              textTransform: "capitalize",
            }}
          >
            Make Passport/Visa Photo for Other Countries
          </Button>
        </div>
        <Footer />
      </div>
    </div>
  );
}
export default Upload;
