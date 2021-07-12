import React from "react";
import axios from "axios";
import {  Jumbotron, Card } from "react-bootstrap";
import Button from "@material-ui/core/Button";
import "./Cropdownload.css";
import  {toast} from 'react-toastify'

function Cropdownload({ croppedImage }) {
  croppedImage = croppedImage || localStorage.getItem("croppedImage");
  const obj={
      image_url: croppedImage
  }
  const handleDownload = () => {
    axios
      .post(`https://imagestorebackend.herokuapp.com/api/download/`, obj)
      .then((response) => {
        toast.info("Download Complete");
      });
  };
  return (
    <div>
      <Jumbotron>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={croppedImage} />
          <Card.Body>
            <Card.Title>Crop Image</Card.Title>
            <div className="dwn_btn">
          <Button
            variant="contained"
            color="secondary"
            onClick={handleDownload}
          >
            Download
          </Button>
        </div>
          </Card.Body>
        </Card>
      
      </Jumbotron>
    </div>
  );
}

export default Cropdownload;
