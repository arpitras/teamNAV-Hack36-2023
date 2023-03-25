import React from 'react'

import './footer.css'
import FooterArrow from '../../images/footer-arrow.svg'

const Footer = () => {
    return (
        <div className="footer-section" id="footer">
            <div className="footer-container">
                <div className="footer-text-right">
                    <h4>Design by <span className="wade-text">Team NAV</span></h4>

                </div>
                <div className="footer-text-center">
                    <h4>&copy; 2023 TEAM NAV</h4>
                </div>
                <div className="arrow-up">
                    <a href="#project"><img src={FooterArrow} className="footer-arrow" alt="69"/> </a>

                </div>
                
            </div>
            
        </div>
    )
}

export default Footer
