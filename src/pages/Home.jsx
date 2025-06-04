import { FaPhoneAlt, FaBook, FaChalkboardTeacher, FaUsers, FaCertificate, FaArrowRight } from 'react-icons/fa'
import { useEffect, useRef, useState } from 'react'
import React from 'react'

const Hero = () => {


    useEffect(() => {
      // Faire défiler vers le haut au chargement de la page
      window.scrollTo(0, 0);
    }, []);



  const features = [
    {
      icon: <FaChalkboardTeacher className="text-blue-600 text-2xl" />,
      title: "Professeurs Qualifiés",
      description: "Nos enseignants sont des locuteurs natifs ou certifiés avec des années d'expérience dans l'enseignement des langues."
    },
    {
      icon: <FaUsers className="text-blue-600 text-2xl" />,
      title: "Méthodes Adaptées",
      description: "Nous utilisons des méthodes pédagogiques modernes adaptées à tous les âges et tous les niveaux d'apprentissage."
    },
    {
      icon: <FaCertificate className="text-blue-600 text-2xl" />,
      title: "Préparation aux Tests",
      description: "Nous préparons efficacement aux certifications internationales (DELF, TOEFL, CILS, etc.) avec un taux de réussite élevé."
    }
  ]

  const languages = [
    {
      name: "Italien",
      color: "green",
      description: "Apprenez la langue de Dante avec nos enseignants italiens certifiés et découvrez la riche culture italienne.",
      availability: 95,
      levels: ["Débutant", "Certification CILS"],
      popular: true,
      flag: "bg-gradient-to-r from-green-500 via-white to-red-500"
    },
    {
      name: "Anglais",
      color: "red",
      description: "Maîtrisez la langue internationale par excellence avec nos méthodes interactives et nos enseignants anglophones.",
      availability: 100,
      levels: ["Débutant", "TOEFL/IELTS"],
      flag: "bg-gradient-to-b from-[#012169] to-[#C8102E]"
    },
    {
      name: "Français",
      color: "blue-800",
      description: "Perfectionnez votre français avec des cours adaptés, que ce soit pour les locaux ou les étrangers.",
      availability: 100,
      levels: ["Débutant", "DALF/DELF"],
      flag: "bg-gradient-to-r from-[#0055A4] via-white to-[#EF4135]"
    }
  ]

  const LanguageCard = ({ language }) => {
    const progressRef = useRef(null)
    const [progressWidth, setProgressWidth] = useState(0)

    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              setProgressWidth(language.availability)
              observer.unobserve(entry.target)
            }
          })
        },
        { threshold: 0.1 }
      )

      if (progressRef.current) {
        observer.observe(progressRef.current)
      }

      return () => {
        if (progressRef.current) {
          observer.unobserve(progressRef.current)
        }
      }
    }, [language.availability])

    return (
      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition" data-aos="fade-up">
        <div className={`h-2 rounded-full mb-4 ${language.flag}`}>
          <div
            ref={progressRef}
            className="h-full bg-blue-600 rounded-full transition-all duration-1000"
            style={{ width: `${progressWidth}%` }}
          />
        </div>
        <h3 className="text-xl font-semibold mb-2 text-blue-800">{language.name}</h3>
        <p className="text-gray-600 mb-2">{language.description}</p>
        <p className="text-sm text-gray-500">Niveaux : {language.levels.join(", ")}</p>
      </div>
    )
  }

  return (
    <div>
      <section
        id="home"
        className="text-white py-20 md:py-32"
        style={{
          background: "linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
        data-aos="fade"
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-2xl md:text-4xl font-bold mb-6" data-aos="fade-up">Apprenez les Langues avec Confiance</h1>
          <p className="mb-8 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            Découvrez notre centre linguistique à Yaoundé et maîtrisez l'italien, l'anglais, le français et bien d'autres langues avec nos professeurs expérimentés.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4" data-aos="fade-up" data-aos-delay="200">
            <a href="#contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-md font-medium transition duration-300 transform hover:scale-105">
              <FaPhoneAlt className="inline mr-2" /> Contactez-nous
            </a>
            <a href="#courses" className="bg-white hover:bg-gray-100 text-blue-800 px-8 py-4 rounded-md font-medium transition duration-300 transform hover:scale-105">
              <FaBook className="inline mr-2" /> Nos Cours
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center text-blue-800 mb-12" data-aos="fade-up">Pourquoi choisir La Conoscenza ?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-blue-50 p-6 rounded-lg shadow-sm text-center hover:shadow-md transition"
                data-aos="fade-up"
                data-aos-delay={100 * index}
              >
                <div className="bg-blue-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className=" font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="courses" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-blue-800 mb-4" data-aos="fade-up">Nos Langues Enseignées</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            Découvrez notre gamme complète de langues avec des cours adaptés à tous les niveaux, des débutants aux avancés.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {languages.map((language, index) => (
              <LanguageCard key={index} language={language} />
            ))}
          </div>

          <div className="mt-8 text-center" data-aos="fade-up">
            <a href="#courses" className="inline-block px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition font-medium">
              <FaArrowRight className="inline mr-2" /> Voir toutes nos langues (allemand, espagnol, chinois, portugais)
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Hero
