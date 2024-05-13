import SocialMedia from './SocialMedia'
import Link from 'next/link'

export default function Footer() {
    return (
        <footer className="footer">
            <div className="wave md:bg-transparent bg-custom-blue">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#0099ff" fill-opacity="1" d="M0,96L48,106.7C96,117,192,139,288,138.7C384,139,480,117,576,122.7C672,128,768,160,864,176C960,192,1056,192,1152,186.7C1248,181,1344,171,1392,165.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                </svg>
            </div>
            <div className="footer-content">
                <div className="footer-content-left">
                    {/* Copyright */}
                    <p className='text-sm md:text-xl'><strong>© 2024 Property Revive</strong> All Rights Reserved</p>
                    <p className='text-sm md:text-xl'>Anthony Hatoum & Ryan Hermes</p>
                    <SocialMedia />
                </div>
            </div>
        </footer>
    )
}