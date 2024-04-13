'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

export default function Header() {
    const pathname = usePathname()

    return (
        <div className="header">
            <Link href="/">
                <Image src="/pr_name.svg" alt="logo" width={300} height={50} priority />
            </Link>
            <div className="headerLinks">
                <nav>
                    <Link className={pathname === "/contact" ? "active" : ""} href="/contact">Contact Us</Link>
                    <Link className={pathname === "/services" ? "active" : ""} href="/services">Services</Link>
                    <Link className={pathname === "/about" ? "active" : ""} href="/about">About</Link>
                    <Link className={pathname === "/" ? "active" : ""} href="/">Home</Link>
                </nav>
            </div>
        </div>
    )
}