import React from "react";
import "./Userview.css";
import NavBar from "./NavBar";
import Img from "../image/Avtar.png"
import Img2 from "../image/img2.png"
export default function Userview() {
  return (
    
    <div className="UserviewMainDiv">
      <NavBar />
      <div className="introdiv">
        <h1>Designer, Front-end Developer & Story Writter.</h1>
        <p>I design and code beautifully simple things, and I love what I do.</p>
      </div>
      <div className="image">
        <img src={Img}  className="imageA"/>
      </div>
      <div className="Image2">
      <img src={Img2} className="image33"/>
      </div>
    </div>
   
  );
}
