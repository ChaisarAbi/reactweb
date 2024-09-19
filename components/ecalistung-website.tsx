'use client'

import { useState, useEffect } from 'react'
import { Menu, X, BookOpen, Users, Brain, ChevronLeft, ChevronRight, Mail, Phone, MapPin, Instagram } from 'lucide-react'

const Logo = ({ className = "w-10 h-10" }) => (
  <svg
    viewBox="0 0 100 100"
    className={`${className} text-yellow-400`}
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="50" cy="50" r="45" fill="currentColor" />
    <circle cx="35" cy="40" r="5" fill="black" />
    <circle cx="65" cy="40" r="5" fill="black" />
    <path
      d="M30 65 Q 50 80, 70 65"
      stroke="black"
      strokeWidth="5"
      fill="none"
    />
  </svg>
)

export function EcalistungWebsite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    { src: "/placeholder.svg?height=400&width=600&text=Reading+Time", alt: "Children reading together", caption: "Fostering a love for reading" },
    { src: "/placeholder.svg?height=400&width=600&text=Art+Class", alt: "Children painting", caption: "Expressing creativity through art" },
    { src: "/placeholder.svg?height=400&width=600&text=Math+Games", alt: "Children playing math games", caption: "Making math fun and engaging" },
    { src: "/placeholder.svg?height=400&width=600&text=Outdoor+Activities", alt: "Children playing outside", caption: "Learning through outdoor exploration" },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-orange-50">
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Logo />
            <span className="text-2xl font-bold text-gray-800">Ecalistung</span>
          </div>
          <nav className="hidden md:flex space-x-4">
            <a href="#home" className="text-gray-600 hover:text-yellow-500">Home</a>
            <a href="#about" className="text-gray-600 hover:text-yellow-500">About</a>
            <a href="#documentation" className="text-gray-600 hover:text-yellow-500">Documentation</a>
            <a href="#services" className="text-gray-600 hover:text-yellow-500">Services</a>
            <a href="#contact" className="text-gray-600 hover:text-yellow-500">Contact</a>
          </nav>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden">
            <a href="#home" className="block py-2 px-4 text-sm hover:bg-gray-200">Home</a>
            <a href="#about" className="block py-2 px-4 text-sm hover:bg-gray-200">About</a>
            <a href="#documentation" className="block py-2 px-4 text-sm hover:bg-gray-200">Documentation</a>
            <a href="#services" className="block py-2 px-4 text-sm hover:bg-gray-200">Services</a>
            <a href="#contact" className="block py-2 px-4 text-sm hover:bg-gray-200">Contact</a>
          </div>
        )}
      </header>

      <main>
        <section id="home" className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold text-gray-800 mb-6">Welcome to Ecalistung</h1>
            <p className="text-xl text-gray-600 mb-8">Nurturing young minds through fun and engaging tutoring</p>
            <a href="#contact" className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded-full transition duration-300">
              Get Started
            </a>
          </div>
        </section>

        <section id="about" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">About Us</h2>
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <img src="../images/apel.jpeg" alt="Happy children learning" className="rounded-lg shadow-md" />
              </div>
              <div className="md:w-1/2 md:pl-8">
                <p className="text-gray-600 mb-4">
                  At Ecalistung, we believe that every child has the potential to excel. Our dedicated team of tutors is committed to providing personalized, engaging, and effective learning experiences for preschoolers.
                </p>
                <p className="text-gray-600">
                  We focus on developing essential skills through play-based learning, ensuring that education is not just informative, but also fun and memorable.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="documentation" className="py-20 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Our Learning Journey</h2>
            <div className="relative">
              <div className="overflow-hidden rounded-lg shadow-lg">
                <img 
                  src={slides[currentSlide].src} 
                  alt={slides[currentSlide].alt} 
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
                  <p className="text-lg font-semibold">{slides[currentSlide].caption}</p>
                </div>
              </div>
              <button 
                onClick={prevSlide} 
                className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition duration-300"
              >
                <ChevronLeft className="w-6 h-6 text-gray-800" />
              </button>
              <button 
                onClick={nextSlide} 
                className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition duration-300"
              >
                <ChevronRight className="w-6 h-6 text-gray-800" />
              </button>
            </div>
          </div>
        </section>

        <section id="services" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <BookOpen className="w-12 h-12 text-yellow-400 mb-4" />
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">Early Literacy</h3>
                <p className="text-gray-600">Develop a love for reading and writing through interactive stories and games.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <Users className="w-12 h-12 text-yellow-400 mb-4" />
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">Social Skills</h3>
                <p className="text-gray-600">Foster friendships and communication through group activities and role-play.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <Brain className="w-12 h-12 text-yellow-400 mb-4" />
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">Cognitive Development</h3>
                <p className="text-gray-600">Enhance problem-solving and critical thinking with age-appropriate puzzles and games.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Find Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Location</h3>
                <div className="aspect-w-16 aspect-h-9 mb-4">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.732343540816!2d106.73827817441118!3d-6.298859561646271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f15e87ac9fbb%3A0x55d17a2343b315e4!2sEcalistung!5e0!3m2!1sid!2sid!4v1726747168166!5m2!1sid!2sid" 
                    className="w-full h-full rounded-lg"
                    style={{border:0}} 
                    allowFullScreen 
                    loading="lazy"
                  ></iframe>
                </div>
                <div className="flex items-center mb-2">
                  <MapPin className="w-5 h-5 text-yellow-400 mr-2" />
                  <p className="text-gray-600">Jl.Ciputat Baru Gg. Harapan 1 rt.002/005 no.67, Sawah Lama, Kec. Ciputat, Kota Tangerang Selatan, Banten 15413</p>
                </div>
                <div className="flex items-center mb-2">
                  <Phone className="w-5 h-5 text-yellow-400 mr-2" />
                  <p className="text-gray-600">0821-2601-8459</p>
                </div>

              </div>
              <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Follow Us on Instagram</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="aspect-w-1 aspect-h-1">
                      <img 
                        src={`/placeholder.svg?height=300&width=300&text=Instagram+Post+${i+1}`}
                        alt={`Instagram Post ${i+1}`}
                        className="object-cover rounded-lg"
                      />
                    </div>
                  ))}
                </div>
                <a 
                  href="https://www.instagram.com/ecalistung" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center mt-4 text-yellow-400 hover:text-yellow-500"
                >
                  <Instagram className="w-5 h-5 mr-2" />
                  @ecalistung
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2023 Ecalistung. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}