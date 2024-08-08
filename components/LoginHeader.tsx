'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Link as ScrollLink, Events, scrollSpy } from 'react-scroll'

export default function LoginHeader() {
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
      <header
        className="header fixed left-0 top-0 z-50 flex w-full justify-between"
        style={{ backgroundColor: 'transparent' }}
      >
        <div className="block h-16 w-64 md:h-20 md:w-80"></div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`hamburger hamburger--collapse ${
            isOpen ? 'is-active' : ''
          } md:hidden`}
          type="button"
        >
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button>
        <nav
          className={`fixed right-0 top-16 flex h-full w-64 transform flex-col bg-white transition-transform duration-200 ease-in-out ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          } md:static md:w-auto md:translate-x-0`}
        >
          <div className="headerLinks mb-auto mt-10 flex flex-col items-center md:mt-0 md:flex-row">
            <Link href="/" className="admin-login-link">
              Go Back
            </Link>
          </div>
        </nav>
      </header>
    </>
  )
}
