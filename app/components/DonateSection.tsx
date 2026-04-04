'use client'

import { useState } from 'react'

export default function DonateSection() {
    const [selectedAmount, setSelectedAmount] = useState('₦10,000')

    const handleAmountClick = (amount: string) => {
        setSelectedAmount(amount)
    }

    return (
        <section className="donate-section">
            <div className="donate-pre">Every naira counts</div>
            <h2 className="donate-title">Be a Hero for a Child Today</h2>
            <p className="donate-sub">Your donation goes directly to providing palliatives for indigent children who need it most. No child should go without.</p>
            <div className="donate-amounts">
                <button
                    className={`amount-btn ${selectedAmount === '₦5,000' ? 'active' : ''}`}
                    onClick={() => handleAmountClick('₦5,000')}
                >
                    ₦5,000
                </button>
                <button
                    className={`amount-btn ${selectedAmount === '₦10,000' ? 'active' : ''}`}
                    onClick={() => handleAmountClick('₦10,000')}
                >
                    ₦10,000
                </button>
                <button
                    className={`amount-btn ${selectedAmount === '₦25,000' ? 'active' : ''}`}
                    onClick={() => handleAmountClick('₦25,000')}
                >
                    ₦25,000
                </button>
                <button
                    className={`amount-btn ${selectedAmount === 'Custom' ? 'active' : ''}`}
                    onClick={() => handleAmountClick('Custom')}
                >
                    Custom
                </button>
            </div>
            <button className="donate-cta">
                {selectedAmount === 'Custom' ? 'Choose Your Amount' : `Donate ${selectedAmount} Now`}
            </button>
        </section>
    )
}
