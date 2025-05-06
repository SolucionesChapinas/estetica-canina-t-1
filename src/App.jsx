"use client"

import { useState } from "react"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Services from "./components/Services"
import Gallery from "./components/Gallery"
import Testimonials from "./components/Testimonials"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import "./App.css"

function App() {
  const [activeSection, setActiveSection] = useState("home")

  return (
    <div className="app">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      <main>
        <Hero setActiveSection={setActiveSection} />
        <Services />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
