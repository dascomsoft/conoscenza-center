import { FaPhoneAlt, FaBook, FaChalkboardTeacher, FaUsers, FaCertificate, FaArrowRight } from 'react-icons/fa'
import { useEffect, useRef, useState } from 'react'
import React from 'react'
import center1 from '../assets/image2.jpg'
import education from '../assets/index.webp'

import { Link } from 'react-router-dom'




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
          background: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${center1})`,
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
            <Link to="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-md font-medium transition duration-300 transform hover:scale-105">
              <FaPhoneAlt className="inline mr-2" /> Contactez-nous
            </Link>
            <Link to="/courses" className="bg-white hover:bg-gray-100 text-blue-800 px-8 py-4 rounded-md font-medium transition duration-300 transform hover:scale-105">
              <FaBook className="inline mr-2" /> Nos Cours
            </Link>
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
            <Link to="/courses" className="inline-block px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition font-medium">
              <FaArrowRight className="inline mr-2" /> Voir toutes nos langues (allemand, espagnol, chinois, portugais)
            </Link>
          </div>
        </div>
      </section>
       <section className="py-20 px-6 bg-gray-50 text-gray-800">
        <div className="max-w-7xl mx-auto">
          {/* Présentation des formations */}
          <h2 className="text-xl md:text-2xl font-bold text-center mb-12" data-aos="fade-up">
            🎓 Nos Formations en Présentiel & en Ligne
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Présentiel */}
            <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition" data-aos="zoom-in-left" data-aos-delay="100">
              <div className="flex items-center mb-4">
                <span className="text-4xl mr-3">🏫</span>
                <h3 className="text-lg font-bold">Cours en Présentiel</h3>
              </div>
              <p className="text-gray-700 mb-2">
                Nos classes à effectif réduit vous garantissent un suivi personnalisé, une immersion linguistique efficace,
                et un encadrement de qualité dans nos locaux modernes.
              </p>
              <ul className="list-disc list-inside text-sm text-gray-600">
                <li>Préparation aux examens : Goethe (🇩🇪), CELI / CILS / PLIDA (🇮🇹), IELTS & TOEFL (🇬🇧)</li>
                <li>Sessions intensives & régulières</li>
                <li>Formateurs certifiés et expérimentés</li>
              </ul>
            </div>

            {/* En ligne */}
            <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition" data-aos="zoom-in-right" data-aos-delay="100">
              <div className="flex items-center mb-4">
                <span className="text-4xl mr-3">💻</span>
                <h3 className="text-lg font-bold">Cours en Ligne</h3>
              </div>
              <p className="text-gray-700 mb-2">
                Apprenez depuis chez vous avec des cours interactifs, des supports numériques, et un accompagnement vidéo en temps réel.
              </p>
              <ul className="list-disc list-inside text-sm text-gray-600">
                <li>Accès aux replays et documents PDF</li>
                <li>Entraînements en ligne aux examens</li>
                <li>Flexibilité des horaires : soir, week-end, selon vos disponibilités</li>
              </ul>
            </div>
          </div>

          {/* Section Témoignages */}
          <div className="mt-20 text-center">
            <h3 className="text-xl font-bold mb-8" data-aos="fade-up">🗣️ Ils ont suivi nos formations avec succès</h3>
            <div className="grid md:grid-cols-3 gap-6 text-left" data-aos="fade-up" data-aos-delay="100">
              {/* Témoignage 1 */}
              <div className="bg-white p-6 rounded-xl shadow">
                <p className="text-sm italic mb-4">"Grâce à Intelligencia, j'ai obtenu mon certificat B2 en allemand en seulement 4 mois ! Les cours sont très bien structurés."</p>
                <div className="font-bold">🇩🇪 Marc, futur étudiant en Allemagne</div>
              </div>

              {/* Témoignage 2 */}
              <div className="bg-white p-6 rounded-xl shadow" data-aos="fade-up" data-aos-delay="200">
                <p className="text-sm italic mb-4">"Les cours en ligne sont super pratiques ! J’ai réussi mon CELI B2 et je prépare maintenant mon dossier pour l’Italie."</p>
                <div className="font-bold">🇮🇹 Aïcha, candidate à l’immigration</div>
              </div>

              {/* Témoignage 3 */}
              <div className="bg-white p-6 rounded-xl shadow" data-aos="fade-up" data-aos-delay="300">
                <p className="text-sm italic mb-4">"J’ai passé l’IELTS avec un excellent score. Merci aux enseignants qui m’ont accompagné du début à la fin."</p>
                <div className="font-bold">🇬🇧 Lionel, futur ingénieur au Canada</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section
        className="relative bg-center bg-no-repeat bg-cover bg-fixed text-white py-20 px-6 mb-0"
        style={{
          backgroundImage: `radial-gradient(rgba(20, 21, 51, 0.9), rgba(20, 21, 51, 0.5)), url(${education})`,
        }}
      >
        <div className="container px-6 mx-auto" data-aos="fade-up" data-aos-delay="200">
          <h2 className="text-xl md:text-3xl font-bold text-green-400 mb-6">
            📅 Planifiez votre consultation gratuite
          </h2>
          <p className=" mb-8 max-w-3xl">
            Vous avez des questions sur nos programmes de formation ? Vous souhaitez être guidé pour réussir vos examens internationaux (TOEFL, IELTS, DELF, CELI, etc.) ?
            Prenez un rendez-vous personnalisé avec l’un de nos conseillers dès maintenant !
          </p>
          <a
            href="https://wa.me/237652226323?text=Bonjour%20!%20Je%20souhaite%20planifier%20une%20consultation%20gratuite%20avec%20votre%20centre%20de%20formation%20pour%20m%27informer%20sur%20vos%20cours%20et%20les%20préparations%20aux%20examens.%20Merci%20de%20me%20recontacter%20!"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-xl transition"
          >
            Planifiez votre consultation gratuite
          </a>
        </div>
      </section>
    </div>
  )
}

export default Hero
