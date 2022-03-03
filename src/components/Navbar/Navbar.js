import React, { useEffect, useRef, useState } from "react";
import "./navbar.scss";
import logo from "../../assets/images/logo.png";
import Callsvg from "./SVGS/Callsvg";
import Weathersvg from "./SVGS/Weathersvg";
import Menusvg from "./SVGS/Menusvg";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeather } from "../../store/actions";
import { getLocalCoords } from "../../store/actions/utils";
const Navbar = () => {
  const ref = useRef();
  const [isSticky, setIsSticky] = useState(false);
  const dispatcher = useDispatch();
  const { weather } = useSelector((state) => state.makadi);
  useEffect(() => {
    //this function gets location of user after his permission to fetch the weather regarding his coordinates and he refused to access his location it will fetch the coordinates 
    // according to the location in the task  
    getLocalCoords()
      .then(({ latitude, longitude }) => {
        dispatcher(fetchWeather(latitude, longitude));
      })
      .catch((error) => {
        dispatcher(fetchWeather(26.96546281915211, 33.883077697384714));
      });

    window.addEventListener("scroll", (e) => {
      if (window.scrollY > 1.25 * ref.current.clientHeight) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    });
  }, []);

  return (
    <header className={`header ${isSticky && "sticky"}`} ref={ref}>
      <img
        className="logo"
        alt="Makadi heights"
        // it would be better if we have logos or photos in different resolutions to let the browser decide which one to display depending on the screen resolution by using
        // srcSet attribute to follow responsive images rules
        //srcSet={`${logo_1x} 1x,${logo_2x} 2x`}
        src={logo}
      />
      <nav className="user-nav">
        <div className="user-nav__icon-box user-nav__icon-box--weather">
          {weather.weatherIcon ? (
            <img
              className="user-nav__icon icon--weather"
              alt="Makadi heights"
              src={`http://openweathermap.org/img/w/${weather.weatherIcon}.png`}
              onTouchMove={() => console.log("first")}
            />
          ) : (
            <Weathersvg />
          )}
          <span className="user-nav__notification">
            {Math.floor(weather.temp)} &deg;
          </span>
        </div>
        <div className="user-nav__icon-box">
          <Callsvg />
        </div>
        <div className="user-nav__icon-box">
          <button className="btn">
            <span className="btn__text">book now</span>
          </button>
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
