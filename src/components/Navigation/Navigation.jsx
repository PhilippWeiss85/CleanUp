import "./Navigation.css"

function Navigation() {
    return (
        <nav className="navmenu">
            <ul>
            <li className="navitem"><a href="#">Ongoing</a></li>
            <li className="navitem"><a href="#">Up Next</a></li>
            <li className="navitem"><a href="#">Done</a></li>
            </ul>
        </nav>
     );
}

export default Navigation;