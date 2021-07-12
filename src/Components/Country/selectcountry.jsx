import React from "react";
import Navbar from "../Navbar/Navbar";
import Country from "./country";
import Footer from "../Enhancement/footer";
function SelectCountry(){
    return(
        <div>
            <Navbar/>
            <Country/>
            <Footer/>
        </div>
    );
}

export default SelectCountry;