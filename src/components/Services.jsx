import { Scissors, Droplet, Heart, Award, Clock, Shield } from "lucide-react"
import "../styles/Services.css"

const Services = () => {
    const services = [
        {
            icon: <Scissors size={40} />,
            title: "Corte y Peinado",
            description: "Cortes personalizados según la raza y preferencias del dueño, con técnicas profesionales.",
        },
        {
            icon: <Droplet size={40} />,
            title: "Baño Completo",
            description: "Baño con productos especializados para cada tipo de pelaje y condición de piel.",
        },
        {
            icon: <Heart size={40} />,
            title: "Spa Canino",
            description: "Tratamientos especiales para consentir a tu mascota, incluyendo masajes y aromaterapia.",
        },
        {
            icon: <Award size={40} />,
            title: "Estética Especializada",
            description: "Servicios para exposiciones caninas y eventos especiales con los más altos estándares.",
        },
        {
            icon: <Clock size={40} />,
            title: "Servicio Express",
            description: "Atención rápida para cuando necesitas un servicio de calidad en poco tiempo.",
        },
        {
            icon: <Shield size={40} />,
            title: "Cuidado Sanitario",
            description: "Limpieza de oídos, corte de uñas y cuidados básicos para la salud de tu mascota.",
        },
    ]

    return (
        <section id="services" className="services">
            <div className="section-header">
                <h2>Nuestros Servicios</h2>
                <p>Ofrecemos una amplia gama de servicios para mantener a tu mascota limpia, saludable y feliz</p>
            </div>

            <div className="services-grid">
                {services.map((service, index) => (
                    <div className="service-card" key={index}>
                        <div className="service-icon">{service.icon}</div>
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                    </div>
                ))}
            </div>

            <div className="service-cta">
                <h3>¿Necesitas un servicio personalizado?</h3>
                <p>Contáctanos para discutir las necesidades específicas de tu mascota</p>
                <button className="btn primary">Contactar Ahora</button>
            </div>
        </section>
    )
}

export default Services
