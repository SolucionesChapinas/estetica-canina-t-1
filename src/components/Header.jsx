"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import "../styles/Header.css"

const Header = ({ activeSection, setActiveSection }) => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const handleNavClick = (section) => {
        setActiveSection(section)
        setMobileMenuOpen(false)

        const element = document.getElementById(section)
        if (element) {
            element.scrollIntoView({ behavior: "smooth" })
        }
    }

    return (
        <header className={`header ${isScrolled ? "scrolled" : ""}`}>
            <div className="header-container">
                <div className="logo">
                    <img src="/images/logo.png" alt="Pawsome Grooming" />
                    <h1>
                        Pawsome<span>Grooming</span>
                    </h1>
                </div>

                <nav className={`desktop-nav ${mobileMenuOpen ? "mobile-open" : ""}`}>
                    <ul>
                        <li>
                            <a
                                href="#home"
                                className={activeSection === "home" ? "active" : ""}
                                onClick={() => handleNavClick("home")}
                            >
                                Inicio
                            </a>
                        </li>
                        <li>
                            <a
                                href="#services"
                                className={activeSection === "services" ? "active" : ""}
                                onClick={() => handleNavClick("services")}
                            >
                                Servicios
                            </a>
                        </li>
                        <li>
                            <a
                                href="#gallery"
                                className={activeSection === "gallery" ? "active" : ""}
                                onClick={() => handleNavClick("gallery")}
                            >
                                Galería
                            </a>
                        </li>
                        <li>
                            <a
                                href="#testimonials"
                                className={activeSection === "testimonials" ? "active" : ""}
                                onClick={() => handleNavClick("testimonials")}
                            >
                                Testimonios
                            </a>
                        </li>
                        <li>
                            <a
                                href="#contact"
                                className={activeSection === "contact" ? "active" : ""}
                                onClick={() => handleNavClick("contact")}
                            >
                                Contacto
                            </a>
                        </li>
                    </ul>
                </nav>

                <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>
        </header>
    )
}

export default Header
