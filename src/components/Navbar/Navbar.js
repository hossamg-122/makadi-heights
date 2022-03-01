import React, { useEffect, useRef, useState } from "react";
import "./navbar.scss";
import logo_1x from "../../assets/images/logo-1x.jpg";
import logo_2x from "../../assets/images/logo-2x.jpg";
import logo from "../../assets/images/logo.png";
import Callsvg from "./SVGS/Callsvg";
import Weathersvg from "./SVGS/Weathersvg";
import Menusvg from "./SVGS/Menusvg";
const Navbar = () => {
  const ref = useRef();
  const [isSticky,setIsSticky] = useState(false)
  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      if (window.scrollY > 1.25 * (ref.current.clientHeight)) {
        setIsSticky(true)
      
        console.log(window.scrollY)
      }else{
        setIsSticky(false)
      }
    });
  });

  return (
    <header className={`header ${isSticky&&'sticky'}`} ref={ref}>
      <img
        className="logo"
        alt="Makadi heights"
        // it would be better if we have logos or photos in different resolutions to let the browser decide which one to display depending on the screen resolution by using
        // srcSet attripute to follow responsive images rules
        //srcSet={`${logo_1x} 1x,${logo_2x} 2x`}
        src={logo}
      />
      <nav className="user-nav">
        <div className="user-nav__icon-box">
          <Weathersvg />
          <span className="user-nav__notification">22</span>
        </div>
        <div className="user-nav__icon-box">
          <Callsvg />
        </div>
        <div className="user-nav__icon-box">
          <button className="btn"><span className="btn__text" >book now</span></button>
        </div>
        <div className="user-nav__menu">
          <span className="user-nav__menu-text">menu</span>
          <Menusvg />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
