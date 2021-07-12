import React from "react";
import "./country.css";
import { useHistory } from "react-router";
import firstimg from "../Images/firstimg.jpg";
function Country() {
  let history = useHistory();
  return (
    <div className="container">
      <div className="row justify-content-center">
        <img className="firstimg" src={firstimg} alt="" />
      </div>
      <br />

      <div className="jumbotron pt-4" style={{ backgroundColor: "#D9EDF7" }}>
        <h4 className="select">
          Select country/region and photo type, then click Start:
        </h4>

        <form action="#">
          <select
            className="countries select2"
            style={{ color: "#5F5A55" }}
            id="countries"
          >
            <option value="US">United States</option>
            <option value="GB">United Kingdom</option>
            <option value="IE">Ireland</option>
            <option value="AU">Australia</option>
            <option value="SG">Singapore</option>
            <option value="NZ">New Zealand</option>
            <option value="EU">European Union (EU)</option>
            <option value="SCH">Schengen</option>
            <option value="AL">Albania</option>
            <option value="AR">Argentina</option>
            <option value="AT">Austria</option>
            <option value="BD">Bangladesh (বাংলাদেশ)</option>
            <option value="BY">Belarus (Белару́сь)</option>
            <option value="BE">Belgium</option>
            <option value="BR">Brazil (Brasil)</option>
            <option value="BG">Bulgaria (България)</option>
            <option value="KH">Cambodia (Kampuchea)</option>
            <option value="CA">Canada</option>
            <option value="CN">China (中国)</option>
            <option value="CO">Colombia</option>
            <option value="CR">Costa Rica</option>
            <option value="HR">Croatia (Hrvatska)</option>
            <option value="CY">Cyprus (Κυπρος)</option>
            <option value="CZ">Czech Republic (Česko)</option>
            <option value="DK">Denmark (Danmark)</option>
            <option value="EE">Estonia (Eesti)</option>
            <option value="FI">Finland (Suomi)</option>
            <option value="FR">France</option>
            <option value="DE">Germany (Deutschland)</option>
            <option value="GH">Ghana</option>
            <option value="GR">Greece ('Eλλας)</option>
            <option value="HK">Hong Kong</option>
            <option value="HU">Hungary</option>
            <option value="IN" selected="india">
              India
            </option>
            <option value="ID">Indonesia</option>
            <option value="IR">Iran (ایران)</option>
            <option value="IL">Israel (ישראל)</option>
            <option value="IT">Italy (Italia)</option>
            <option value="JM">Jamaica</option>
            <option value="JP">Japan (日本)</option>
            <option value="KE">Kenya</option>
            <option value="LB">Lebanon (لبنان)</option>
            <option value="MY">Malaysia</option>
            <option value="MX">Mexico</option>
            <option value="MA">Morocco (المغرب)</option>
            <option value="MM">Myanmar (Burma)</option>
            <option value="NL">Netherlands (Nederland)</option>
            <option value="NG">Nigeria</option>
            <option value="NO">Norway (Norge)</option>
            <option value="PK">Pakistan (پاکستان)</option>
            <option value="PA">Panama</option>
            <option value="PE">Peru</option>
            <option value="PH">Philippines (Pilipinas)</option>
            <option value="PL">Poland (Polska)</option>
            <option value="PT">Portugal</option>
            <option value="RO">Romania</option>
            <option value="RU">Russia (Россия)</option>
            <option value="SA">Saudi Arabia (المملكة العربية السعودية)</option>
            <option value="ZA">South Africa</option>
            <option value="KR">South Korea (한국)</option>
            <option value="ES">Spain</option>
            <option value="SE">Sweden (Sverige)</option>
            <option value="CH">Switzerland (Schweiz)</option>
            <option value="SY">Syria (سوريا)</option>
            <option value="TW">Taiwan (台灣)</option>
            <option value="TZ">Tanzania</option>
            <option value="TH">Thailand (ราชอาณาจักรไทย)</option>
            <option value="TT">Trinidad and Tobago</option>
            <option value="TR">Turkey</option>
            <option value="UA">Ukraine (Україна)</option>
            <option value="UZ">Uzbekistan (O'zbekiston)</option>
            <option value="VE">Venezuela</option>
            <option value="VN">Vietnam (Việt Nam)</option>
            <option value="ZW">Zimbabwe</option>
          </select>

          <div
            className="check1 form-check select2"
            style={{ display: "inline-block", color: "#46738F" }}
          >
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
              checked
            />
            <label className="form-check-label" for="flexRadioDefault1">
              Passport 5.1 x 5.1 cm (51 x 51 mm)
              <a className="ml-4" href="#" style={{ fontSize: "15px" }}>
                (Requirements)
              </a>
            </label>
          </div>

          <div class="check2 form-check select2" style={{ color: "#46738F" }}>
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault2"
            />
            <label class="form-check-label" for="flexRadioDefault2">
              Passport 3.5 x 3.5 cm (35 x 35 mm)
            </label>
          </div>

          <div class="check2 form-check select2" style={{ color: "#46738F" }}>
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault2"
            />
            <label class="form-check-label" for="flexRadioDefault2">
              Passport 3.5 x 4.5 cm (35 x 45 mm)
            </label>
          </div>
          <div class="check2 form-check select2" style={{ color: "#46738F" }}>
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault2"
            />
            <label class="form-check-label" for="flexRadioDefault2">
              Visa (190x190 px via VFSglobal.com) (2 x 2 inch)
              <a className="ml-4" href="#" style={{ fontSize: "15px" }}>
                (Requirements)
              </a>
            </label>
          </div>
          <div class="check2 form-check select2" style={{ color: "#46738F" }}>
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault2"
            />
            <label class="form-check-label" for="flexRadioDefault2">
              Visa (2 x 2 inch)
              <a className="ml-4" href="#" style={{ fontSize: "15px" }}>
                (Requirements)
              </a>
            </label>
          </div>
          <div class="check2 form-check select2" style={{ color: "#46738F" }}>
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault2"
            />
            <label class="form-check-label" for="flexRadioDefault2">
              Overseas Citizenship (OCI) 51 x 51 mm (2 x 2 inch)
              <a className="ml-4" href="#" style={{ fontSize: "15px" }}>
                (Requirements)
              </a>
            </label>
          </div>
          <div class="check2 form-check select2" style={{ color: "#46738F" }}>
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault2"
            />
            <label class="form-check-label" for="flexRadioDefault2">
              Overseas Citizenship (OCI) (35 x 35 mm)
            </label>
          </div>
          <div class="check2 form-check select2" style={{ color: "#46738F" }}>
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault2"
            />
            <label class="form-check-label" for="flexRadioDefault2">
              PAN Card (25 x 35 mm)
            </label>
          </div>
          <div className="startbtn">
            <button
              type="button"
              className="btn btn-primary"
              style={{ width: "300px" }}
              onClick={() => {
                history.push("/upload");
              }}
            >
              <a href="#" style={{ color: "white" }}>
                Start
              </a>
            </button>
          </div>
        </form>
      </div>

      <div className="quicklinks">
        <h3 className="quick">Quick Links</h3>
        <button
          type="button"
          className="btn greenbtn"
          style={{ backgroundColor: "#5CB85C" }}
        >
          <a href="#" style={{ color: "white" }}>
            Make US Passport/Visa Photo
          </a>
        </button>

        <button
          type="button"
          class="btn bluebtn "
          style={{ backgroundColor: "#5BC0DE" }}
        >
          <a href="#" style={{ color: "white" }}>
            Make UK Passport/Visa Photo
          </a>
        </button>

        <button
          type="button"
          class="btn bluebtn"
          style={{ backgroundColor: "#F0AD4E" }}
        >
          <a href="#" style={{ color: "white" }}>
            Make Australian Passport/Visa Photo
          </a>
        </button>
      </div>
      <br />
      <div className="row">
        <div
          className=" col-sm-12 col-md-5 col-lg-8 col-xl-6 "
          style={{ display: "inline" }}
        >
          <h2 className="pass123">Why 123PassportPhoto?</h2>

          <p className="steps">
            <strong>Save money:</strong> You don't need to pay so much for your
            passport photo. With 123PassportPhoto service, you can make your own
            passport photos and print it yourself.
          </p>
          <p className="steps">
            <strong>Save time:</strong>Just take a photo using digital camera,
            then upload and create passport photo with 3 steps. It takes less
            than 5 minutes to be ready for download.
          </p>
          <p className="steps">
            <strong>White background enhancement:</strong>Our premium feature
            can help you to adjust the photo so that you can get a white
            background passport photo. Most countries prefer white background
            passport photos.
          </p>
          <p className="steps">
            <strong>Ultra high resolution photo:</strong>123PassportPhoto
            generates passport photos suitable for 600 dpi printing.
          </p>
          <p className="steps">
            <strong>We support 50+ countries </strong>such as USA, UK, Ireland,
            Australia, Canada, France, Germany, Japan, South Africa, Brazil,
            China, Singapore, Russia, Hong Kong, Netherlands, Argentina and
            more.
          </p>
        </div>
        <div className=" col-sm-12 col-md-5 col-lg-7 col-xl-6 ">
          <h2 className="pass123">Steps to create passport photos</h2>

          <ol className="steps">
            <li>Select country and ID photo type, and click Start.</li>
            <li>
              Upload photo. In order to correctly make passport photo, the
              picture size should be smaller than 10MB, and the dimensions
              should be smaller than 4000 x 3000 pixels. The system accepts only
              .JPG or .JPEG files. The Crop page opens when the photo is
              uploaded.
            </li>
            <li>Crop photo to the correct passport photo size dimension.</li>
            <li>
              If you need white background enhancement, select an enhancement.
            </li>
            <li>
              Click the Next button, you will get a printable passport picture
              which is suitable to be printed on 4R (4x6") photo paper.
            </li>
            <li>
              Save the 4R sheet and print it using a photo printer or print it
              at any photo center.
            </li>
          </ol>
        </div>
      </div>
      <div className="row">
        <div
          className="genpass col-sm-12 col-md-5 col-lg-8 col-xl-6"
          style={{ display: "inline" }}
        >
          <h2 className="pass123">General Passport Photo Requirements</h2>

          <ul className="steps">
            <li>
              Neutral facial expression: a. do not open mouth; b. open eyes.
            </li>
            <li>No glasses; No Hat.</li>
            <li>Don't cover eyebrows with hair.</li>
          </ul>

          <p className="steps">
            Find more information on{" "}
            <a href="#">requirements and photo taking tips here.</a>
          </p>
        </div>

        <div className="babyphoto col-sm-12 col-md-5 col-lg-7 col-xl-6 ">
          <h2 className="pass123">How to Take Baby Passport Photos</h2>

          <ol className="steps">
            <li>
              Lay white or light color baby quilt or blanket in a bright room or
              other places with good lighting.
            </li>
            <li>Lay the baby on the quilt or blanket.</li>
            <li>
              Ensure baby is looking straight at the camera with eyes open,
              mouth closed and not smiling.
            </li>
          </ol>

          <p className="steps">
            See <a href="#">more tips on taking baby passport photos here.</a>
          </p>
        </div>
      </div>
      <div className="row">
        <div
          className="colorprint col-sm-12 col-md-5 col-lg-8 col-xl-6 "
          style={{ display: "inline" }}
        >
          <h2 className="pass123">
            How to Print Passport Photos Using Color Printer
          </h2>

          <ol className="steps">
            <li>Download the 4R sheet with multiple photos.</li>
            <li>
              Check the requirements and use correct 4R photographic paper
              (matte, semi-matt or glossy paper).
            </li>
            <li>
              Print the 4R sheet with no margins. Make sure the 4R picture fit
              exactly on the 4R photo paper.
            </li>
            <li>
              Cut the 4R sheet along the gray lines and you will get multiple
              photos.
            </li>
          </ol>
        </div>

        <div className="passreq col-sm-12 col-md-5 col-lg-7 col-xl-6">
          <h2 className="pass123">Passport Photo Size Requirements</h2>

          <ul className="steps">
            <li>
              <a href="#">United States Passport Photos Size Requirements</a>
            </li>
            <li>
              <a href="#">United Kingdom Passport Photsos Size Requirements</a>
            </li>
            <li>
              <a href="#">Australia Passport Photos Size Requirements</a>
            </li>
          </ul>

          <p className="steps">
            Find{" "}
            <a href="#">passport photo requirements for more countries here.</a>
          </p>
          <h2 className="pass123">Quick Links to Make Passport Photos</h2>
          <ul className="steps">
            <li>Make US Passport Photos</li>
            <li>Make UK Passport Photos</li>
            <li>Make Australia Passport Photos</li>
          </ul>
          <a href="#" className="steps">
            More tutorials on making passport photos
          </a>
        </div>
      </div>
    </div>
  );
}

export default Country;
