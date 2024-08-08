'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { Link as ScrollLink, Events, scrollSpy } from 'react-scroll'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    Events.scrollEvent.register('begin', function () {
      console.log('begin', arguments)
    })

    Events.scrollEvent.register('end', function () {
      console.log('end', arguments)
    })

    scrollSpy.update()

    return () => {
      Events.scrollEvent.remove('begin')
      Events.scrollEvent.remove('end')
    }
  }, [])

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
      <header className="header fixed z-50 flex w-full justify-between">
        <Link href="/">
          <div className="ml-5 block h-16 w-64 xl:h-20 xl:w-80">
            <Image src="/pr_name.svg" alt="logo" width={320} height={64} />
          </div>
        </Link>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`hamburger hamburger--collapse ${
            isOpen ? 'is-active' : ''
          } xl:hidden`}
          type="button"
        >
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button>
        <nav
          className={`fixed right-0 top-16 flex h-full w-64 transform flex-col bg-white transition-transform duration-200 ease-in-out ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          } xl:static xl:w-auto xl:translate-x-0`}
        >
          <div className="headerLinks mb-auto mt-10 flex flex-col items-center xl:mt-0 xl:flex-row">
            <ScrollLink
              onClick={() => setIsOpen(false)}
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              About
            </ScrollLink>
            <ScrollLink
              onClick={() => setIsOpen(false)}
              activeClass="active"
              to="services"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Services
            </ScrollLink>
            <ScrollLink
              onClick={() => setIsOpen(false)}
              activeClass="active"
              to="results"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Results
            </ScrollLink>
            <ScrollLink
              onClick={() => setIsOpen(false)}
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Contact Us
            </ScrollLink>
            <Link href="/login" className="admin-login-link">
              Admin Login
            </Link>
          </div>
        </nav>
      </header>
    </>
  )
}
