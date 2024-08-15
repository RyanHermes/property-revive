import Image from 'next/image'
import Hero from '@/components/Hero'
import Form from '@/components/Form'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import TopFooter from '@/components/TopFooter'
import { galada } from './fonts'
import GutterImageComparison from '@/components/GutterImageComparison'
import WindowImageComparison from '@/components/WindowImageComparison'
import { BackgroundGradient } from '@/components/ui/background-gradient'

export default function Home() {
  return (
    <main>
      <Header />
      <section id="about">
        <div className="relative">
          <div className="hero-image z-0 max-w-full overflow-hidden">
            <Hero />
          </div>
          <div className="intro flex items-center gap-10">
            <div
              className="hidden w-auto min-[1096px]:block"
              style={{
                position: 'absolute',
                zIndex: 10,
                left: '15%',
                top: '65%',
              }}
            >
              <Image
                src="/pr_badge.png"
                alt="logo"
                width={1000}
                height={1000}
              />
            </div>
            <div className="ml-auto max-w-full min-[1096px]:max-w-3/5 min-[1096px]:text-center xl:pr-72">
              <strong>
                <p
                  id="paragraph1"
                  style={{
                    color: '#000000',
                    fontSize: '1.75rem',
                    textAlign: 'left',
                    margin: '40px',
                  }}
                >
                  Our work is exterior cleaning, but our mission is creating
                  extraordinary experiences.
                </p>
                <p
                  id="paragraph2"
                  style={{
                    color: 'navy',
                    fontSize: '1.75rem',
                    textAlign: 'left',
                    margin: '40px',
                  }}
                >
                  When you spot the blue shirts, you know your home will be held
                  to the highest standard.
                </p>
              </strong>
            </div>
          </div>
        </div>
      </section>
      <section id="services">
        <div className="services p-10">
          <h1 className={`${galada.className} m-10 text-center md:text-9xl`}>
            Services
          </h1>
          {/* <div className="servicesList grid grid-cols-1 justify-items-center gap-10">
            <div className="service mx-auto flex max-w-2xl flex-col items-center rounded-lg shadow-2xl">
              <Image
                className="m-10"
                src="/window_cleaning_blue.png"
                alt="logo"
                width={100}
                height={100}
              />
              <h3 className="text-center text-2xl font-bold">Window Washing</h3>
              <p className="mb-10 text-center">
                Our expert window washing service ensures that your windows are
                sparkling clean, inside and out.
              </p>
            </div>
            <div className="service mx-auto flex max-w-2xl flex-col items-center rounded-lg shadow-2xl">
              <Image
                className="m-10"
                src="/gutter_cleaning_blue.png"
                alt="logo"
                width={100}
                height={100}
              />
              <h3 className="text-center text-2xl font-bold">
                Gutter Cleaning
              </h3>
              <p className="mb-10 text-center">
                Our thorough gutter cleaning service ensures that your gutters
                are free of debris and functioning properly.
              </p>
            </div>
            <div className="service mx-auto flex max-w-2xl flex-col items-center rounded-lg shadow-2xl">
              <Image
                className="m-10"
                src="/pressure_cleaning_blue.png"
                alt="logo"
                width={100}
                height={100}
              />
              <h3 className="text-center text-2xl font-bold">Power Washing</h3>
              <p className="mb-10 text-center">
                Our power washing service removes dirt, grime, and mildew from
                your property&apos;s exterior surfaces.
              </p>
            </div>
            <div className="service mx-auto flex max-w-2xl flex-col items-center rounded-lg shadow-2xl">
              <Image
                className="m-10"
                src="/soft_cleaning_blue.png"
                alt="logo"
                width={100}
                height={100}
              />
              <h3 className="text-center text-2xl font-bold">Soft Washing</h3>
              <p className="mb-10 text-center">
                Our soft washing service gently cleans your property&apos;s
                exterior surfaces from mold and stains without causing damage.
              </p>
            </div>
            <div className="service mx-auto flex max-w-2xl flex-col items-center rounded-lg shadow-2xl">
              <Image
                className="m-10"
                src="/pest_cleaning_blue.png"
                alt="logo"
                width={100}
                height={100}
              />
              <h3 className="text-center text-2xl font-bold">Pest Control</h3>
              <p className="mb-10 text-center">
                Our pest control service eliminates pests from your property and
                prevents them from returning.
              </p>
            </div>
          </div> */}
          <div className="flex flex-wrap justify-evenly gap-4">
            <BackgroundGradient
              containerClassName="max-w-sm"
              className="max-w-sm rounded-[22px] bg-white p-4 sm:p-10 dark:bg-zinc-900"
            >
              <Image
                className="m-10 mx-auto"
                src="/window_cleaning_blue.png"
                alt="logo"
                width={100}
                height={100}
              />
              <p className="mb-2 mt-4 text-base text-black sm:text-xl dark:text-neutral-200">
                Window Washing
              </p>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Our expert window washing service ensures that your windows are
                sparkling clean, inside and out.
              </p>
            </BackgroundGradient>
            <BackgroundGradient
              containerClassName="max-w-sm"
              className="max-w-sm rounded-[22px] bg-white p-4 sm:p-10 dark:bg-zinc-900"
            >
              <Image
                className="m-10 mx-auto"
                src="/gutter_cleaning_blue.png"
                alt="logo"
                width={100}
                height={100}
              />
              <p className="mb-2 mt-4 text-base text-black sm:text-xl dark:text-neutral-200">
                Gutter Cleaning
              </p>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Our thorough gutter cleaning service ensures that your gutters
                are free of debris and functioning properly.
              </p>
            </BackgroundGradient>
            <BackgroundGradient
              containerClassName="max-w-sm"
              className="max-w-sm rounded-[22px] bg-white p-4 sm:p-10 dark:bg-zinc-900"
            >
              <Image
                className="m-10 mx-auto"
                src="/pressure_cleaning_blue.png"
                alt="logo"
                width={100}
                height={100}
              />
              <p className="mb-2 mt-4 text-base text-black sm:text-xl dark:text-neutral-200">
                Power Washing
              </p>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Our power washing service removes dirt, grime, and mildew from
                your property's exterior surfaces.
              </p>
            </BackgroundGradient>
            <BackgroundGradient
              containerClassName="max-w-sm"
              className="max-w-sm rounded-[22px] bg-white p-4 sm:p-10 dark:bg-zinc-900"
            >
              <Image
                className="m-10 mx-auto"
                src="/soft_cleaning_blue.png"
                alt="logo"
                width={100}
                height={100}
              />
              <p className="mb-2 mt-4 text-base text-black sm:text-xl dark:text-neutral-200">
                Soft Washing
              </p>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Our soft washing service gently cleans your property's exterior
                surfaces from mold and stains without causing damage.
              </p>
            </BackgroundGradient>
            <BackgroundGradient
              containerClassName="max-w-sm"
              className="max-w-sm rounded-[22px] bg-white p-4 sm:p-10 dark:bg-zinc-900"
            >
              <Image
                className="m-12 mx-auto"
                src="/pest_cleaning_blue.png"
                alt="logo"
                width={100}
                height={100}
              />
              <p className="mb-2 mt-4 text-base text-black sm:text-xl dark:text-neutral-200">
                Pest Control
              </p>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Our pest control service eliminates pests from your property and
                prevents them from returning.
              </p>
            </BackgroundGradient>
          </div>
        </div>
      </section>
      <section className="Results">
        <div className="results h-auto w-full p-10">
          <h1 className={`${galada.className} m-10 text-center md:text-9xl`}>
            Results
          </h1>
          <div className="flex flex-col justify-center gap-20 md:flex-row">
            <WindowImageComparison />
            <GutterImageComparison />
          </div>
        </div>
      </section>
      <section id="contact">
        <div className="contactForm h-auto w-full p-10">
          <h1 className={`${galada.className} m-10 text-center md:text-9xl`}>
            Contact Us
          </h1>
          <div className="contactFormContent">
            <div className="contactFormForm">
              <Form />
            </div>
          </div>
        </div>
      </section>
      <TopFooter />
      <Footer />
    </main>
  )
}
