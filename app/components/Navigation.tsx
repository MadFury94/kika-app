export default function Navigation() {
    return (
        <nav className="nav">
            <div className="nav-logo">
                <div className="logo-badge">KO</div>
                <div className="logo-text">
                    Kika Oshodin
                    <span>Care Foundation</span>
                </div>
            </div>
            <ul className="nav-links">
                <li><a href="#">Home</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Our Work</a></li>
                <li><a href="#">Gallery</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
            <button className="nav-donate">Donate Now</button>
        </nav>
    )
}
