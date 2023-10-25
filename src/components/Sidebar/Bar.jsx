import "./Sidebar.css";
import Logo from "../../assets/PFP.png";

const SideBar = () => {

  const copyright = new Date().getFullYear();
  const copyright_end = copyright + 3;

  return (
    <aside className="aside">

      <a href="#home" className="nav__logo">
        <img src={Logo} alt="logo" />
      </a>

      <nav className="nav">
        <div className="nav__menu">
          <ul className="nav__list">

            <li className="nav__item">
              <a href="#home" className="nav__link">
                <i className="icon-home"></i>
              </a>
            </li>

            <li className="nav__item">
              <a href="#about" className="nav__link">
                <i className="icon-user-following"></i>
              </a>
            </li>

            <li className="nav__item">
              <a href="#services" className="nav__link">
                <i className="icon-briefcase"></i>
              </a>
            </li>

            <li className="nav__item">
              <a href="#resume" className="nav__link">
                <i className="icon-graduation"></i>
              </a>
            </li>

            <li className="nav__item">
              <a href="#projects" className="nav__link">
                <i className="icon-layers"></i>
              </a>
            </li>

            <li className="nav__item">
              <a href="#blog" className="nav__link">
                <i className="icon-note"></i>
              </a>
            </li>

            <li className="nav__item">
              <a href="#contact" className="nav__link">
                <i className="icon-bubble"></i>
              </a>
            </li>

          </ul>
        </div>
      </nav>

      <div className="nav__footer">
        <span className="copyright">
         &copy; {copyright} - {copyright_end}
        </span>
      </div>

    </aside>
  )
}

export default SideBar;