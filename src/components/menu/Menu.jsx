import "./menu.scss"

function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu " + (menuOpen && "active")}>
        <ul>
            <li>Chambres</li>
            <li>Contact</li>
            <li>Se connecter</li>
        </ul>
    </div>
  )
}

export default Menu