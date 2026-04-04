export default function Footer() {
    return (
        <>
            <footer className="footer">
                <div className="footer-brand">
                    <span className="logo-text" style={{ fontFamily: "'Fredoka One',cursive" }}>Kika Oshodin Care Foundation</span>
                    <p className="footer-desc">Spreading love, palliatives and hope to indigent children across communities — because every child deserves to smile.</p>
                    <div className="footer-social">
                        <div className="social-dot">f</div>
                        <div className="social-dot">in</div>
                        <div className="social-dot">ig</div>
                        <div className="social-dot">tw</div>
                    </div>
                </div>
                <div>
                    <div className="footer-heading">Quick Links</div>
                    <ul className="footer-links">
                        <li><a href="#">About the Foundation</a></li>
                        <li><a href="#">Our Programs</a></li>
                        <li><a href="#">Photo Gallery</a></li>
                        <li><a href="#">Volunteer</a></li>
                        <li><a href="#">Donate</a></li>
                    </ul>
                </div>
                <div>
                    <div className="footer-heading">Get in Touch</div>
                    <ul className="footer-links">
                        <li><a href="#">info@kikaoshofoundation.org</a></li>
                        <li><a href="#">+234 000 000 0000</a></li>
                        <li><a href="#">Lagos, Nigeria</a></li>
                        <li style={{ marginTop: '16px' }}><a href="#" style={{ color: '#ffd93d', fontWeight: 700 }}>Partner With Us</a></li>
                    </ul>
                </div>
            </footer>
            <div className="footer-bottom">
                &copy; 2024 Kika Oshodin Care Foundation. Made with <span>♥</span> for the children.
            </div>
        </>
    )
}
