import React from "react";
import "./Navbar.css";
export default function NavBar() {
  return (
    <nav className="navbar">
            <div  className="brand">
                P
            </div>
            <div className="info">
               <ul>
                   <li><a href="#" className="Ser">Services</a></li>
                   <li><a href=""><button>Say hi</button></a></li>

               </ul>
                
            </div>
        </nav>
  );
}
