'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

export default function Header() {
    const pathname = usePathname()

    return (
        <header className="header fixed top-0 left-0 w-full z-50">
            <Link href="/">
                <Image src="/pr_name.svg" alt="logo" width={300} height={50}  priority />
            </Link>
            <div className="headerLinks">
                <nav>
                    <a className={pathname === "#contact" ? "active" : ""} href="#contact">Contact Us</a>
                    <a className={pathname === "#services" ? "active" : ""} href="#services">Services</a>
                    <a className={pathname === "#about" ? "active" : ""} href="#about">About</a>
                </nav>
            </div>
        </header>
    )
}