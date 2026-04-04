'use client'

import { useRef, useEffect } from 'react'

export default function VideoSection() {
    const videoRef = useRef<HTMLVideoElement>(null)

    useEffect(() => {
        // Autoplay video when component mounts
        if (videoRef.current) {
            videoRef.current.play().catch(error => {
                // Autoplay might be blocked by browser, silently handle it
                console.log('Autoplay prevented:', error)
            })
        }
    }, [])

    return (
        <section className="video-section">
            <div className="section-tag video-tag" style={{ marginBottom: '16px' }}>Our Outreach in Action</div>
            <h2 className="video-title">Watch the <span className="hl">Magic Happen</span></h2>
            <p className="video-sub">See firsthand how your support transforms the lives of children across our communities.</p>

            <div className="video-frame-wrapper">
                <video
                    ref={videoRef}
                    className="video-player"
                    controls
                    autoPlay
                    muted
                    loop
                    playsInline
                >
                    <source src="/palliative.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>

            <div className="video-badges">
                <div className="video-badge"><span className="dot-badge dot-pink"></span>Community Outreach 2024</div>
                <div className="video-badge"><span className="dot-badge dot-yellow"></span>500+ Children Impacted</div>
                <div className="video-badge"><span className="dot-badge dot-green"></span>Multiple Communities</div>
            </div>
        </section>
    )
}
