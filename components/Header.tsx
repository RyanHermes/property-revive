import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
    return (
        <div className="header">
            <Link href="/">
                <Image src="/pr_name.svg" alt="logo" width={300} height={50} priority />
            </Link>
            <div className="headerLinks">
                <nav>
                    <Link href="/contact">Contact</Link>
                    <Link href="/about">About</Link>
                    <Link className="active" href="/">Home</Link>
                </nav>
            </div>
        </div>
    );
}