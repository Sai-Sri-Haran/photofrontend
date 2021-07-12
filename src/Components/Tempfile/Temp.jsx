import React from "react";
function Temp({ croppedImage }) {
  console.log(croppedImage);
  return (
    <div>
      <img src={croppedImage} alt="cropped image" />
      
    </div>
  );
}

export default Temp;
