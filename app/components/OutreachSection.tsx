export default function OutreachSection() {
    return (
        <section className="outreach">
            <div className="outreach-header">
                <div className="section-tag">What We Do</div>
                <h2 className="section-title">Our Palliative Programs</h2>
                <p style={{ fontSize: '16px', color: '#888', maxWidth: '520px', margin: '10px auto 0', fontWeight: 600, lineHeight: 1.7 }}>Every outreach is a celebration of hope — reaching children from all backgrounds with tangible gifts of love.</p>
            </div>

            <div className="outreach-cards">
                <div className="outreach-card">
                    <div className="outreach-card-img bg1">🎁</div>
                    <div className="outreach-card-body">
                        <div className="outreach-card-title">Palliative Distribution</div>
                        <div className="outreach-card-desc">We identify indigent children and families, then distribute food baskets, household items and essentials regardless of ethnicity or religion.</div>
                        <span className="outreach-card-tag">Core Program</span>
                    </div>
                </div>
                <div className="outreach-card">
                    <div className="outreach-card-img bg2">🎊</div>
                    <div className="outreach-card-body">
                        <div className="outreach-card-title">Celebration Outreaches</div>
                        <div className="outreach-card-desc">Special programs on festive days — bringing smiles, fun, food, and gifts to children who otherwise wouldn&apos;t celebrate.</div>
                        <span className="outreach-card-tag" style={{ background: '#fffbea', color: '#e6931a' }}>Seasonal</span>
                    </div>
                </div>
                <div className="outreach-card">
                    <div className="outreach-card-img bg3">💌</div>
                    <div className="outreach-card-body">
                        <div className="outreach-card-title">Cross-Family Reach</div>
                        <div className="outreach-card-desc">Our reach cuts across family, tribal, and religious lines — every child is our child, every need is our call to action.</div>
                        <span className="outreach-card-tag" style={{ background: '#f0fff6', color: '#15803d' }}>Community</span>
                    </div>
                </div>
            </div>

            <div style={{ maxWidth: '1000px', margin: '0 auto 12px', textAlign: 'center' }}>
                <p style={{ fontSize: '13px', fontWeight: 700, color: '#bbb', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '12px' }}>Moments from our outreaches</p>
            </div>
            <div className="gallery-strip">
                <div className="gallery-item gi1">🧒</div>
                <div className="gallery-item gi2">🎁</div>
                <div className="gallery-item gi3">🥰</div>
                <div className="gallery-item gi4">🙌</div>
                <div className="gallery-item gi5">🎊</div>
            </div>
        </section>
    )
}
