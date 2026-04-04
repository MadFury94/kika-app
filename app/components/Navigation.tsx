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
                <li><Link href="/about">About Us</Link></li>
                <li><Link href="/our-work">Our Work</Link></li>
                <li><Link href="/gallery">Gallery</Link></li>
                <li><Link href="/contact">Contact</Link></li>
            </ul>
            <button className="nav-donate">Donate Now</button>
        </nav>
    )
}
