import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import { useSiteMetadata } from "../../hooks/use-site-metadata"
import NavLink from "../NavLink/NavLink"
import logo from "../../images/logo.png"
import * as styles from "./Navbar.module.scss"
import SocialIcons from "../SocialIcons/SocialIcons"
import MobileNavbar from "../MobileNavbar/MobileNavbar"

const getWidth = () =>
  window.innerWidth ||
  document.decumentElement.clientWidth ||
  document.body.clientWidth

export default function Navbar() {
  const [width, setWidth] = useState(getWidth())
  const { menuLinks } = useSiteMetadata()

  useEffect(() => {
    const resizeListener = () => {
      setWidth(getWidth())
    }
    window.addEventListener("resize", resizeListener)

    return () => {
      window.removeEventListener("resize", resizeListener)
    }
  }, [])

  return (
    <nav className={styles.navbar}>
      <Link to="/" className={styles.logo}>
        <img src={logo} alt="page logo" />
      </Link>
      {width > 800 ? (
        <>
          <ul className={styles.navbarList}>
            {menuLinks.map(link => (
              <li key={link.name}>
                <NavLink to={link.slug}>{link.name}</NavLink>
              </li>
            ))}
          </ul>
          <SocialIcons />
        </>
      ) : (
        <MobileNavbar />
      )}
    </nav>
  )
}
