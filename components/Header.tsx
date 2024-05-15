'use client'

import { useEffect, useState } from 'react';
import Link from 'next/link'
import Image from 'next/image'
import { Link as ScrollLink, Events, scrollSpy } from 'react-scroll'

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        Events.scrollEvent.register('begin', function () {
            console.log("begin", arguments);
        });

        Events.scrollEvent.register('end', function () {
            console.log("end", arguments);
        });

        scrollSpy.update();

        return () => {
            Events.scrollEvent.remove('begin');
            Events.scrollEvent.remove('end');
        };
    }, []);

    return (
        <>
            {isOpen && (
                <div
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        zIndex: 5,
                    }}
                />
            )}
            <header className="header fixed top-0 left-0 w-full z-50 flex justify-between">
                <Link href="/">
                    <div className="block h-16 w-64 md:h-20 md:w-80">
                        <Image src="/pr_name.svg" alt="logo" width={320} height={64} />
                    </div>
                </Link>
                {/* <button onClick={() => setIsOpen(!isOpen)} className="md:hidden mr-4">
                    <Image src="/hamburger_black.png" alt="Menu" width={30} height={30} />
                </button> */}
<button onClick={() => setIsOpen(!isOpen)} className={`hamburger hamburger--collapse ${isOpen ? 'is-active' : ''} md:hidden`} type="button">
    <span className="hamburger-box">
        <span className="hamburger-inner"></span>
    </span>
</button>
                <nav className={`fixed top-16 right-0 h-full w-64 bg-white transform transition-transform duration-200 ease-in-out flex flex-col ${isOpen ? 'translate-x-0' : 'translate-x-full'} md:translate-x-0 md:static md:w-auto`}>
                    {/* <button onClick={() => setIsOpen(false)} className="md:hidden mt-4 mr-4 absolute right-0">
                        <Image src="/close_black.png" alt="Close" width={30} height={30} />
                    </button> */}
                    <div className="headerLinks flex flex-col md:flex-row items-center mt-10 md:mt-0 mb-auto">
                        <ScrollLink onClick={() => setIsOpen(false)} activeClass="active" to="about" spy={true} smooth={true} offset={-100} duration={500}>
                            About
                        </ScrollLink>
                        <ScrollLink onClick={() => setIsOpen(false)} activeClass="active" to="services" spy={true} smooth={true} offset={-100} duration={500}>
                            Services
                        </ScrollLink>
                        <ScrollLink onClick={() => setIsOpen(false)} activeClass="active" to="results" spy={true} smooth={true} offset={-100} duration={500}>
                            Results
                        </ScrollLink>
                        <ScrollLink onClick={() => setIsOpen(false)} activeClass="active" to="contact" spy={true} smooth={true} offset={-100} duration={500}>
                            Contact Us
                        </ScrollLink>
                    </div>
                </nav>
            </header>
        </>
    )
}