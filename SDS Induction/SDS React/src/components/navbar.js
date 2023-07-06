import './Combine.css';

function Navbar() {
    // const menubtn=document.getElementsByClassName("menu-btn")
    // const navbar=document.getElementsByClassName("menu")
    // const menu=document.getElementsByClassName("menubar")
    // menubtn.onclick(function(){
    //     navbar.toggleClass("active");
    //     menu.toggleClass("active");
    // });
  return (
    
    <nav className="navbar">
  <div className="max-width">
    <div className="logo">
      <a href="#home">
        Portfo<span>lio.</span>
      </a>
    </div>
    <div className="content">
      <ul className="menu">
        <li>
          <a href="/" className="menu-btn">
            Home
          </a>
        </li>
        <li>
          <a href="/about" className="menu-btn">
            About
          </a>
        </li>
        <li>
          <a href="/skills" className="menu-btn">
            Skills
          </a>
        </li>
        <li>
          <a href="/contact" className="menu-btn">
            Contact
          </a>
        </li>
      </ul>
      <div className="nav-btn">
        <div className="mode-btn">
          <p className="fas fa-moon" />
        </div>
        <div className="menu-btn">
          <i className="fas fa-bars menubar" />
        </div>
      </div>
    </div>
  </div>
</nav>

  );
}

export default Navbar;
