'use client'
import React from "react"
import Link from "next/link"
import classNames from "classnames"
import { usePathname } from 'next/navigation'

export function Navbar() {
  const [isToggled, setToggle] = React.useState(false)
  const pathname = usePathname()

  const handleToggle = () => {
    setToggle(!isToggled)
  }

  React.useEffect(() => {
    setToggle(false)
  }, [pathname])

  return (
    <nav className="bg-black border-2 border-accent_yellow absolute z-50 w-full">
      <div className="max-w-screen-xl grid grid-cols-2 md:grid-cols-3 grid-row-2 md:grid-rows-1 items-center justify-between mx-auto p-4">
        <Link href="/" className="min-w-fit ">
          <span className="font-Jersey10 text-2xl lg:text-3xl whitespace-nowrap text-transparent transition-all grad bg-clip-text gradient-transition">SOAR CONFERENCE</span>
        </Link>
        <div className="flex md:order-2 self-center place-self-center md:ms-auto md:me-0">
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSe3LHNEdavyBYa6OIKLjGsKk9L_T5kmEVL6G7D1KWvUsv_WnA/viewform" target="_blank" rel="noopener noreferrer" className="text-white text-lg lg:text-2xl py-1 px-4 rounded-lg grad transition-all bg-size-200 bg-pos-50 hover:bg-pos-150 ease-linear duration-300 focus:ring-accent_yellow focus:ring-opacity-65 focus:ring-4 focus:outline-none gradient-transition">Apply Now!</a>
          <button data-collapse-toggle="navbar-sticky" type="button" onClick={handleToggle} className="inline-flex items-center ms-5 me-0 p-2 my-auto w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
        </div>
        <div className={classNames(
          "flex justify-center items-center w-full md:flex md:w-fit mx-auto col-span-2 md:col-span-1",
          !isToggled &&
          'hidden',
          isToggled &&
          ''
        )}
          id="navbar-sticky">
          <ul className="flex flex-col justify-center self-center md:p-0 mt-4 font-medium rounded-lg md:flex-row md:mt-0 md:border-0 w-full ">
            <li>
              <Link href="/" className={classNames("nav-element home", pathname === "/" ? 'active' : "")}>Home</Link>
            </li>
            <li>
              <Link href="/about" className={classNames("nav-element about", pathname === "/about" ? 'active' : "")}>About</Link>
            </li>
            <li>
              <Link href="/contact" className={classNames("nav-element contact", pathname === "/contact" ? 'active' : "")}>Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
