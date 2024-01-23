import { useState } from "react";
import "./navbar.css";
import iconMobile from "../../icon/menuMobile.png";

const Nav = () => {
  const [menuVisible, setmenuvisible] = useState(false);

  return (
    <nav className="wrapperNav">
      <div className="containerNav">
        <div className="logoNav">
          <p>Diego</p>
          <p>Dev</p>
        </div>
        <div className="menuNav">
          <ul className="itemsNav">
            <li>About</li>
            <li>Projects</li>
            <li>Skills</li>
          </ul>
          <button className="buttonNav">Contact me</button>
        </div>
        <div
          className="MenuMobile"
          onClick={() => {
            setmenuvisible(!menuVisible);
          }}>
          <img className="iconMobile" src={iconMobile}></img>
        </div>
      </div>
      {menuVisible && (
        <div className="containerMenuMobile">
          <ul className="itemMenuMobile">
            <li>About</li>
            <li>Projects</li>
            <li>Skills</li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Nav;
