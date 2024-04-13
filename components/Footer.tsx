import SocialMedia from './SocialMedia'
import Link from 'next/link'

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <Link href="#" className="footer-link">Locations</Link>
                    <Link href="#" className="footer-link">FAQ</Link>
                    <Link href="#" className="footer-link">Blog</Link>
                </div>
                <div className="footer-section">
                    <Link href="#" className="footer-link">Franchising</Link>
                    <Link href="#" className="footer-link">Careers</Link>
                    <Link href="#" className="footer-link">Contact Us</Link>
                </div>
                <div className="footer-section">
                    <SocialMedia />
                </div>
                <div className="footer-section">
                    <button className="estimate-button"><strong>Request estimate</strong></button>
                    <Link href="tel:+10000000000" className="phone-number">(000) 000-0000</Link>
                </div>
            </div>
            <div className="footer-bottom">
                <span>© 2024 All Rights Reserved.</span>
                <div className="footer-links">
                    <Link href="#" className="footer-link">Site Map</Link>
                    <Link href="#" className="footer-link">Accessibility</Link>
                    <Link href="#" className="footer-link">Privacy Policy</Link>
                    <Link href="#" className="footer-link">Canada Privacy Policy</Link>
                    <Link href="#" className="footer-link">Site Search</Link>
                </div>
                <div className="footer-statement">
                    Our services are available to all members of the public regardless of race, gender or sexual
                    orientation.
                </div>
            </div>
        </footer>
    )
}