import Image from 'next/image'

export default function KikaGallery() {
    return (
        <section className="kika-gallery">
            <div className="kika-gallery-header">
                <div className="section-tag">Meet Kika</div>
                <h2 className="section-title">Meet Kika Oshodin</h2>
                <p className="kika-gallery-desc">
                    The heart and soul behind our foundation. Kika&apos;s compassion and dedication to children drives everything we do.
                </p>
            </div>

            <div className="kika-gallery-grid">
                <div className="kika-gallery-item featured">
                    <div className="kika-image-wrapper">
                        <Image
                            src="/kika1.jpeg"
                            alt="Kika Oshodin"
                            fill
                            className="kika-image"
                            style={{ objectFit: 'cover' }}
                            priority
                        />
                    </div>
                    <div className="kika-overlay">
                        <div className="kika-caption">
                            <h3>Kika Oshodin</h3>
                            <p>Founder & Visionary</p>
                        </div>
                    </div>
                </div>

                <div className="kika-gallery-item">
                    <div className="kika-image-wrapper">
                        <Image
                            src="/kika2.jpeg"
                            alt="Kika Oshodin with children"
                            fill
                            className="kika-image"
                            style={{ objectFit: 'cover' }}
                        />
                    </div>
                    <div className="kika-overlay">
                        <div className="kika-caption">
                            <p>Making a Difference</p>
                        </div>
                    </div>
                </div>

                <div className="kika-gallery-item">
                    <div className="kika-image-wrapper">
                        <Image
                            src="/kika3.jpeg"
                            alt="Kika Oshodin with community"
                            fill
                            className="kika-image"
                            style={{ objectFit: 'cover' }}
                        />
                    </div>
                    <div className="kika-overlay">
                        <div className="kika-caption">
                            <p>Touching Lives</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
