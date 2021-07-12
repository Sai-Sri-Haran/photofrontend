import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <div className="foter">
      <hr></hr>
      <span className="cpyrit">2008-2021 © 123PassportPhoto</span>
      <div className="pull-right">
        <a href="#">About</a> |&nbsp;
         <a href="#">Contact Us</a> |&nbsp;{" "}
        <a href="#">Other languages</a> |&nbsp;
         <a href="#">Blog</a> |{" "}&nbsp;
        <a href="#">Terms</a> |&nbsp;
         <a href="#">Privacy</a>
      </div>
    </div>
  );
}

export default Footer;
