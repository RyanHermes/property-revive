import Image from 'next/image'
import HeroAnimation from "@/components/HeroAnimation";


export default function Home() {
    return (
        <main>
            <div className={"hero-image"}>
                <HeroAnimation />
            </div>
            <div className="intro">
                <Image src="/pr_logo.svg" alt="logo" width={500} height={300} />
                <div className="introRight">
                    <strong>
                        <p style={{color: '#275ce1', textShadow: '4px 2px white', fontSize: '30px'}}>Welcome to Property Revive, where we redefine exterior maintenance with comprehensive services
                        that go beyond the ordinary. Specializing in expert window washing and thorough gutter cleaning,
                        we also offer a range of additional exterior solutions to elevate the beauty and functionality
                        of your property.</p>

                        <p style={{color: 'navy', textShadow: '4px 2px white', fontSize: '25px'}}> With a commitment to excellence and attention to detail, Property Revive ensures that every aspect of
                        your property receives the care it deserves. Trust us to revive your property&apos;s exterior,
                        leaving it sparkling, refreshed, and rejuvenated.</p>
                    </strong>
                </div>
            </div>
        </main>
    )
}