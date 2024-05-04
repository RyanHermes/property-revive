import Image from "next/image";
import HeroAnimation from "@/components/HeroAnimation";
import GutterImageComparison from "@/components/GutterImageComparison";

export default function Home() {
    return (
        <main>
            <div className={"hero-image"}>
                <HeroAnimation />
            </div>
            <div className="intro">
                <Image src="/pr_badge.png" alt="logo" width={500} height={500} />
                <div className="introRight m-10">
                    <strong>
                        <p style={{ color: "#275ce1", fontSize: "30px" }}>
                            Welcome to Property Revive, where we redefine exterior maintenance
                            with comprehensive services that go beyond the ordinary.
                            Specializing in expert window washing and thorough gutter
                            cleaning, we also offer a range of additional exterior solutions
                            to elevate the beauty and functionality of your property.
                        </p>

                        <p
                            style={{
                                color: "navy",
                                textShadow: "4px 2px white",
                                fontSize: "25px",
                            }}
                        >
                            {" "}
                            With a commitment to excellence and attention to detail, Property
                            Revive ensures that every aspect of your property receives the
                            care it deserves. Trust us to revive your property&apos;s
                            exterior, leaving it sparkling, refreshed, and rejuvenated.
                        </p>
                    </strong>
                </div>
            </div>

            <div className="services w-full h-auto p-10">
    <h1 className="text-center">Our Services</h1>
    <div className="servicesList grid grid-cols-3 md:grid-cols-1 gap-10">
        <div className="service shadow-2xl">
            <h3 className="text-center text-2xl font-bold">Window Washing</h3>
            <p className="text-center mb-10">
                Our expert window washing service ensures that your windows are
                sparkling clean, inside and out.
            </p>
        </div>
        <div className="service shadow-2xl">
            <h3 className="text-center text-2xl font-bold">Gutter Cleaning</h3>
            <p className="text-center mb-10">
                Our thorough gutter cleaning service ensures that your gutters are
                free of debris and functioning properly.
            </p>
            <GutterImageComparison />
        </div>
        <div className="service shadow-2xl">
            <h3 className="text-center text-2xl font-bold">Pressure Washing</h3>
            <p className="text-center mb-10">
                Our pressure washing service removes dirt, grime, and mildew from
                your property&apos;s exterior surfaces.
            </p>
        </div>
    </div>
</div>
        </main>
    );
}
