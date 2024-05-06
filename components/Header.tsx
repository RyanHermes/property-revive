'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Link as ScrollLink, Events, scrollSpy } from 'react-scroll'
import { useEffect } from 'react';

export default function Header() {
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
        <header className="header fixed top-0 left-0 w-full z-50">
            <Link href="/">
                <Image src="/pr_name.svg" alt="logo" width={300} height={50} priority />
            </Link>
            <div className="headerLinks">
                <nav>
                    <ScrollLink activeClass="active" to="contact" spy={true} smooth={true} offset={-70} duration={500}>
                        Contact Us
                    </ScrollLink>
                    <ScrollLink activeClass="active" to="services" spy={true} smooth={true} offset={-70} duration={500}>
                        Services
                    </ScrollLink>
                    <ScrollLink activeClass="active" to="about" spy={true} smooth={true} offset={-70} duration={500}>
                        About
                    </ScrollLink>
                </nav>
            </div>
        </header>
    )
}