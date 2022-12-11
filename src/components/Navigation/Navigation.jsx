import "./Navigation.css"

function Navigation() {
    return (
        <>
        <nav className="navmenu">
            <ul>
            <li className="navitem"><a href="#">HOME</a></li>  
            <div className="navitem--container"></div>
            <div className="navitem--separator"></div>
            <li className="navitem"><a href="#">STATS</a></li>
            </ul>
       
        </nav>
        </>
     );
}

export default Navigation;