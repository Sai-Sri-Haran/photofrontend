import React from "react";
import Upload from "./Components/Upload/Upload";
import {
  BrowserRouter,
  Switch,
  Route,
  Link,Redirect
} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import Crop from "./Components/Cropimage/Crop";
import Cropdownload from "./Components/Cropdownload/Cropdownload";
import Enhancement from "./Components/Enhancement/enhancement";
import SelectCountry from "./Components/Country/selectcountry";
function App() {
  const [image, setImage] = React.useState(null);
  const [croppedImage, setCroppedImage] = React.useState(null);
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
        <Route exact path="/" component={SelectCountry} />
          <Route path="/Enhancement" component={Enhancement}/>
          <Route exact path="/upload" component={() => <Upload  url={image} setImage={setImage}  />}/>
          <Route exact path="/cropimage" component={() => <Crop image={image} croppedImage={croppedImage} setCroppedImage={setCroppedImage} />} />
          <Route exact path="/download" component={() => <Cropdownload croppedImage={croppedImage} />} />
        </Switch>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
