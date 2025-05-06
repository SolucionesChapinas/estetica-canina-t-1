"use client"

import { ChevronDown } from "lucide-react"
import "../styles/Hero.css"

const Hero = ({ setActiveSection }) => {
    const scrollToServices = () => {
        setActiveSection("services")
        document.getElementById("services").scrollIntoView({ behavior: "smooth" })
    }

    return (
        <section id="home" className="hero">
            <div className="hero-content">
                <h1>Estética Canina Profesional</h1>
                <h2>Cuidamos y mimamos a tu mejor amigo</h2>
                <p>
                    En Pawsome Grooming ofrecemos servicios de estética canina de alta calidad, con productos premium y atención
                    personalizada para cada mascota.
                </p>
                <div className="hero-buttons">
                    <button className="btn primary" onClick={scrollToServices}>
                        Nuestros Servicios
                    </button>
                    <button
                        className="btn secondary"
                        onClick={() => {
                            setActiveSection("contact")
                            document.getElementById("contact").scrollIntoView({ behavior: "smooth" })
                        }}
                    >
                        Reservar Cita
                    </button>
                </div>
            </div>
            <div className="scroll-indicator" onClick={scrollToServices}>
                <span>Descubre más</span>
                <ChevronDown size={24} />
            </div>
        </section>
    )
}

export default Hero
