import { Star } from "lucide-react"
import "../styles/Testimonials.css"

const Testimonials = () => {
    const testimonials = [
        {
            id: 1,
            name: "María González",
            pet: "Luna - Poodle",
            rating: 5,
            text: "El servicio es excelente. Mi Luna siempre sale feliz y hermosa. El personal es muy amable y profesional, realmente se nota que aman a los animales.",
            image: "/images/testimonios/testimonial-2.avif",
        },
        {
            id: 2,
            name: "Carlos Rodríguez",
            pet: "Rocky - Golden Retriever",
            rating: 5,
            text: "Desde que llevamos a Rocky a Pawsome Grooming, su pelaje luce increíble. Además, el ambiente es muy tranquilo, lo que ayuda a que mi perro no se estrese.",
            image: "/images/testimonios/testimonial-1.avif",
        },
        {
            id: 3,
            name: "Ana Martínez",
            pet: "Coco - Shih Tzu",
            rating: 4,
            text: "El corte especializado para Coco quedó perfecto. Aprecio mucho que tomen en cuenta las necesidades específicas de cada raza. Definitivamente regresaremos.",
            image: "/images/testimonios/testimonial-4.avif",
        },
        {
            id: 4,
            name: "Jorge Méndez",
            pet: "Toby - Schnauzer",
            rating: 5,
            text: "Excelente atención y profesionalismo. Toby siempre sale impecable y con un aroma delicioso. El precio es justo por la calidad del servicio que ofrecen.",
            image: "/images/testimonios/testimonial-3.avif",
        },
    ]

    const renderStars = (rating) => {
        return Array(5)
            .fill(0)
            .map((_, index) => (
                <Star
                    key={index}
                    size={16}
                    fill={index < rating ? "#FFD700" : "none"}
                    stroke={index < rating ? "#FFD700" : "#ccc"}
                />
            ))
    }

    return (
        <section id="testimonials" className="testimonials">
            <div className="section-header">
                <h2>Testimonios</h2>
                <p>Lo que nuestros clientes y sus mascotas opinan sobre nosotros</p>
            </div>

            <div className="testimonials-container">
                {testimonials.map((testimonial) => (
                    <div className="testimonial-card" key={testimonial.id}>
                        <div className="testimonial-header">
                            <img src={testimonial.image || "/placeholder.svg"} alt={testimonial.name} className="client-image" />
                            <div className="testimonial-info">
                                <h3>{testimonial.name}</h3>
                                <p className="pet-name">{testimonial.pet}</p>
                                <div className="rating">{renderStars(testimonial.rating)}</div>
                            </div>
                        </div>
                        <p className="testimonial-text">"{testimonial.text}"</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Testimonials
