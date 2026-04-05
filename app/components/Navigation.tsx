'use client'
import Link from 'next/link'
import { useState } from 'react'

export default function Navigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <nav className="nav">
            <Link href="/" className="nav-logo">
                <div className="logo-badge">KO</div>
                <div className="logo-text">
                    Kika Oshodin
                    <span>Care Foundation</span>
                </div>
            </Link>
            <button className="nav-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <span></span>
                <span></span>
                <span></span>
            </button>
            <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                <li><Link href="/">Home</Link></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Our Work</a></li>
                <li><a href="#">Gallery</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
            <button className="nav-donate">Donate Now</button>
        </nav>
    )
}
