import "./navbar.css";

const Nav = () => {
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
            <button className="buttonNav">
                Contact me
            </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
