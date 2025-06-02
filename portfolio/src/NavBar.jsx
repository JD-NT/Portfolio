import './App.css'

function NavBar() { return (
    <>
    <header class="bg-darkblue-200">
    <p class="logo">John Dale</p>
    <nav>
        <ul class="nav_links">
            <li> <a href="#home">Home</a></li>
            <li> <a href="#projects">Projects</a></li>
            <li> <a href="/About">About</a></li>
            <li> <a href="/Art">Art</a></li>
            <li> <a href="#footer">Contact</a></li>
        </ul>
    </nav>
    <a class="cta">Resume</a>
    </header>
    </>
    )}

export default NavBar