import "./Header.css"


function Header() {
    return (
        <section className="header">
            <h1>CleanUp</h1>
            <img className="logo" alt="animated logo" src="src/assets/lottie_logo.gif"></img>
            <p >Your personal cleaning scheduler</p>
        </section>
     );
}

export default Header;