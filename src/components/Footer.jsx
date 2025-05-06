import { Heart } from "lucide-react"
import "../styles/Footer.css"

const Footer = () => {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-logo">
                    <img src="/images/logo.png" alt="Pawsome Grooming" />
                    <h2>
                        Pawsome<span>Grooming</span>
                    </h2>
                    <p>Cuidado profesional para tu mejor amigo</p>
                </div>

                <div className="footer-links">
                    <div className="footer-column">
                        <h3>Enlaces Rápidos</h3>
                        <ul>
                            <li>
                                <a href="#home">Inicio</a>
                            </li>
                            <li>
                                <a href="#services">Servicios</a>
                            </li>
                            <li>
                                <a href="#gallery">Galería</a>
                            </li>
                            <li>
                                <a href="#testimonials">Testimonios</a>
                            </li>
                            <li>
                                <a href="#contact">Contacto</a>
                            </li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h3>Servicios</h3>
                        <ul>
                            <li>
                                <a href="#services">Corte y Peinado</a>
                            </li>
                            <li>
                                <a href="#services">Baño Completo</a>
                            </li>
                            <li>
                                <a href="#services">Spa Canino</a>
                            </li>
                            <li>
                                <a href="#services">Estética Especializada</a>
                            </li>
                            <li>
                                <a href="#services">Servicio Express</a>
                            </li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h3>Contacto</h3>
                        <ul className="contact-list">
                            <li>Av. Mascotas Felices 123</li>
                            <li>Colonia Canina</li>
                            <li>+52 123 456 7890</li>
                            <li>info@pawsomegrooming.com</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; {currentYear} Pawsome Grooming. Todos los derechos reservados.</p>
                <p className="made-with">
                    Hecho con <Heart size={14} className="heart-icon" /> para los amantes de las mascotas
                </p>
            </div>
        </footer>
    )
}

export default Footer
