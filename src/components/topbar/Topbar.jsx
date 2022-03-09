import "./topbar.scss"

function Topbar({menuOpen, setMenuOpen}) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
        <div className="wrapper">
            <div className="left">
                <div className="header-logo">LOGO</div>
            </div>
            <div className="right">
                <ul className="navbar">
                    <li className="navbar_item">Chambres</li>
                    <li className="navbar_item">Contact</li>
                    <li className="navbar_item">Plan</li>
                </ul>
                <div className="burger" onClick={() => setMenuOpen(!menuOpen)}>
                    <span className="line1"></span>
                    <span className="line2"></span>
                    <span className="line3"></span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Topbar