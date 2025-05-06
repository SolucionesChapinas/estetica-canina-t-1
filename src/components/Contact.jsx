"use client"

import { useState } from "react"
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react"
import "../styles/Contact.css"

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        petName: "",
        petBreed: "",
        service: "",
        message: "",
    })

    const [formStatus, setFormStatus] = useState({
        submitted: false,
        success: false,
        message: "",
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        // Simulación de envío exitoso
        setFormStatus({
            submitted: true,
            success: true,
            message: "¡Gracias por contactarnos! Te responderemos a la brevedad.",
        })

        // Resetear el formulario después de 3 segundos
        setTimeout(() => {
            setFormData({
                name: "",
                email: "",
                phone: "",
                petName: "",
                petBreed: "",
                service: "",
                message: "",
            })
            setFormStatus({
                submitted: false,
                success: false,
                message: "",
            })
        }, 3000)
    }

    return (
        <section id="contact" className="contact">
            <div className="section-header">
                <h2>Contacto</h2>
                <p>Agenda una cita o solicita más información sobre nuestros servicios</p>
            </div>

            <div className="contact-container">
                <div className="contact-info">
                    <h3>Información de Contacto</h3>
                    <p>Estamos aquí para atender a tu mascota con el mejor servicio</p>

                    <div className="info-items">
                        <div className="info-item">
                            <MapPin size={20} />
                            <div>
                                <h4>Ubicación</h4>
                                <p>Av. Mascotas Felices 123, Colonia Canina</p>
                            </div>
                        </div>

                        <div className="info-item">
                            <Phone size={20} />
                            <div>
                                <h4>Teléfono</h4>
                                <p>+52 123 456 7890</p>
                            </div>
                        </div>

                        <div className="info-item">
                            <Mail size={20} />
                            <div>
                                <h4>Email</h4>
                                <p>info@pawsomegrooming.com</p>
                            </div>
                        </div>

                        <div className="info-item">
                            <Clock size={20} />
                            <div>
                                <h4>Horario</h4>
                                <p>Lunes a Sábado: 9:00 AM - 7:00 PM</p>
                                <p>Domingo: 10:00 AM - 3:00 PM</p>
                            </div>
                        </div>
                    </div>

                    <div className="social-media">
                        <a href="#" className="social-icon facebook">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="#" className="social-icon instagram">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="#" className="social-icon whatsapp">
                            <i className="fab fa-whatsapp"></i>
                        </a>
                    </div>
                </div>

                <div className="contact-form">
                    <h3>Reserva una Cita</h3>

                    {formStatus.submitted ? (
                        <div className={`form-message ${formStatus.success ? "success" : "error"}`}>{formStatus.message}</div>
                    ) : (
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Nombre Completo</label>
                                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="phone">Teléfono</label>
                                    <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="petName">Nombre de tu Mascota</label>
                                    <input
                                        type="text"
                                        id="petName"
                                        name="petName"
                                        value={formData.petName}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="petBreed">Raza</label>
                                    <input
                                        type="text"
                                        id="petBreed"
                                        name="petBreed"
                                        value={formData.petBreed}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="service">Servicio Deseado</label>
                                <select id="service" name="service" value={formData.service} onChange={handleChange} required>
                                    <option value="">Selecciona un servicio</option>
                                    <option value="corte">Corte y Peinado</option>
                                    <option value="baño">Baño Completo</option>
                                    <option value="spa">Spa Canino</option>
                                    <option value="especializado">Estética Especializada</option>
                                    <option value="express">Servicio Express</option>
                                    <option value="sanitario">Cuidado Sanitario</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Mensaje o Instrucciones Especiales</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="4"
                                    value={formData.message}
                                    onChange={handleChange}
                                ></textarea>
                            </div>

                            <button type="submit" className="btn primary">
                                <Send size={16} />
                                Enviar Solicitud
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </section>
    )
}

export default Contact
