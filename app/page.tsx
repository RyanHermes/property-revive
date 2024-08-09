import Image from 'next/image'
import Hero from '@/components/Hero'
import Form from '@/components/Form'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import GutterImageComparison from '@/components/GutterImageComparison'
import WindowImageComparison from '@/components/WindowImageComparison'

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
              className="hidden min-[1096px]:block"
              style={{
                position: 'absolute',
                zIndex: 10,
                left: '15%',
                top: '70%',
              }}
            >
              <Image src="/pr_badge.png" alt="logo" width={800} height={800} />
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
        <div className="services h-auto w-full p-10">
          <h1 className="text-center">Services</h1>
          <div className="servicesList grid grid-cols-1 justify-items-center gap-10">
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
          </div>
        </div>
      </section>
      <section className="Results">
        <div className="results h-auto w-full p-10">
          <h1 className="text-center">Results</h1>
          <div className="flex flex-col justify-center gap-20 md:flex-row">
            <WindowImageComparison />
            <GutterImageComparison />
          </div>
        </div>
      </section>
      <section id="contact">
        <div className="contactForm h-auto w-full p-10 pt-0">
          <h1 className="text-center">Contact Us</h1>
          <div className="contactFormContent">
            <div className="contactFormForm">
              <Form />
            </div>
          </div>
        </div>
      </section>
      <div className="overflow-hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 6000 190"
          preserveAspectRatio="xMidYMin slice"
          width={4000}
        >
          <g data-name="Layer_1">
            <path
              d="m4131.635 167.364-29.491-18.105c-29.491-18.022-88.474-42.598-147.456-42.434-58.983-.082-117.965 24.412-176.947 16.711-58.983-7.618-117.965-35.143-176.948-32.686s-117.964 47.842-176.947 49.48-117.965-31.212-147.456-29.573l-29.49 1.638v83.722h884.735v-28.753Z"
              style={{
                fill: '#09f',
              }}
            />
            <circle
              cx={3678.536}
              cy={74.057}
              r={28.672}
              style={{
                fill: 'rgba(214,237,255,.4)',
              }}
              vectorEffect="non-scaling-stroke"
            />
            <circle
              cx={3508.552}
              cy={60.048}
              r={25.805}
              style={{
                fill: 'rgba(42,138,247,.6)',
              }}
              vectorEffect="non-scaling-stroke"
            />
            <circle
              cx={3409.347}
              cy={143.279}
              r={18.596}
              style={{
                fill: '#bcf3ff',
              }}
              vectorEffect="non-scaling-stroke"
            />
            <circle
              cx={3939.369}
              cy={114.034}
              r={26.132}
              style={{
                fill: '#bcf3ff',
              }}
              vectorEffect="non-scaling-stroke"
            />
            <circle
              cx={4059.546}
              cy={77.579}
              r={19.251}
              style={{
                fill: 'rgba(42,138,247,.6)',
              }}
              vectorEffect="non-scaling-stroke"
            />
            <circle
              cx={3843.932}
              cy={60.786}
              r={18.596}
              style={{
                fill: '#bcf3ff',
              }}
              vectorEffect="non-scaling-stroke"
            />
            <circle
              cx={3366.666}
              cy={67.339}
              r={19.251}
              style={{
                fill: 'rgba(42,138,247,.6)',
              }}
              vectorEffect="non-scaling-stroke"
            />
            <path
              d="m4093.952 167.364 29.491-18.105c29.491-18.022 88.474-42.598 147.456-42.434 58.983-.082 117.965 24.412 176.947 16.711 58.983-7.618 117.965-35.143 176.948-32.686s117.964 47.842 176.947 49.48 117.964-31.212 147.456-29.573l29.49 1.638v83.722h-884.735v-28.753Z"
              style={{
                fill: '#09f',
              }}
            />
            <circle
              cx={4547.051}
              cy={74.057}
              r={28.672}
              style={{
                fill: 'rgba(214,237,255,.4)',
              }}
              vectorEffect="non-scaling-stroke"
            />
            <circle
              cx={4700.16}
              cy={102.729}
              r={25.805}
              style={{
                fill: 'rgba(42,138,247,.6)',
              }}
              vectorEffect="non-scaling-stroke"
            />
            <circle
              cx={4286.218}
              cy={114.034}
              r={26.132}
              style={{
                fill: '#bcf3ff',
              }}
              vectorEffect="non-scaling-stroke"
            />
            <circle
              cx={4166.041}
              cy={77.579}
              r={19.251}
              style={{
                fill: 'rgba(42,138,247,.6)',
              }}
              vectorEffect="non-scaling-stroke"
            />
            <circle
              cx={4381.655}
              cy={60.786}
              r={18.596}
              style={{
                fill: '#bcf3ff',
              }}
              vectorEffect="non-scaling-stroke"
            />
            <path
              d="m5816.73 167.364-29.492-18.105c-29.491-18.022-88.473-42.598-147.456-42.434-58.982-.082-117.965 24.412-176.947 16.711-58.982-7.618-117.965-35.143-176.947-32.686s-117.965 47.842-176.947 49.48-117.965-31.212-147.456-29.573l-29.492 1.638v83.722h884.736v-28.753Z"
              style={{
                fill: '#09f',
              }}
            />
            <circle
              cx={5297.111}
              cy={114.034}
              r={28.672}
              style={{
                fill: 'rgba(214,237,255,.4)',
              }}
              vectorEffect="non-scaling-stroke"
            />
            <circle
              cx={5190.369}
              cy={60.048}
              r={25.805}
              style={{
                fill: 'rgba(42,138,247,.6)',
              }}
              vectorEffect="non-scaling-stroke"
            />
            <circle
              cx={5502.648}
              cy={79.381}
              r={26.132}
              style={{
                fill: '#bcf3ff',
              }}
              vectorEffect="non-scaling-stroke"
            />
            <circle
              cx={5625.446}
              cy={105.514}
              r={19.251}
              style={{
                fill: 'rgba(42,138,247,.6)',
              }}
              vectorEffect="non-scaling-stroke"
            />
            <circle
              cx={5396.725}
              cy={102.729}
              r={18.596}
              style={{
                fill: '#bcf3ff',
              }}
              vectorEffect="non-scaling-stroke"
            />
            <circle
              cx={5001.707}
              cy={71.108}
              r={19.251}
              style={{
                fill: 'rgba(42,138,247,.6)',
              }}
              vectorEffect="non-scaling-stroke"
            />
            <path
              d="m5654.528 167.364 29.491-18.105c29.491-18.022 88.474-42.598 147.456-42.434 58.982-.082 117.965 24.412 176.947 16.711 58.983-7.618 117.965-35.143 176.947-32.686s117.965 47.842 176.948 49.48 117.964-31.212 147.456-29.573l29.49 1.638v83.722h-884.735v-28.753Z"
              style={{
                fill: '#09f',
              }}
            />
            <circle
              cx={6077.645}
              cy={120.096}
              r={28.672}
              style={{
                fill: 'rgba(214,237,255,.4)',
              }}
              vectorEffect="non-scaling-stroke"
            />
            <circle
              cx={6277.611}
              cy={60.048}
              r={25.805}
              style={{
                fill: 'rgba(42,138,247,.6)',
              }}
              vectorEffect="non-scaling-stroke"
            />
            <circle
              cx={6319.718}
              cy={138.773}
              r={18.596}
              style={{
                fill: '#bcf3ff',
              }}
              vectorEffect="non-scaling-stroke"
            />
            <circle
              cx={5846.794}
              cy={114.034}
              r={26.132}
              style={{
                fill: '#bcf3ff',
              }}
              vectorEffect="non-scaling-stroke"
            />
            <circle
              cx={5726.617}
              cy={77.579}
              r={19.251}
              style={{
                fill: 'rgba(42,138,247,.6)',
              }}
              vectorEffect="non-scaling-stroke"
            />
            <circle
              cx={5942.231}
              cy={60.786}
              r={18.596}
              style={{
                fill: '#bcf3ff',
              }}
              vectorEffect="non-scaling-stroke"
            />
            <circle
              cx={6392.709}
              cy={79.136}
              r={19.251}
              style={{
                fill: 'rgba(42,138,247,.6)',
              }}
              vectorEffect="non-scaling-stroke"
            />
            <circle
              cx={4863.345}
              cy={96.83}
              r={26.132}
              style={{
                fill: '#bcf3ff',
              }}
              vectorEffect="non-scaling-stroke"
            />
            <path
              d="m884.736 167.282-29.491-18.105c-29.491-18.022-88.474-42.598-147.456-42.434-58.983-.082-117.965 24.412-176.947 16.711-58.983-7.618-117.965-35.143-176.948-32.686s-117.964 47.842-176.947 49.48-117.965-31.212-147.456-29.573L0 112.313v83.723h884.736v-28.754Z"
              style={{
                fill: '#09f',
              }}
            />
            <circle
              cx={324.024}
              cy={87.819}
              r={28.672}
              style={{
                fill: 'rgba(214,237,255,.4)',
              }}
              vectorEffect="non-scaling-stroke"
            />
            <circle
              cx={191.201}
              cy={121.243}
              r={25.805}
              style={{
                fill: 'rgba(42,138,247,.6)',
              }}
              vectorEffect="non-scaling-stroke"
            />
            <circle
              cx={30.424}
              cy={110.839}
              r={18.596}
              style={{
                fill: '#bcf3ff',
              }}
              vectorEffect="non-scaling-stroke"
            />
            <circle
              cx={559.308}
              cy={121.243}
              r={26.132}
              style={{
                fill: '#bcf3ff',
              }}
              vectorEffect="non-scaling-stroke"
            />
            <circle
              cx={673.292}
              cy={107.07}
              r={19.251}
              style={{
                fill: 'rgba(42,138,247,.6)',
              }}
              vectorEffect="non-scaling-stroke"
            />
            <circle
              cx={470.239}
              cy={18.596}
              r={18.596}
              style={{
                fill: '#bcf3ff',
              }}
              vectorEffect="non-scaling-stroke"
            />
            <circle
              cx={106.281}
              cy={34.162}
              r={19.251}
              style={{
                fill: 'rgba(42,138,247,.6)',
              }}
              vectorEffect="non-scaling-stroke"
            />
            <path
              d="m847.053 167.282 29.491-18.105c29.491-18.022 88.474-42.598 147.456-42.434 58.982-.082 117.965 24.412 176.947 16.711 58.983-7.618 117.965-35.143 176.947-32.686s117.965 47.842 176.948 49.48 117.964-31.212 147.456-29.573l29.49 1.638v83.723H847.054v-28.754Z"
              style={{
                fill: '#09f',
              }}
            />
            <circle
              cx={1271.48}
              cy={121.243}
              r={28.672}
              style={{
                fill: 'rgba(214,237,255,.4)',
              }}
              vectorEffect="non-scaling-stroke"
            />
            <circle
              cx={1453.261}
              cy={102.647}
              r={25.805}
              style={{
                fill: 'rgba(42,138,247,.6)',
              }}
              vectorEffect="non-scaling-stroke"
            />
            <circle
              cx={992.867}
              cy={107.07}
              r={26.132}
              style={{
                fill: '#bcf3ff',
              }}
              vectorEffect="non-scaling-stroke"
            />
            <circle
              cx={884.736}
              cy={59.911}
              r={19.251}
              style={{
                fill: 'rgba(42,138,247,.6)',
              }}
              vectorEffect="non-scaling-stroke"
            />
            <circle
              cx={1144.82}
              cy={48.03}
              r={18.596}
              style={{
                fill: '#bcf3ff',
              }}
              vectorEffect="non-scaling-stroke"
            />
            <path
              d="m2569.83 167.282-29.49-18.105c-29.492-18.022-88.474-42.598-147.457-42.434-58.982-.082-117.965 24.412-176.947 16.711-58.982-7.618-117.965-35.143-176.947-32.686s-117.965 47.842-176.947 49.48-117.965-31.212-147.456-29.573l-29.492 1.638v83.723h884.736v-28.754Z"
              style={{
                fill: '#09f',
              }}
            />
            <circle
              cx={2021.54}
              cy={140.002}
              r={28.672}
              style={{
                fill: 'rgba(214,237,255,.4)',
              }}
              vectorEffect="non-scaling-stroke"
            />
            <circle
              cx={1886.126}
              cy={87.819}
              r={25.805}
              style={{
                fill: 'rgba(42,138,247,.6)',
              }}
              vectorEffect="non-scaling-stroke"
            />
            <circle
              cx={2255.749}
              cy={79.3}
              r={26.132}
              style={{
                fill: '#bcf3ff',
              }}
              vectorEffect="non-scaling-stroke"
            />
            <circle
              cx={2378.547}
              cy={105.432}
              r={19.251}
              style={{
                fill: 'rgba(42,138,247,.6)',
              }}
              vectorEffect="non-scaling-stroke"
            />
            <circle
              cx={1699.84}
              cy={111.33}
              r={18.596}
              style={{
                fill: '#bcf3ff',
              }}
              vectorEffect="non-scaling-stroke"
            />
            <circle
              cx={2498.232}
              cy={67.012}
              r={19.251}
              style={{
                fill: 'rgba(42,138,247,.6)',
              }}
              vectorEffect="non-scaling-stroke"
            />
            <path
              d="m2407.629 167.282 29.49-18.105c29.492-18.022 88.475-42.598 147.457-42.434 58.982-.082 117.965 24.412 176.947 16.711 58.983-7.618 117.965-35.143 176.947-32.686s117.965 47.842 176.948 49.48 117.964-31.212 147.456-29.573l29.49 1.638v83.723H2407.63v-28.754Z"
              style={{
                fill: '#09f',
              }}
            />
            <circle
              cx={2860.728}
              cy={73.975}
              r={28.672}
              style={{
                fill: 'rgba(214,237,255,.4)',
              }}
              vectorEffect="non-scaling-stroke"
            />
            <circle
              cx={3030.712}
              cy={59.966}
              r={25.805}
              style={{
                fill: 'rgba(42,138,247,.6)',
              }}
              vectorEffect="non-scaling-stroke"
            />
            <circle
              cx={3270.984}
              cy={115.017}
              r={18.596}
              style={{
                fill: '#bcf3ff',
              }}
              vectorEffect="non-scaling-stroke"
            />
            <circle
              cx={2599.895}
              cy={113.952}
              r={26.132}
              style={{
                fill: '#bcf3ff',
              }}
              vectorEffect="non-scaling-stroke"
            />
            <circle
              cx={2152.776}
              cy={103.63}
              r={19.251}
              style={{
                fill: 'rgba(42,138,247,.6)',
              }}
              vectorEffect="non-scaling-stroke"
            />
            <circle
              cx={2695.332}
              cy={60.704}
              r={18.596}
              style={{
                fill: '#bcf3ff',
              }}
              vectorEffect="non-scaling-stroke"
            />
            <circle
              cx={3219.374}
              cy={71.026}
              r={19.251}
              style={{
                fill: 'rgba(42,138,247,.6)',
              }}
              vectorEffect="non-scaling-stroke"
            />
            <circle
              cx={1603.092}
              cy={77.497}
              r={26.132}
              style={{
                fill: '#bcf3ff',
              }}
              vectorEffect="non-scaling-stroke"
            />
            <path
              d="m7378.616 167.282-29.491-18.105c-29.491-18.022-88.474-42.598-147.456-42.434-58.982-.082-117.965 24.412-176.947 16.711-58.983-7.618-117.965-35.143-176.947-32.686s-117.965 47.842-176.948 49.48-117.964-31.212-147.456-29.573l-29.49 1.638v83.723h884.735v-28.754Z"
              style={{
                fill: '#09f',
              }}
            />
            <circle
              cx={6907.576}
              cy={124.683}
              r={28.672}
              style={{
                fill: 'rgba(214,237,255,.4)',
              }}
              vectorEffect="non-scaling-stroke"
            />
            <circle
              cx={6770.77}
              cy={71.026}
              r={25.805}
              style={{
                fill: 'rgba(42,138,247,.6)',
              }}
              vectorEffect="non-scaling-stroke"
            />
            <circle
              cx={6520.668}
              cy={116.983}
              r={18.596}
              style={{
                fill: '#bcf3ff',
              }}
              vectorEffect="non-scaling-stroke"
            />
            <circle
              cx={7186.35}
              cy={113.952}
              r={26.132}
              style={{
                fill: '#bcf3ff',
              }}
              vectorEffect="non-scaling-stroke"
            />
            <circle
              cx={7306.527}
              cy={77.497}
              r={19.251}
              style={{
                fill: 'rgba(42,138,247,.6)',
              }}
              vectorEffect="non-scaling-stroke"
            />
            <circle
              cx={7090.913}
              cy={60.704}
              r={18.596}
              style={{
                fill: '#bcf3ff',
              }}
              vectorEffect="non-scaling-stroke"
            />
            <circle
              cx={6566.871}
              cy={71.026}
              r={19.251}
              style={{
                fill: 'rgba(42,138,247,.6)',
              }}
              vectorEffect="non-scaling-stroke"
            />
            <path
              d="m7340.933 167.282 29.491-18.105c29.491-18.022 88.474-42.598 147.456-42.434 58.982-.082 117.965 24.412 176.947 16.711 58.982-7.618 117.965-35.143 176.947-32.686s117.965 47.842 176.947 49.48 117.965-31.212 147.456-29.573l29.492 1.638v83.723h-884.736v-28.754Z"
              style={{
                fill: '#09f',
              }}
            />
            <circle
              cx={7794.033}
              cy={73.975}
              r={28.672}
              style={{
                fill: 'rgba(214,237,255,.4)',
              }}
              vectorEffect="non-scaling-stroke"
            />
            <circle
              cx={7947.141}
              cy={102.647}
              r={25.805}
              style={{
                fill: 'rgba(42,138,247,.6)',
              }}
              vectorEffect="non-scaling-stroke"
            />
            <circle
              cx={7533.281}
              cy={113.952}
              r={26.133}
              style={{
                fill: '#bcf3ff',
              }}
              vectorEffect="non-scaling-stroke"
            />
            <circle
              cx={7413.023}
              cy={77.497}
              r={19.251}
              style={{
                fill: 'rgba(42,138,247,.6)',
              }}
              vectorEffect="non-scaling-stroke"
            />
            <circle
              cx={7628.718}
              cy={60.704}
              r={18.596}
              style={{
                fill: '#bcf3ff',
              }}
              vectorEffect="non-scaling-stroke"
            />
            <path
              d="m9063.71 167.282-29.491-18.105c-29.491-18.022-88.474-42.598-147.456-42.434-58.982-.082-117.965 24.412-176.947 16.711-58.983-7.618-117.965-35.143-176.947-32.686s-117.965 47.842-176.948 49.48-117.964-31.212-147.456-29.573l-29.49 1.638v83.723h884.735v-28.754Z"
              style={{
                fill: '#09f',
              }}
            />
            <circle
              cx={8607.416}
              cy={73.975}
              r={28.672}
              style={{
                fill: 'rgba(214,237,255,.4)',
              }}
              vectorEffect="non-scaling-stroke"
            />
            <circle
              cx={8437.35}
              cy={59.966}
              r={25.805}
              style={{
                fill: 'rgba(42,138,247,.6)',
              }}
              vectorEffect="non-scaling-stroke"
            />
            <circle
              cx={8749.629}
              cy={79.3}
              r={26.133}
              style={{
                fill: '#bcf3ff',
              }}
              vectorEffect="non-scaling-stroke"
            />
            <circle
              cx={8872.427}
              cy={105.432}
              r={19.251}
              style={{
                fill: 'rgba(42,138,247,.6)',
              }}
              vectorEffect="non-scaling-stroke"
            />
            <circle
              cx={8643.789}
              cy={102.647}
              r={18.596}
              style={{
                fill: '#bcf3ff',
              }}
              vectorEffect="non-scaling-stroke"
            />
            <circle
              cx={8248.689}
              cy={71.026}
              r={19.251}
              style={{
                fill: 'rgba(42,138,247,.6)',
              }}
              vectorEffect="non-scaling-stroke"
            />
            <path
              d="m8901.509 167.282 29.49-18.105c29.492-18.022 88.474-42.598 147.457-42.434 58.982-.082 117.965 24.412 176.947 16.711 58.982-7.618 117.965-35.143 176.947-32.686s117.965 47.842 176.947 49.48 117.965-31.212 147.456-29.573l29.492 1.638v83.723h-884.736v-28.754Z"
              style={{
                fill: '#09f',
              }}
            />
            <circle
              cx={9354.609}
              cy={73.975}
              r={28.672}
              style={{
                fill: 'rgba(214,237,255,.4)',
              }}
              vectorEffect="non-scaling-stroke"
            />
            <circle
              cx={9524.593}
              cy={59.966}
              r={25.805}
              style={{
                fill: 'rgba(42,138,247,.6)',
              }}
              vectorEffect="non-scaling-stroke"
            />
            <circle
              cx={9734.144}
              cy={133.612}
              r={18.596}
              style={{
                fill: '#bcf3ff',
              }}
              vectorEffect="non-scaling-stroke"
            />
            <circle
              cx={9093.857}
              cy={113.952}
              r={26.133}
              style={{
                fill: '#bcf3ff',
              }}
              vectorEffect="non-scaling-stroke"
            />
            <circle
              cx={8973.598}
              cy={77.497}
              r={19.251}
              style={{
                fill: 'rgba(42,138,247,.6)',
              }}
              vectorEffect="non-scaling-stroke"
            />
            <circle
              cx={9189.294}
              cy={60.704}
              r={18.596}
              style={{
                fill: '#bcf3ff',
              }}
              vectorEffect="non-scaling-stroke"
            />
            <circle
              cx={9713.336}
              cy={71.026}
              r={19.251}
              style={{
                fill: 'rgba(42,138,247,.6)',
              }}
              vectorEffect="non-scaling-stroke"
            />
            <circle
              cx={8110.325}
              cy={96.748}
              r={26.133}
              style={{
                fill: '#bcf3ff',
              }}
              vectorEffect="non-scaling-stroke"
            />
            <circle
              cx={756.063}
              cy={40.66}
              r={29.821}
              data-name="_x39_737ab4d-9e9e-42ca-aa00-da2665381d19-16"
              style={{
                fill: 'rgba(42,138,247,.6)',
              }}
              vectorEffect="non-scaling-stroke"
            />
          </g>
        </svg>
      </div>
      <Footer />
    </main>
  )
}
