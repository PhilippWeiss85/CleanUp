import "./Navigation.css"

import { Link } from "react-router-dom";

function Navigation() {


    return (
        <>
        <nav className="navmenu">
            <li className="navitem"><Link to="/">HOME</Link></li>  
            <li className="navitem"><div className="navitem--container"><Link to="/newtask"><p className="navitem--text">+</p></Link></div></li>
            <li className="navitem"><Link to="/statistics">STATS</Link></li>
        </nav>
        </>
     );
}

export default Navigation;