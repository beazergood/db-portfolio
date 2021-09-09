import React, { useState, useEffect } from 'react'
import useScrollListener from '../../../hooks/useScrollListener'

export interface NavbarProps {
  theme: any
}

export const Navbar: React.FC<NavbarProps> = ({ theme }) => {
  const [navClassList, setNavClassList] = useState([])
  const scroll = useScrollListener()

  // update classList of nav on scroll
  useEffect(() => {
    const _classList = []

    if (scroll.y > 150 && scroll.y - scroll.lastY > 0)
      _classList.push('nav-bar--hidden')

    setNavClassList(_classList)
  }, [scroll.y, scroll.lastY])

  return (
    <nav
      className={`w-screen py-4 fixed flex flex-row space-around z-40 navigationBar ${navClassList.join(
        ' '
      )}`}
      role="navigation"
    >
      <div className="flex-grow"></div>
      <div className="flex space-x-4 mr-10">
        <a
          key="a"
          className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
        >
          Videos
        </a>

        <a
          key="b"
          className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
        >
          About
        </a>
      </div>

      <style jsx>{`
        nav {
          height: 4em;
          position: sticky;
          top: 0;
          line-height: 4em;
          text-align: center;
          background-color: tomato;
          color: white;
          font-family: sans-serif;
          transition: transform 150ms ease-in-out;
        }

        nav.nav-bar--hidden {
          transform: translateY(-100%);
        }
      `}</style>
    </nav>
  )
}
