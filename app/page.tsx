import Image from "next/image";
import Hero from "@/components/Hero";
import GutterImageComparison from "@/components/GutterImageComparison";
import WindowImageComparison from "@/components/WindowImageComparison";

export default function Home() {
    return (
        <main>
            <section id="about">
                <div className="relative">
                    <div className="hero-image z-0">
                        <Hero />
                    </div>
                    <div className="intro flex items-center gap-10">
                        <div className="hidden md:block" style={{ position: 'absolute', zIndex: 10, left: '15%', top: '70%' }}>
                            <Image src="/pr_badge.png" alt="logo" width={800} height={800} />
                        </div>
                        <div className="introRight ml-auto md:text-center max-w-full md:max-w-3/5 md:pr-72">
                            <strong>
                                <p id="paragraph1" style={{ color: "#000000", fontSize: "20px", textAlign: 'left', margin: '40px' }}>
                                    Our work is exterior cleaning, but our mission is creating extraordinary experiences.
                                </p>

                                <p id="paragraph2"
                                    style={{
                                        color: "navy", fontSize: "20px", textAlign: 'left', margin: '40px'
                                    }}>
                                    When you spot the blue shirts, you know your home will be held to the highest standard.
                                </p>
                            </strong>
                        </div>
                    </div>
                </div>
            </section>
            <section id="services">
                <div className="services w-full h-auto p-10">
                    <h1 className="text-center">Services</h1>
                    <div className="servicesList grid grid-cols-1 gap-10 justify-items-center">
                        <div className="service shadow-2xl rounded-lg flex flex-col items-center max-w-2xl mx-auto">
                            <h3 className="text-center text-2xl font-bold">Window Washing</h3>
                            <p className="text-center mb-10">
                                Our expert window washing service ensures that your windows are
                                sparkling clean, inside and out.
                            </p>
                        </div>
                        <div className="service shadow-2xl rounded-lg flex flex-col items-center max-w-2xl mx-auto">
                            <h3 className="text-center text-2xl font-bold">Gutter Cleaning</h3>
                            <p className="text-center mb-10">
                                Our thorough gutter cleaning service ensures that your gutters are
                                free of debris and functioning properly.
                            </p>
                        </div>
                        <div className="service shadow-2xl rounded-lg flex flex-col items-center max-w-2xl mx-auto">
                            <h3 className="text-center text-2xl font-bold">Power Washing</h3>
                            <p className="text-center mb-10">
                                Our power washing service removes dirt, grime, and mildew from
                                your property&apos;s exterior surfaces.
                            </p>
                        </div>
                        <div className="service shadow-2xl rounded-lg flex flex-col items-center max-w-2xl mx-auto">
                            <h3 className="text-center text-2xl font-bold">Soft Washing</h3>
                            <p className="text-center mb-10">
                                Our soft washing service gently cleans your property&apos;s exterior
                                surfaces from mold and stains without causing damage.
                            </p>
                        </div>
                        <div className="service shadow-2xl rounded-lg flex flex-col items-center max-w-2xl mx-auto">
                            <h3 className="text-center text-2xl font-bold">Pest Control</h3>
                            <p className="text-center mb-10">
                                Our pest control service eliminates pests from your property and
                                prevents them from returning.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="Results">
                <div className="results w-full h-auto p-10">
                    <h1 className="text-center">Results</h1>
                    <div className="flex flex-col md:flex-row justify-center gap-20">
                        <WindowImageComparison />
                        <GutterImageComparison />
                    </div>
                </div>
            </section>
            <section id="contact">
                <div className="contactForm w-full h-auto p-10 pt-0">
                    <h1 className="text-center">Contact Us</h1>
                    <div className="contactFormContent grid grid-cols-2 gap-10">
                        <div className="contactFormImage">
                            <Image src="/roof.jpg" alt="logo" width={800} height={800} />
                        </div>
                        <div className="contactFormForm">
                            <form>
                                <div className="mb-5">
                                    <label htmlFor="name" className="block mb-2">Name <span className="text-red-500">*</span></label>
                                    <input type="text" name="name" id="name" className="w-full p-2 border-2 border-gray-300 bg-white" required />
                                </div>
                                <div className="mb-5">
                                    <label htmlFor="phone" className="block mb-2">Number <span className="text-red-500">*</span></label>
                                    <input type="text" name="phone" id="phone" className="w-full p-2 border-2 border-gray-300 bg-white" required />
                                </div>
                                <div className="mb-5">
                                    <label htmlFor="email" className="block mb-2">Email</label>
                                    <input type="email" name="email" id="email" className="w-full p-2 border-2 border-gray-300 bg-white" />
                                </div>
                                <div className="mb-5">
                                    <label htmlFor="email" className="block mb-2">Address</label>
                                    <input type="email" name="email" id="email" className="w-full p-2 border-2 border-gray-300 bg-white" />
                                </div>
                                <div className="mb-5">
                                    <label htmlFor="email" className="block mb-2">Service</label>
                                    <input type="email" name="email" id="email" className="w-full p-2 border-2 border-gray-300 bg-white" />
                                </div>
                                <button type="submit" className="w-full bg-blue-500 text-white p-2">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}