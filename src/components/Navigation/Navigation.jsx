import "./Navigation.css"

import { Link } from "react-router-dom";

function Navigation() {


    return (
        <>
        <nav className="navmenu">
            <ul>
            <li className="navitem"><Link to="/">HOME</Link></li>  
            <div className="navitem--container"><Link to="/newtask"><p className="navitem--text">+</p></Link></div>
            <div className="navitem--separator"></div>
            <li className="navitem"><Link to="/statistics">STATS</Link></li>
            </ul>
        </nav>
        </>
     );
}

export default Navigation;