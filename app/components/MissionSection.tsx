export default function MissionSection() {
    return (
        <section className="mission">
            <div className="mission-left">
                <div className="section-tag">Who We Are</div>
                <h2 className="section-title">Caring for Children<br />Across Every Family Line</h2>
                <p className="mission-text">
                    Founded in honor of Kika Oshodin, our foundation was born from a deep belief that every child — regardless of their family&apos;s circumstances — deserves access to basic palliatives, nutrition, and the warmth of community care.
                </p>
                <p className="mission-text">
                    We go into underserved communities to identify indigent children and provide them with food items, clothing, hygiene kits, and educational supplies, all distributed with love and dignity.
                </p>
            </div>
            <div className="mission-right">
                <div className="mission-card pink">
                    <div className="mission-card-icon">🍚</div>
                    <div className="mission-card-title">Food Palliatives</div>
                    <div className="mission-card-desc">Rice, beans, oils and essential food items given to children in need</div>
                </div>
                <div className="mission-card yellow">
                    <div className="mission-card-icon">👗</div>
                    <div className="mission-card-title">Clothing</div>
                    <div className="mission-card-desc">Clean, quality clothing for children across diverse family backgrounds</div>
                </div>
                <div className="mission-card green">
                    <div className="mission-card-icon">📚</div>
                    <div className="mission-card-title">Education</div>
                    <div className="mission-card-desc">School supplies, stationery, and learning materials for young minds</div>
                </div>
                <div className="mission-card blue">
                    <div className="mission-card-icon">🧴</div>
                    <div className="mission-card-title">Hygiene Kits</div>
                    <div className="mission-card-desc">Soap, toothbrush, and essential hygiene products for every child</div>
                </div>
            </div>
        </section>
    )
}
