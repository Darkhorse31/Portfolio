import React from "react";
import "./Footer.css";
import Photo from '../image/Prateek.png';
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailTwoToneIcon from '@mui/icons-material/EmailTwoTone';
import { IconButton } from "@mui/material";
import Exiting from "./Exiting";
function Footer() {
  return (
    <div className="Footer">
    <Exiting />
      <div className="cote">
        <div className="Brand">P</div>
        <div className="Detail">
          Living, learning, & leveling up
          <br />
          one day at a time.
        </div>
      </div>
      <div className="Icon">
        <IconButton href="#">
          <InstagramIcon  style={{fontSize:"3rem"}}/>
        </IconButton>
        <IconButton>
          <LinkedInIcon style={{fontSize:"3rem"}}/>
        </IconButton>
        <IconButton>
          <EmailTwoToneIcon style={{fontSize:"3rem"}}/>
        </IconButton>
      </div>
      <div className="Intro2">
      <img src={Photo} />
      <h4>
          Made By PrateeK Kumar🖤
          </h4>
      </div>
    </div>
  );
}
export default Footer;
