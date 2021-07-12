import React, { useState, useCallback } from "react";
import DoubleArrowIcon from "@material-ui/icons/DoubleArrow";
import Cropper from "react-easy-crop";
import { Slider } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { Alert } from "react-bootstrap";
import Image2 from "../../Images/crop-photo.jpg";
import Footer from "../Footer/Footer";
import getCroppedImg from "../../utils/cropImage";
import "./Crop.css";
import { useHistory } from "react-router";
import  {toast} from 'react-toastify'


import axios from "axios";

function Crop({ image, croppedImage, setCroppedImage }) {
  let history = useHistory();
  const [crop, setCrop] = React.useState({ x: 0, y: 0 });
  const [zoom, setZoom] = React.useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);
  image = image || localStorage.getItem("imageurl");
  const onNextClick = useCallback(async () => {
    try {
      const croppedImage = await getCroppedImg(image, croppedAreaPixels);
      setCroppedImage(croppedImage);
      const obj={
        image_url:croppedImage
      }
      console.log(obj);
      //save in database
      await axios.post (`http://localhost:8080/api/uploadimage/`,obj)
      .then((response) => {
        toast.info(response.data);
        localStorage.setItem("croppedImage", croppedImage);
        history.push("/download");
      });   
    
    } catch (e) {
      console.log(e);
    }
  }, [croppedAreaPixels]);
  return (
    <div>
      <div className="container container_crop">
        {/*  <div className="Navebar"></div> */}
        <div className="cropimg">
          {image ? (
            <>
              <div className="cropper">
                <Cropper
                  image={image}
                  crop={crop}
                  zoom={zoom}
                  aspect={1}
                  onCropChange={setCrop}
                  onZoomChange={setZoom}
                  onCropComplete={onCropComplete}
                />
              </div>
              <div className="slider">
                <Slider
                  min={1}
                  max={3}
                  step={0.1}
                  value={zoom}
                  onChange={(e, zoom) => {
                    setZoom(zoom);
                  }}
                />
              </div>
            </>
          ) : null}
        </div>
        <div className="buton_next">
          <Button
            variant="contained"
            color="primary"
            style={{ textTransform: "capitalize" }}
            className="btn_nxt"
            onClick={onNextClick}
          >
            Next
            <DoubleArrowIcon
              style={{ width: "15px", paddingLeft: "3px", margin: "0px" }}
            />
          </Button>
          <Button
            variant="contained"
            style={{ textTransform: "capitalize" }}
            className="btn_back"
            onClick={() => history.push("/upload")}
          >
            <DoubleArrowIcon
              style={{ width: "15px", paddingLeft: "3px", margin: "0px" }}
              className="btn_backicon"
            />
            back
          </Button>
        </div>
        <div className="infocrop">
          <Alert variant="info" className="infoalrt">
            <p>How to crop photo:</p>
            <div className="info_list">
              <ol>
                <li>
                  Move and resize the crop box so that the chin and the top of
                  the head fits into the blue bars.
                </li>
                <li>
                  If you are using computer, you can use the up, down, left and
                  right arrow keys to move the photo so that the person in the
                  photo is centered horizontally.
                </li>
              </ol>
            </div>
            <div className="image_contain">
              <img
                src={Image2}
                alt="take-passport"
                className="imagecontain"
              ></img>
            </div>
          </Alert>
        </div>
        <Footer />
      </div>
    </div>
  );
}
export default Crop;
