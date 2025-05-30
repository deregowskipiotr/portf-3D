import { navLinks } from "../constants/index.js";
import { useState, useEffect } from "react";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // check if the page is scrolled more than 10px
      // if so, set scrolled to true, else set it to false
      // this will add a class to the navbar to change its styles
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : 'not-scrolled'}`}>
      <div className="inner">
        <a className="logo" href="#hero">
          Pio<span className="text-blue-500 font-medium">Der</span>
        </a>

        <nav className="desktop">
          <ul>
            {navLinks.map(({link, name}) => (
              <li key={name} className="group">
                <a href={link}>
                  <span>{name}</span>
                  <span className="underline"/>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a href="#contact" className="contact-btn group">
          <div className="inner">
            <span>Contact me</span>
          </div>
        </a>

      </div>
    </header>
  )
}

export default NavBar