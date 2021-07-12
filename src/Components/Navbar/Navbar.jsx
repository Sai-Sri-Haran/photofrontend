import React from "react";

function Navbar(){
    return(
        <div className="navtop">
            <nav class="navbar navbar-expand-lg navbar-light bg-light ">
            <a className="navbar-brand" href="#">
          <div className="top-logo pl-5">
            <a
              style={{ color: "white", textDecoration: "none" }}
              className="li-logo "
              href="#"
              title
            >
              <img
                className="mainlogo"
                data-src="https://d2rej7jvg610l7.cloudfront.net/images/web-logo.png"
                alt=""
                width="180"
                height="50"
                src="https://d2rej7jvg610l7.cloudfront.net/images/web-logo.png"
              />
            </a>
          </div>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      
      <li class="nav-item">
        <a class="nav-link" href="#">Select Country</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Upload Photo</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Crop Photo</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Enhancement</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Download Photo</a>
      </li>
      
    </ul>
  </div>
</nav>
        </div>
    );
}

export default Navbar;