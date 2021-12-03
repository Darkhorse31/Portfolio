import React from "react";
import "./skill.css";
import DesignServicesOutlinedIcon from "@mui/icons-material/DesignServicesOutlined";
import DeveloperModeIcon from "@mui/icons-material/DeveloperMode";
export default function Skill() {
  return (
    <div className="skill">
      <div className="skill1">
        <div className="first">
          <DesignServicesOutlinedIcon />
          <h1 className="heading">Design</h1>
          <p className="para">
            I value simple content structure, clean design patterns, and
            thoughtful interactions.
          </p>
        </div>
        <div className="first">
          <h2 className="heading2">Things I enjoy designing:</h2>
          <p className="para">UX, UI, Web, Mobile, Apps, Logos</p>
        </div>
        <div className="first">
          <h2 className="heading2">Design Tool:</h2>
          <ul>
            <li> Figma</li>
            <li>Pen & Paper</li>
            <li>Webflow</li>
            <li>Adobe XD</li>
          </ul>
        </div>
      </div>
      <div className="skill2">
        <div className="first">
          <DeveloperModeIcon />
          <h1 className="heading">FrontEnd</h1>
          <p className="para">
            I like to code things from scratch, and enjoy bringing ideas to life
            in the browser.
          </p>
        </div>
        <div className="first">
          <h2 className="heading2">Language I use:</h2>
          <p className="para">
            Html,Css,Javascript,React,Pug,Express.js,Next.js
          </p>
        </div>
        <div className="first">
          <h2 className="heading2">Developer Tools</h2>
          <ul>
            <li>Vs Code</li>
            <li>Atom</li>
            <li>Bootstrap</li>
            <li>GitHub</li>

            <li>Terminal</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

// #b274d6
