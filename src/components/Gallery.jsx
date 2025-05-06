"use client"

import { useState } from "react"
import { X } from "lucide-react"
import "../styles/Gallery.css"

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(null)

    const galleryImages = [
        {
            id: 1,
            src: "/images/galeria/dog1.webp",
            alt: "Perro poodle después de un corte profesional",
            category: "Cortes",
        },
        {
            id: 2,
            src: "/images/galeria/dog2.jpg",
            alt: "Perro golden retriever durante un baño",
            category: "Baños",
        },
        {
            id: 3,
            src: "/images/galeria/dog3.webp",
            alt: "Perro schnauzer con corte de raza",
            category: "Cortes",
        },
        {
            id: 4,
            src: "/images/galeria/dog4.jpg",
            alt: "Perro shih tzu con lazo decorativo",
            category: "Estilismo",
        },
        {
            id: 5,
            src: "/images/galeria/dog5.jpg",
            alt: "Perro yorkshire con peinado especial",
            category: "Estilismo",
        },
        {
            id: 6,
            src: "/images/galeria/dog6.jpg",
            alt: "Perro bichón frisé después de un spa completo",
            category: "Spa",
        },
        {
            id: 7,
            src: "/images/galeria/dog7.webp",
            alt: "Perro maltés con corte de verano",
            category: "Cortes",
        },
        {
            id: 8,
            src: "/images/galeria/dog8.jpg",
            alt: "Perro pomerania con peinado esponjoso",
            category: "Estilismo",
        },
    ]

    const openModal = (image) => {
        setSelectedImage(image)
        document.body.style.overflow = "hidden"
    }

    const closeModal = () => {
        setSelectedImage(null)
        document.body.style.overflow = "auto"
    }

    return (
        <section id="gallery" className="gallery">
            <div className="section-header">
                <h2>Nuestra Galería</h2>
                <p>Mira algunos de nuestros trabajos y transformaciones</p>
            </div>

            <div className="gallery-grid">
                {galleryImages.map((image) => (
                    <div className="gallery-item" key={image.id} onClick={() => openModal(image)}>
                        <img src={image.src || "/placeholder.svg"} alt={image.alt} />
                        <div className="gallery-overlay">
                            <span>{image.category}</span>
                        </div>
                    </div>
                ))}
            </div>

            {selectedImage && (
                <div className="gallery-modal" onClick={closeModal}>
                    <button className="close-modal">
                        <X size={24} />
                    </button>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <img src={selectedImage.src || "/placeholder.svg"} alt={selectedImage.alt} />
                        <p>{selectedImage.alt}</p>
                    </div>
                </div>
            )}
        </section>
    )
}

export default Gallery
